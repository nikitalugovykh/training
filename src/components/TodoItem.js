import React from 'react';
import { connect } from 'react-redux';
import { addItemHistory, removeItem, updateTimer } from '../redux/actionCreators';
import { getTimeForRender } from '../timer';

class TodoItem extends React.Component {
    componentDidMount() {
        this.countDownTimer = setInterval(() => {
            this.props.updateTimer(this.props.data.id)
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.countDownTimer)
    }
    render(){
        return (
            <li className="list-group-item mt-3 border-top" style = {{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span>{this.props.data.todo}</span>
                {console.log(this.props.timer)}
                <span>{this.props.data.date ? getTimeForRender(this.props.timer) : '---'}</span>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick = {()=> {
                        this.props.addToHistory(this.props.data)
                        this.props.remove(this.props.data.id)
                    }}
                    >Сделано
                </button>
            </li>
        )
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        remove: (id) => dispatch(removeItem(id)),
        addToHistory: (data) => dispatch(addItemHistory(data)),
        updateTimer: (id) => dispatch(updateTimer(id))
    }
}

function mapStatetoProps(state) {
// тут массив с {} надо как-то по id выцеплять 
    return  {
        timer: state.todoItems.remainingTime
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(TodoItem)