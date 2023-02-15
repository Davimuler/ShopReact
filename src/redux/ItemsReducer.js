const SET_ITEMS = "SET-ITEMS";
let InitialState={
    data:[]
}

const itemsReducer = (state=InitialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
        {
            return {...state,data:action.data}

        }
        default:
            return state;
    }
};

export const setItems=(data)=>({type:SET_ITEMS,data});
export default itemsReducer;