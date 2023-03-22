const SET_USERS = "SET-USERS";
const ADD_ITEM_TO_BUY = "ADD-ITEM-TO-BUY";
const ADD_ITEM_TO_COMPARE = "ADD-ITEM-TO-COMPARE"
const DELETE_ITEM_TO_BUY = "DELETE-ITEM-TO-BUY";
const DELETE_ITEM_TO_COMPARE = "DELETE-ITEM-TO-COMPARE";
const LOG_USER = "LOG-USER";
const ADD_ITEM_TO_VIEW = "ADD-ITEM-TO-VIEW"
const ADD_ITEM_TO_WISH_LIST = "ADD-ITEM-TO-WISH-LIST"

let InitialState = {
    UserData: null,
    isAuth: false,
    data: [],
    itemsToBuy: [],
    itemsToCompare: [],
    itemToView: null,
    wishList: []
}

const UserReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_USERS: {

            return {...state, data: action.data}

        }
        case ADD_ITEM_TO_BUY: {
            const NewItemsToBuy = [...state.itemsToBuy, action.data]
            return {...state, itemsToBuy: NewItemsToBuy}
        }
        case DELETE_ITEM_TO_BUY: {
            const updatedItems = state.itemsToBuy.filter((item) => item._id !== action.id);
            return {...state, itemsToBuy: updatedItems}
        }
        case ADD_ITEM_TO_COMPARE: {
            const updatedItems = [...state.itemsToCompare, action.data]
            return {...state, itemsToCompare: updatedItems}
        }
        case DELETE_ITEM_TO_COMPARE: {
            const updatedItems = state.itemsToCompare.filter((item) => item._id !== action.id);
            return {...state, itemsToCompare: updatedItems}
        }
        case LOG_USER: {
            return {
                ...state,
                UserData: action.data,
                isAuth: !!action.data
            }
        }
        case ADD_ITEM_TO_VIEW: {
            return {...state, itemToView: action.data}
        }
        case ADD_ITEM_TO_WISH_LIST: {
            const newItem = action.data;
            const updatedWishList = [...state.wishList, newItem];
            return {...state, wishList: updatedWishList};
        }
        default:
            return state;
    }
};

export const setUsers = (data) => ({type: SET_USERS, data});
export const addItemToBuy = (data) => ({type: ADD_ITEM_TO_BUY, data});
export const deleteItemToBuy = (id) => ({type: DELETE_ITEM_TO_BUY, id});
export const deleteItemToCompare = (id) => ({type: DELETE_ITEM_TO_COMPARE, id});
export const addItemToCompare = (data) => ({type: ADD_ITEM_TO_COMPARE, data});
export const logUser = (data) => ({type: LOG_USER, data});
export const addItemToView = (data) => ({type: ADD_ITEM_TO_VIEW, data});
export const addItemToWishList = (data) => ({type: ADD_ITEM_TO_WISH_LIST, data})
export default UserReducer;