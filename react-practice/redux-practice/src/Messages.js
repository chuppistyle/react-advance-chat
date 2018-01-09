import React, {Component} from 'react';

class Messages extends Component{
    submitForm(e){
        e.preventDefault();
        //author, text, dt
        this.props.addNewMessage('@alex123', this.input.value, Date.now())
        this.input.value = '';
    }

    render(){
        return(
            <form action="#" onSubmit={this.submitForm.bind(this)}>
                {this.props.messages.map(m => {
                    const d = new Date(m.datetime);
                    let dMinut =d.getMinutes();
                    if (dMinut<= 9){
                        dMinut = '0'+dMinut;
                    }
                    return (
                        <div className="messages" key={d.datetime}>
                            <span className='msg_time'>
                                {`${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${
                                    dMinut}`}
                                </span>
                            <span className='msg_name'>{m.author}:</span>
                            <span className="msg">{m.text}</span>
                        </div>
                    )
                })}
                <input ref={(input)=>this.input = input} type="text" className="msg_input"/>
            </form>

        )
    }
}

export default Messages

