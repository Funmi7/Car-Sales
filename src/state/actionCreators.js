import * as types from './actionTypes';

export function buyItem(item) {
    return {
        type: types.BUY_ITEMS,
        payload: item
    };
}

export function removeFeature(item) {
    return {
        type: types.REMOVE_FEATURES,
        payload: item
    };
}