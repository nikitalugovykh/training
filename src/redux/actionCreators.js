import { ADD_ITEM, ADD_ITEM_HISTORY, REMOVE_HISTORY, REMOVE_ITEM, UPDATE_TIMER } from "./action_type";

export function addItem(data) {
    return {
        type: ADD_ITEM,
        data
    }
} 

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        id
    }
}
export function addItemHistory(data) {
    return {
        type: ADD_ITEM_HISTORY,
        data
    }
}
export function removeHistory() {
    return {
        type: REMOVE_HISTORY,

    }
}
export function updateTimer() {
    return {
        type: UPDATE_TIMER,
        
    }
}
