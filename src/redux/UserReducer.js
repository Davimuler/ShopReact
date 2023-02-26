const SET_USERS = "SET-USERS";
const ADD_ITEM_TO_BUY = "ADD-ITEM-TO-BUY";

const DELETE_ITEM_TO_BUY = "DELETE-ITEM-TO-BUY";

let InitialState = {
    data: [],
    itemsToBuy: []
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

        default:
            return state;
    }
};

export const setUsers = (data) => ({type: SET_USERS, data});
export const addItemToBuy = (data) => ({type: ADD_ITEM_TO_BUY, data});
export const deleteItemToBuy = (id) => ({type: DELETE_ITEM_TO_BUY, id});
export default UserReducer;