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
        const styleItem = {
            display:'flex', 
            justifyContent:'space-between', 
            alignItems:'center',
            backgroundColor: `${this.props.data.status[1]}`
        }

        this.timeForRender = this.props.timer.filter(item => item.id === this.props.data.id)

        return (
            <li 
                className="list-group-item mt-3 border-top" 
                style = {styleItem}
            >
                <span>{this.props.data.todo}</span>
                <span>{this.props.data.date 
                            ? getTimeForRender(this.timeForRender[0].remainingTime) 
                            : '---' }
                </span>
                <span>{this.props.data.status[0]}</span>
                <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick = {()=> {
                        this.props.addToHistory(this.props.data)
                        this.props.remove(this.props.data.id)
                    }}
                >
                Сделано
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
    return  {
        timer: state.todoItems
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(TodoItem)