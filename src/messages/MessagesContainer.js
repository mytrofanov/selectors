import React from "react";
import {RequestMessages} from "../redux/MessageReducer";
import {connect} from "react-redux";
import {Messages} from "./Messages";

class MessagesContainer extends React.Component{

render() {
return <div>
    <Messages messages={this.props.messages}/>
</div>
}

}


let MapStateToProps = (state) => {
    return {
        messages: state.MessagePage.messages
    }
}
export default connect(MapStateToProps,{RequestMessages})(MessagesContainer);