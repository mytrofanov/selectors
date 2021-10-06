import React from "react";
import {SetMessagesActionCreator} from "../redux/MessageReducer";
import {connect} from "react-redux";
import {Messages} from "./Messages";
import axios from "axios";

class MessagesContainer extends React.Component {
    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.props.setMessages(response.data);
            });
    }

    render() {
        return <div>

            {this.props.messages.map(u =>
                <Messages userId={u.userId} id={u.id} title={u.title} body={u.body} key={u.id}/>)
            }


        </div>
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        setMessages: (messages) => {
            dispatch(SetMessagesActionCreator(messages));
        }
    }
}

let MapStateToProps = (state) => {
    return {
        messages: state.MessagePage.messages
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(MessagesContainer);