import * as types from './actionTypes';

export function buyItem(item) {
    return {
        type: types.BUY_ITEMS,
        payload: item
    };
}