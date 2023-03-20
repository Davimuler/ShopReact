

const SET_ITEMS = "SET-ITEMS";
const SET_SECTION = "SET-SECTION";
const SET_SEARCH_BAR = "SET-SEARCH-BAR";

let InitialState={
    data:[],
     filterSection:"Santechnics",
     searchBar:''
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
        case SET_SEARCH_BAR:
        {
            return {...state,searchBar:action.value}
        }
        default:
            return state;
    }
};

export const setItems=(data)=>({type:SET_ITEMS,data});
export const setSection=(section)=>({type:SET_SECTION,section})
export const setSearchBar=(value)=>({type:SET_SEARCH_BAR,value})
export default itemsReducer;