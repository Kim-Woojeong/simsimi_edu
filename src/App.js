import { useRef, useState } from 'react';
import './App.css';
import Home from './Home';
import MessageList from './MessageList';
import { createGlobalStyle } from "styled-components";

// const dummyList = [
//   {
//     id:1,
//     contents: "좋은아침~",
//     answer: "굿모닝",
//   },
//   {
//     id:2,
//     contents: "배고파",
//     answer: "오늘은 내가 요리사",
//   },
//   {
//     id:3,
//     contents: "난 너를 사랑해~",
//     answer: "알러뷰걸~",
//   },
// ];

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}`;

function App() {
  const [data, setData] = useState([]); // 가장위에서 데이터를 관리할 state
  const dataId = useRef(0); // 추가될 메세지의 id를 담을 변수

  const onCreate = (contents, answer) => {
    const newMessage = {
      id: dataId.current,
      contents,
      answer,
    }
    dataId.current += 1;
    setData([...data, newMessage]);
  }

  return (
    <div className="App">
      <Home onCreate={onCreate}/>
      <MessageList MessageList={data}/>
    </div>
  );
}

export default App;