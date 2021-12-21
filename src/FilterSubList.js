import React from 'react'
import { Button } from '@material-ui/core';


function FilterSubList(props) {
    return (
        <ul className="filters__sublist ScrollStyle">
            <h4 className="filter__title">{props.heading}</h4>
            {props.filterList.slice(0, 10000).map((name)=>{
                // console.log(brand)
                return <l1 className="filter__items"> <input className="checkbox" 
                onClick={props.handleChange} value={name} name={props.heading} type="checkbox"/>{name}</l1>
            })}
        </ul>
    )
}
export default FilterSubList
