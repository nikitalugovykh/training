import React from 'react';
import { connect } from 'react-redux';
import { addItemHistory, removeItem } from '../redux/actionCreators';

const TodoItem = (props) => {
    return (
        <li className="list-group-item mt-3 border-top" style = {{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <span>{props.data.todo}</span>
            <span>{props.data.date ? props.data.date : '---'}</span>
            <button 
                type="button" 
                className="btn btn-danger"
                onClick = {()=> {
                    props.addToHistory(props.data)
                    props.remove(props.data.id)
                }}
                >Сделано
            </button>
        </li>
    )
}

function mapDispatchtoProps(dispatch) {
    return {
        remove: (id) => dispatch(removeItem(id)),
        addToHistory: (data) => dispatch(addItemHistory(data))
    }
}

export default connect(null, mapDispatchtoProps)(TodoItem)