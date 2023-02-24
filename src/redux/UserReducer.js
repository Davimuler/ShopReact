const SET_USERS = "SET-USERS";
const ADD_ITEM_TO_BUY = "ADD-ITEM-TO-BUY";

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
        default:
            return state;
    }
};

export const setUsers = (data) => ({type: SET_USERS, data});
export const addItemToBuy = (data) => ({type: ADD_ITEM_TO_BUY, data});
export default UserReducer;