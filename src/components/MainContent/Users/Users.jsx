import React from 'react';
import OneUser from "./OneUser/OneUser";
import axios, {apiGetUsers} from "../../../api/api.js";


class Users extends React.Component {
    componentDidMount(){
        apiGetUsers().then(data => {
            if (this.props.data.length === 0) {
                this.props.setUsers(data)
            }
        })
            // axios.get('/users').then(response => {
            //     if (this.props.data.length === 0) {
            //         this.props.setUsers(response.data)
            //     }
            // })
        }
    render() {
        return (
            <div>
                {this.props.data.length === 0 ? <></> : this.props.data.map(
                    u=><OneUser avatarUrl={u.avatarUrl} email={u.email} id={u._id} key={u._id} name={u.fullName}/>)}
            </div>
        );
    }
}

export default Users;

