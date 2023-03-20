import {connect} from "react-redux";
import MainContent from "./MainContent";
import {incrementNotificationCount, UpdateBasketVision, UpdateCompareWindowVision} from "../../redux/HeaderReducer";
import {
    addItemToBuy,
    addItemToCompare,
    addItemToView,
    deleteItemToBuy,
    deleteItemToCompare,
    setUsers
} from "../../redux/UserReducer";
import {setItems, setSection} from "../../redux/ItemsReducer";
import {getFilteredItems} from "./itemsSelector";


const mapStateToProps = (state) => {
    return {
        isBasketActive: state.Header.isBasketActive,
        data: state.Users.data,
        // itemsData:state.Items.data,
        itemsData: getFilteredItems(state),
        notificationCount: state.Header.notificationCount,
        itemsToBuy: state.Users.itemsToBuy,
        isCompareWindowActive: state.Header.isCompareWindowActive,
        itemsToCompare: state.Users.itemsToCompare,
        itemToView: state.Users.itemToView
    }
}


export const MainContentContainer = connect(mapStateToProps, {
    setSection,
    deleteItemToCompare,
    UpdateCompareWindowVision,
    addItemToBuy,
    addItemToCompare,
    deleteItemToBuy,
    setUsers,
    incrementNotificationCount,
    setItems,
    UpdateBasketVision,
    addItemToView
})(MainContent)