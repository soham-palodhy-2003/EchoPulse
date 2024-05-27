import React from 'react';

const NewsItem = (props) => {
  const { title, description, imgUrl, newsUrl, author, date, source} = props
  
  return (
    <div className='my-3'>
      <div className="card">
        {imgUrl && (
          <img src={imgUrl} className="card-img-top" alt={title || 'News Item'} />
        )}
        <div className="card-body">
          <h5 className="card-title">{title} <span className ="badge rounded-pill bg-danger" style={{left: '90%', zIndex:"1"}}>{source}</span></h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className='text-muted'>By {!author? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
