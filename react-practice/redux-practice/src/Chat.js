import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Users from './Users';
import Messages from './Messages';
import {addNewUser, newMessage} from './actions'



class Chat extends Component{
    render(){

        return(
            <div className='chat'>
                <Users users={this.props.users} addNewUser={this.props.addNewUser}/>
                <Messages messages={this.props.messages} addNewMessage={this.props.addNewMessage}/>
            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return{
        users: state.usersReducer,
        messages: state.messagesReducer
    }
}
const mapDispatchToProps=(dispatch) =>{
    return {
        addNewUser: bindActionCreators(addNewUser, dispatch),
        addNewMessage: bindActionCreators(newMessage, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)



