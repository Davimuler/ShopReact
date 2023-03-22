import React from 'react';
import S from './AuthUserData.module.css'
import ExpandableComponent from "../expandableComponent/ExpandableComponent";
import ShowImage from "../../../components/MainContent/auth/Items/CreateItem/ShowImage/ShowImage";

const AuthUserData = (props) => {
    return (
        <div className={S.UserBox}>
            <div>
              <img className={S.UserImg} src={props.User.avatarUrl}/>
            </div>
            <div>
                Name: {props.User.fullName}
            </div>
            <div>
                Email: {props.User.email}
            </div>
            <div>
                Account created at: {props.User.createdAt.substring(0, 10)}
            </div>

        </div>
    );
};

export default AuthUserData;