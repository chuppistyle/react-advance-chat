import faker from "faker";
/*
export const addNewUser = () => {
    const username = `@${faker.internet.userName().toLowerCase()}`;
    return{
       type: 'ADD_NEW_USER',
       username
    }
}*/
export const addNewUser = () => {
    const username = `@${faker.internet.userName().toLowerCase()}`;
    return dispatch => {
        dispatch ({
            type: 'ADD_NEW_USER',
            username
        })
        dispatch (newMessage(
            username,
            'Hello People',
            Date.now()

        ))

    }
}

export const newMessage = (author, text, datetime) =>{
    return{
        type: 'ADD_NEW_MESSAGE',
        author, text, datetime
    }
}
