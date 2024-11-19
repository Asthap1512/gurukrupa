import React, { Component } from 'react'
import Newsltem from '../Newsltem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 5
  };

  static propTypes = { // Use 'propTypes' instead of 'PropTypes'
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };

  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
        articles: this.articles,
        loading: false,
        page: 1 // Remove the trailing comma here
    };

    this.state = {
      articles: [],
      loading: false,
      page: 1
  };
}

async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=&{this.props.category}&apiKey=5dc290efc1b14c8393394ec1ad9affad&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({ loading: true });
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles, // Add a comma here
    loading: false
  });
}  

handlePrevClick = async () => {
  console.log("Previous");
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=&{this.props.category}&apiKey=5dc290efc1b14c8393394ec1ad9affad&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({ loading: true });
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles, // Add a comma here
      loading: false
  });
};

 


handleNextClick = async () => {
  console.log("Next");
  if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=&{this.props.category}&apiKey=5dc290efc1b14c8393394ec1ad9affad&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles, // Add a comma here
          loading: false
      });
  }
};


  render() {
  
    return (
      <div className='container my-3'>
       <h1 className="text-center">NewsMonkey - Top Headlines</h1>
     {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) =>{
        return <div className='col-md-4' key={element.url}>
            <Newsltem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
          })}
        </div>


        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Pervious</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      
      </div>
    )
  }
}

export default News