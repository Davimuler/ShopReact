const UPDATE_BASKET_VISION = "UPDATE-BASKET-VISION";
const UPDATE_COMPARE_WINDOW_VISION = "UPDATE-COMPARE-WINDOW-VISION";
const INCREMENT_NOTIFICATION_COUNT = "INCREMENT_NOTIFICATION_COUNT";

let InitialState={
    isBasketActive:false,
    notificationCount:0,
    isCompareWindowActive:false
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
        case UPDATE_COMPARE_WINDOW_VISION :{
            return {...state,isCompareWindowActive: action.isActive}
        }
        default:
            return state;
    }
};

export const UpdateBasketVision=(isActive)=>({type:UPDATE_BASKET_VISION,isActive});
export const incrementNotificationCount=(value)=>({type:INCREMENT_NOTIFICATION_COUNT,value})

export const UpdateCompareWindowVision=(isActive)=>({type:UPDATE_COMPARE_WINDOW_VISION,isActive});

export default HeaderReducer;