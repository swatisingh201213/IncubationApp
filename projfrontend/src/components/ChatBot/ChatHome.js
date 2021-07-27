import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  // background: '#FD933C',
  headerBgColor: "#FD933C",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#FD933C",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};
const config = {
  width: "300px",
  height: "400px",
  floating: true,
};
class ChatHome extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          recognitionEnable={true}
          steps={[
            {
              id: "1",
              message: "What is your name?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you!",
              trigger: 4,
            },
            {
              id: "4",
              message: "how can i help you",
              trigger: "5",
            },
            {
              id: "5",
              user: true,
              trigger: "6",
            },
            {
              id: "6",
              message: "sure i will help you",
              end: true,
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }
}

export default ChatHome;
