import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { addItem } from '../redux/actionCreators';
import { getTimeRemainingMS } from '../timer';

const Form = (props) => {
    const getBgColor = (status) => {
        return status === 'Второстепенно' 
                            ? 'var(--bs-cyan)' 
                            : status === 'Важно'
                                ? 'var(--bs-yellow)'
                                : 'var(--bs-red)' 
    }
    const submitHandler = ev => {
        ev.preventDefault()
        const inputTitle = document.getElementById('inputTitle');
        const inputDescription = document.getElementById('inputDescription');
        const inputDate = document.getElementById('inputDate');
        const inputStatus = document.getElementById('inputStatus');
        
        if (inputTitle.value === '') return
        if (getTimeRemainingMS(`${inputDate.value}T12:00:00`) < 0) {
            let format = 'year-month-day'
            inputDate.value = format
                        .replace(/year/, new Date().getFullYear())
                        .replace(/month/, new Date().getMonth() + 1)
                        .replace(/day/, new Date().getDate())
        }
        const data = {
            todo: inputTitle.value,
            date: inputDate.value,
            descr: inputDescription.value,
            status: [inputStatus.value, getBgColor(inputStatus.value)],
            remainingTime: getTimeRemainingMS(`${inputDate.value}T12:00:00`), 
            id: v4()
        }

        props.addItemToState(data)
        inputTitle.value = ''
        inputDate.value = ''
        inputDescription.value = ''
        inputStatus.value = 'Второстепенно'

    }

    return (
        <div className='container'>
        <form 
            className='mt-2'
            onSubmit= {submitHandler}
            >
            <label htmlfor="inputTitle" className="form-label"></label>
            <input 
                type="text" 
                className="form-control" 
                id='inputTitle'
                placeholder="Введите заголовок" 
                aria-label=" Title for todo item" 
                aria-describedby="button-addon2"
                >
            </input>
            <label htmlfor="inputDescription" className="form-label mt-2">Введите вашу заметку</label>
            <textarea 
                className="form-control" 
                id="inputDescription" 
                rows="3"
                placeholder="Введите вашу заметку"
            >
            </textarea>
            <div className="form-row row mt-2">
                <div className="form-group col-md-6">
                    <label htmlFor="inputDate">Конечный срок выполнения</label>
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

