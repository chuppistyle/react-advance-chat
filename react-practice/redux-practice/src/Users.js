import React, {Component} from 'react';

class Users extends Component{
    render(){
        return(
            <div className='users'>
                <h3>Users online</h3>
                <hr/>
                <ul>
                {this.props.users.map(u => {
                    return <li key={u}>{u}</li>
                })}
                </ul>
                <button onClick={this.props.addNewUser}>
                    add new user
                </button>

            </div>

        )
    }
}

export default Users

