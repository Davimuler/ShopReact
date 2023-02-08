import Header from "./Header";
import {connect} from "react-redux";

 const mapStateToProps=(state)=>{
     return{
         USD:state.Currency.USD,
         EUR:state.Currency.EUR
     }
 }


export const HeaderContainer=connect(mapStateToProps)(Header)