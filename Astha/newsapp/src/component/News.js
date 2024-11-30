import React, { Component } from 'react'
import Newsltem from '../Newsltem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: 'general',
  };

  static propTypes = { // Use 'propTypes' instead of 'PropTypes'
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func,
  };

  capitalizeFirstLetter = (string) => {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
        articles: [],
        loading: false,
        page: 1, // Comma added here
        totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
}
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5dc290efc1b14c8393394ec1ad9affad&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      // page: this.state.page - 1,
      articles: parsedData.articles, // Add a comma here
      totalResults: parsedData.totalResults,
      loading: true,
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };




  handleNextClick = async () => {
    console.log("Next");
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5dc290efc1b14c8393394ec1ad9affad&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      // page: this.state.page - 1,
      articles: this.state.articles.concat(parsedData.articles), // Add a comma here
      totalResults: parsedData.totalResults
    })
  };

  render() {

    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top form {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>

        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >

          <div className="container">
            <div className='row'>
              {this.state.articles.map((element) => {
                return <div className='col-md-4' key={element.url}>
                  <Newsltem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>

        </InfiniteScroll>

        {/* <div className="d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Pervious</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}

      </div>
    )
  }
}

export default News                                                 