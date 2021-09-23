import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { addItem } from '../redux/actionCreators';
import { getTimeRemainingMS } from '../timer';

const Form = (props) => {
    
    const submitHandler = ev => {
        ev.preventDefault()
        const inputTodo = document.getElementById('inputTodo');
        const inputDate = document.getElementById('inputDate');
        const inputStatus = document.getElementById('inputStatus');
        
        if (inputTodo.value === '') return

        const data = {
            todo: inputTodo.value,
            date: inputDate.value,
            status: inputStatus.value,
            remainingTime: getTimeRemainingMS(`${inputDate.value}T12:00:00`), 
            id: v4()
        }
        props.addItemToState(data)
        inputTodo.value = ''
        inputDate.value = ''
        inputStatus.value = 'Второстепенно'

    }

    return (
        <div className='container'>
        <form 
            className='mt-2'
            onSubmit= {submitHandler}
            >
            <input 
                type="text" 
                className="form-control" 
                id='inputTodo'
                placeholder="Введите текст" 
                aria-label="Recipient's username" 
                aria-describedby="button-addon2"
                >
            </input>
            <div className="form-row row mt-2">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Конечный срок выполнения</label>
                    <input
                        id='inputDate' 
                        type="date" 
                        className="form-control" 
                        >
                    </input>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputStatus">Важность</label>
                    <select id="inputStatus" className="form-control">
                        <option>Второстепенно</option>
                        <option>Важно</option>
                        <option>Срочно</option>
                    </select>
                </div>
            </div>
            <button 
                className="btn btn-outline-secondary bg-success text-white mt-3" 
                type="submit" 
                id="button-addon2"
                >Отправить
            </button>
        </form>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToState: (data) => {
            dispatch(addItem(data))
        }
    }
}
const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)

