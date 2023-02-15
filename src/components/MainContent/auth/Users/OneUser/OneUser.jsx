import React from 'react';
import S from './OneUser.module.css'


const Users = (props) => {
    return (
        <div className={S.user}>
            <div>
                <img src={props.avatarUrl}/>
            </div>
            <div>
               Id: {props.id}
            </div>
            <div>
              Email:{props.email}
            </div>
            <div>
               Name: {props.name}
            </div>

        </div>
    );
};

export default Users;