

const SET_ITEMS = "SET-ITEMS";
const SET_SECTION = "SET-SECTION";

let InitialState={
    data:[],
     filterSection:"Santechnics",
}

const itemsReducer = (state=InitialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
        {
            return {...state,data:action.data}
        }
        case SET_SECTION:
        {
            return {...state,filterSection:action.section}
        }
        default:
            return state;
    }
};

export const setItems=(data)=>({type:SET_ITEMS,data});
export const setSection=(section)=>({type:SET_SECTION,section})
export default itemsReducer;