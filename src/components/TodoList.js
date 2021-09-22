import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <ul className="container">
            {props.state.map((item) => <TodoItem key={item.id} data = {item}/>)}
        </ul>
    )
}
const mapStatetoProps = state => ({
    state: state.todoItems
})
export default connect(mapStatetoProps,null)(TodoList)