import React from "react";
import {SetMessagesActionCreator} from "../redux/MessageReducer";
import {connect} from "react-redux";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


class MessagesContainer extends React.Component {


    componentDidMount() {

        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=10&page=1")
            .then(response => {
                this.props.setMessages(response.data);
            });
    }

    render() {
        return <div>

            <div className="container">
                <div className="loading">
                    <Box sx={{width: '100%'}}>
                        <LinearProgress/>
                    </Box>


                </div>


                <Stack spacing={2} direction="row">
                    <Button variant="contained">Следующая страница</Button>
                    <Button variant="contained">Получить 100 постов</Button>


                </Stack>
                <div className="searchBlock">
               <span>
                Искать в  таблице:

                <input type="text" id="searchField"
                       placeholder="search"
                    // value={inputTextValue}
                       key="searchField"
                    // onChange={(event => {
                    //     setInputTextValue(event.target.value)
                    //     filtered(event.target.value)
                    // })}
                />

            </span>


                </div>


                <div>Отображено записей {this.props.messages.length} из   </div>
                <b> Страница №   </b>

                <div className="AllTables">
                    <div className="SmallTable">

                        <div className="messageTableBlock">


                            <table>

                                <tbody>
                                <tr>
                                    <th>№ п/п</th>
                                    <th>user Id</th>
                                    <th>Name</th>

                                </tr>

                                {this.props.messages.map((post, index) =>

                                    <tr key={index}>

                                        <td> {index}</td>
                                        <td> {post.id}</td>
                                        <td> {post.name}</td>

                                    </tr>)
                                }
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>


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

