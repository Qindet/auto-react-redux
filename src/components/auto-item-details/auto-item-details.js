import React, {useEffect} from "react";
import './auto-item-details.css'
import {connect} from "react-redux";
import {Redirect, withRouter} from 'react-router-dom'
import withService from "../hoc/with-service";
import {itemToDetails} from "../../actions";

const AutoItemDetails = (props) => {


    const {name, price, img, details,id} = props.autoList

    useEffect(() => {
       props.autoService.getItem(+props.itemId)
           .then((item) => props.itemToDetails(item))
    },[])
    if (!id) {
        return <Redirect to="/"/>
    }
    return (
        <div className="auto-details">
            <div className="auto-details__img">
                <img src={img} alt="details"/>
            </div>
            <div className="auto-details__main">
                <span className="details-text"><strong>Model: </strong>{name}</span><br/>
                <span className="details-text"><strong>Information: </strong>{details}</span><br/>
                <span className="details-text"><strong>Price: </strong>{price}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        autoList: state.itemToDetails
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
       itemToDetails: (item) => dispatch(itemToDetails(item))
   }
}

// возможно нужен подход для одного запроса а не получения из всего скорее всего нужно так и сделать
export default withService()(connect(mapStateToProps, mapDispatchToProps)(AutoItemDetails))