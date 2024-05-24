import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
        };
    }
    async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6defb3ab5e9542ecb84e45fe9b2e3bbb";
    let data = await fetch(url);
    let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});

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
                                title={element.title?element.title.slice(0,45):""}
                                description={element.description?element.description.slice(0,88):""}
                                imgUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default News;
