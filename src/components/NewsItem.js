import React from 'react';

const NewsItem = (props) => {
  const { title, description, imgUrl, newsUrl} = props

  return (
    <div className='my-3'>
      <div className="card" style={{ width: "20rem" ,}}>
        {imgUrl && (
          <img src={imgUrl} className="card-img-top" alt={title || 'News Item'} />
        )}
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
