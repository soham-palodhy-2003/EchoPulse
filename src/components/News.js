import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps ={
        country : "in",
        pageSize :8,
        category:"general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6defb3ab5e9542ecb84e45fe9b2e3bbb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false });
    }
    async componentDidMount() {
        /** 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6defb3ab5e9542ecb84e45fe9b2e3bbb&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false });
    
    */
        this.updateNews();
    }
     handlePreviousClick = async () => {
        /**
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6defb3ab5e9542ecb84e45fe9b2e3bbb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ 
            page: this.state.page - 1,
            articles: parsedData.articles ,
            loading: false
     })
     */
     this.setState({ page: this.state.page - 1})
     this.updateNews()
    }
     handleNextClick = async () => {
        /** 
        console.log("next")
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6defb3ab5e9542ecb84e45fe9b2e3bbb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ 
                page: this.state.page + 1,
                articles: parsedData.articles ,
                loading: false 
         })
        } 
        */
       this.setState({ page: this.state.page + 1})
       this.updateNews()
    }
    
    render() {
        return (
            <div className='container my-3'>
                
                <h1 style={{margin: "30px 0px"}}><b>Top Headlines</b></h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {this.state.articles.map((element, index) => (
                        <div className="col-md-4" key={index}>
                            <NewsItem
                                key={element.url}
                                title={element.title ? element.title.slice(0, 45) : ""}
                                description={element.description ? element.description.slice(0, 128) : ""}
                                imgUrl={element.urlToImage}
                                newsUrl={element.url}
                                author={element.author}
                                date={element.publishedAt}
                                source={element.source.name}

                            />
                        </div>
                    ))}
                </div>
                <div className="container-button fixed-bottom d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-outline-primary custom-btn" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults /this.props.pageSize)}  type="button" className="btn btn-outline-primary custom-btn" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
            </div>
        );
    }
}

export default News;
