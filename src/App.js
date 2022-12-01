import { useRef, useState } from 'react';
import './App.css';
import Home from './Home';
import MessageList from './MessageList';

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

function App() {
  const [data, setData] = useState([]); // 가장위에서 데이터를 관리할 state
  const dataId = useRef(0); // 추가될 일기의 id를 담을 변수

  const onCreate = (contents, answer) => {

    const newMessage = {
      id: dataId.current,
      contents,
      answer,
    }
    dataId.current += 1;
    setData([newMessage, ...data]);
  }

  return (
    <div className="App">
      <Home onCreate={onCreate}/>
      <MessageList MessageList={data}/>
    </div>
  );
}

export default App;