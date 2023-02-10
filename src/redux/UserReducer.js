const SET_USERS = "SET-USERS";
let InitialState={
data:[]
}

const UserReducer = (state=InitialState, action) => {
   switch (action.type) {
      case SET_USERS:
      {

         return {...state,data:action.data}

      }
      default:
         return state;
   }
};

export const setUsers=(data)=>({type:SET_USERS,data});
export default UserReducer;