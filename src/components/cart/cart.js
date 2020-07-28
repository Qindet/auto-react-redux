import React from "react";
import {connect} from "react-redux";
import './cart.css'
import {allItemsDeleted, itemAdded, itemDeleted} from "../../actions";

const Cart = ({items, total, itemAdded, itemDeleted, allItemsDeleted}) => {
    const renderRow = (item, idx) => {
        const {id, name, total, count} = item
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>$ {total}</td>
                <td>
                    <button onClick={() => itemAdded(item)}>
                        <i className="fa fa-plus-square"></i>
                    </button>
                    <button onClick={() => itemDeleted(id)}>
                        <i className="fa fa-minus-square"></i>
                    </button>
                    <button onClick={() => allItemsDeleted(id)}>
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

const mapStateToProps = ({cartReducer: {items, total}}) => {
    return {
        items,
        total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        itemAdded: (item) => dispatch(itemAdded(item)),
        itemDeleted: (id) => dispatch(itemDeleted(id)),
        allItemsDeleted: (id) => dispatch(allItemsDeleted(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)