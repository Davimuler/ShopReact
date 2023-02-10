const UPDATE_BASKET_VISION = "UPDATE-BASKET-VISION";

let InitialState={
    isBasketActive:false
}

const HeaderReducer = (state=InitialState, action) => {
    switch (action.type) {
        case UPDATE_BASKET_VISION:
        {

            return {...state,isBasketActive:action.isActive}

        }
        default:
            return state;
    }
};
export const UpdateBasketVision=(isActive)=>({type:UPDATE_BASKET_VISION,isActive});
export default HeaderReducer;