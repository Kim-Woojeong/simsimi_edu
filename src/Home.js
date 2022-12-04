import { useRef, useState } from "react";
import SimsimiImg from './img/simsimi.png';

const Home = ({onCreate}) => {
    const contentsInput = useRef();
    const answerInput = useRef();

    const [state, setState] = useState({
        contents: "",
        answer: "",
    });

    const handleChangeState = e => {
        setState({
            ...state,
            // contents: e.target.contents,
            // answer: e.target.answer,
            [e.target.name]: e.target.value, // contents : "안녕", answer : "하세요"
        });
        console.log(state); // 한쪽만 입력하면 한쪽만 나옴.
    };

    function handleSubmit () {
        alert("다른사람이 이렇게 말하면 : " + state.contents + "/ 심심이가 대답합니다" + state.answer);
        onCreate(state.contents, state.answer);

        setState({
            contents: "",
            answer: "",
        });
    };

    return (
        <div className="Home">
            <div className="homeTitle">
                <h1>Simsimi Edu</h1>
                <h3>나만의 AI 만들기</h3>
            </div>
            <div className="SimsimiBackground">
                <span>모르는말이에요 가르쳐주세요!</span>
                <img src={SimsimiImg} alt="심심이이미지"/>
            </div>
            <div className="messageInputSendArea">
                <div className="messageInputArea">
                    <input
                        ref={contentsInput}
                        name="contents"
                        value={state.contents}
                        onChange={handleChangeState}
                        placeholder="누군가가 이렇게 말하면"
                    />
                    <input
                        ref={answerInput}
                        name="answer"
                        value={state.answer}
                        onChange={handleChangeState}
                        placeholder="심심이가 답합니다"
                    />
                </div>
                <div className="buttonArea">
                    <button onClick={handleSubmit}>가르치기</button>
                </div>
            </div>
        </div>
    );
}

export default Home;