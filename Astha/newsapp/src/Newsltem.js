import React from 'react'

const Newsltem = (props)=> { 
        let {title, description, imageUrl, newsUrl, author, date} = props;
        return (
            <div>
                <div className="card">
                    <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title} <span className="badge rounded-pill bg-success">Success</span></h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl}  target="_blank"  rel="noopener noreferrer" className="btn-btn-sm btn btn-dark" >Read More</a>
                        </div>
                </div>
            </div>
        )
    }


export default Newsltem