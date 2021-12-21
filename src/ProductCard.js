import React from 'react'
import './ProductCard.css'
import StarIcon from '@material-ui/icons/Star';
import { useHistory } from "react-router-dom";

function ProductCard(props) {
    var words = props.productTitle.split(" ");
    const history = useHistory();
    // console.log(words);
    var paramURL = ""
    for(const word in words){
        paramURL = paramURL+words[word]+'-';
    }
    paramURL = "/"+paramURL
    // console.log(paramURL)

    const handleRoute = () =>{ 
        history.push(paramURL);
    }
    if(props.productPrice2 != ''){
        return (
            <div onClick={handleRoute} className="col-md-3 col-sm-6 product__card">
                <img 
                    className="product__card-img w-100"
                    src= {props.productURL}
                    alt=""
                 >
                 </img>
                 <div className="product__info">
                     <div className="product__title">
                        <p>{props.productTitle}</p>
                     </div>
                    
                    <p className="vendor__name">{props.seller_name}</p>
                    <div className="product__rating">
                        <StarIcon style={{fill: "#0491ED"}}/>
                        <StarIcon style={{fill: "#0491ED"}}/>
                        <StarIcon style={{fill: "#0491ED"}}/>
                        <StarIcon style={{fill: "#0491ED"}}/>
                        <StarIcon style={{fill: "#0491ED"}}/>
                    </div>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{props.productPrice1} - </strong>
                        <small>$</small>
                        <strong>{props.productPrice2}</strong>
                    </p>
                 </div>
                 
            </div>
        )
    }else{
        return (
            <div className="col-md-3 col-sm-6 product__card">
                <img 
                    className="product__card-img w-100"
                    src= {props.productURL}
                    alt=""
                 >
                 </img>
                 <div className="product__info">
                     <div className="product__title">
                        <p>{props.productTitle}</p>
                     </div>
                    
                    <p className="vendor__name">{props.seller_name}</p>
                    <div className="product__rating">
                        <StarIcon style={{fill: "#0491ED"}}/>
                        <StarIcon style={{fill: "#0491ED"}}/>
                        <StarIcon style={{fill: "#0491ED"}}/>
                        <StarIcon style={{fill: "#0491ED"}}/>
                        <StarIcon style={{fill: "#0491ED"}}/>
                    </div>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{props.productPrice1}</strong>
                    </p>
                 </div>
                 
            </div>
        )
    }

    
}

export default ProductCard
