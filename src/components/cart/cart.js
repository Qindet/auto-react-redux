import React from "react";
import {connect} from "react-redux";
import './cart.css'

const Cart = ({items, total}) => {
    const renderRow = (item, idx) => {
        const {id, name, price, count} = item
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>$ {price}</td>
                <td>
                    <button>
                        <i className="fa fa-plus-square"></i>
                    </button>
                    <button>
                        <i className="fa fa-minus-square"></i>
                    </button>
                    <button>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>

            </tr>
        )
    }

    return (
        <div className="cart-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                {
                    items.map(renderRow)
                }
                </tbody>
            </table>
            <div className="total-price">
                Total price: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = ({cartReducer: {items}}) => {
    return {
        items
    }
}

export default connect(mapStateToProps)(Cart)