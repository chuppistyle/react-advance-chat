import {combineReducers} from 'redux';


const  userState = ['@john_123', '@alex_1989', '@chris'];
const messagesState = [
    {'text': ' Hello Everyone',
     'datetime': 1512747706260,
     'author': '@alex_1989 (Admin)'
    },
    {'text': ' Hello Everyone',
        'datetime': 1512748830602,
        'author': '@chris (Moderator)'
    },
];

const usersReducer = (state= userState, action) =>{
    console.log(action);
    if(action.type === 'ADD_NEW_USER'){
        return state.concat(action.username);
    }
    return state
};
const messagesReducer =(state = messagesState, action)=>{
    if(action.type === "ADD_NEW_MESSAGE"){
        return state.concat({
            text: action.text,
            datetime: action.datetime,
            author: action.author
        })
    }

    return state
}

export default  combineReducers({

    usersReducer,
    messagesReducer

});
