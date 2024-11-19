import React, { Component } from 'react'

export class Newsltem extends Component {
  
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl}  target="_blank"  rel="noopener noreferrer" className="btn-btn-sm btn btn-dark" >Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsltem