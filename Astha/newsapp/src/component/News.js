import React, { Component } from 'react';
import Newsltem from '../Newsltem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 5
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const { country, pageSize } = this.props;
    const { page } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=5dc290efc1b14c8393394ec1ad9affad&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false
    });
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 }, this.fetchNews);
  };

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.setState({ page: this.state.page + 1 }, this.fetchNews);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            Array.isArray(this.state.articles) &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsltem
                    title={element.title || ""}
                    description={element.description || ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>

        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
