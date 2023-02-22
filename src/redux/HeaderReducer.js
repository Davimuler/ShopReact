const UPDATE_BASKET_VISION = "UPDATE-BASKET-VISION";
const INCREMENT_NOTIFICATION_COUNT = "INCREMENT_NOTIFICATION_COUNT";

let InitialState={
    isBasketActive:false,
    notificationCount:0
}

const HeaderReducer = (state=InitialState, action) => {
    switch (action.type) {
        case UPDATE_BASKET_VISION:
        {

            return {...state,isBasketActive:action.isActive}

        }
        case INCREMENT_NOTIFICATION_COUNT :{
            return {...state,notificationCount: action.value}
        }
        default:
            return state;
    }
};
export const UpdateBasketVision=(isActive)=>({type:UPDATE_BASKET_VISION,isActive});
export const incrementNotificationCount=(value)=>({type:INCREMENT_NOTIFICATION_COUNT,value})
export default HeaderReducer;