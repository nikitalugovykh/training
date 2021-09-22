import React from 'react';
import { connect } from 'react-redux';
import { removeHistory } from '../redux/actionCreators';
import { HistoryItem } from './HistoryItem';

const History = (props) => {
    const styleBtn = {
        position: 'fixed',
        bottom: '20px',
        right:'15px'
    }
    const styleSection = {
        height:'80vh', 
        overflow:'overlay',
    }
    return (
        <section className='border' style={styleSection}>
        <ul className="container">
            {props.store.map(item => <HistoryItem key = {item.id} data = {item}/>)}
        </ul>
        <button 
            type="button"
            style={styleBtn}
            className="btn btn-success"
            onClick = {()=> {
                props.removeAll()
            }}
            >Очистить историю
        </button>
    </section>
    )
}

    

function mapStoreToProps(store) {
    return {
        store: store.history
    }
}
function mapDispatchToProps(dispatch) {
    return {
        removeAll: () => dispatch(removeHistory())
    }
}

export default connect (mapStoreToProps,mapDispatchToProps)(History)