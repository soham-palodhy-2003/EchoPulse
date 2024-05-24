import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }
    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6defb3ab5e9542ecb84e45fe9b2e3bbb&page=1pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults});
    }
     handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6defb3ab5e9542ecb84e45fe9b2e3bbb&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ 
            page: this.state.page - 1,
            articles: parsedData.articles  
     })
    }
     handleNextClick = async () => {
        console.log("next")
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)) {

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6defb3ab5e9542ecb84e45fe9b2e3bbb&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({ 
                page: this.state.page + 1,
                articles: parsedData.articles  
         })
        } 
       
    }
    
    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element, index) => (
                        <div className="col-md-4" key={index}>
                            <NewsItem
                                key={element.url}
                                title={element.title ? element.title.slice(0, 45) : ""}
                                description={element.description ? element.description.slice(0, 88) : ""}
                                imgUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    ))}
                </div>
                <div className="container-button fixed-bottom d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-outline-primary custom-btn" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / 20)}  type="button" className="btn btn-outline-primary custom-btn" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
            </div>
        );
    }
}

export default News;
