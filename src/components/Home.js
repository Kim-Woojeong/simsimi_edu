import { useRef, useState } from "react";
import SimsimiImg from '../img/simsimi.png';
import MessageSendBtn from '../img/sendbutton.png';
import Narration from "./Narration";
import TeachBtn from "../img/teachbtn.png";
import TeachModal from "./TeachModal";

const Home = ({onCreate}) => {
    const contentsInput = useRef();
    // const answerInput = useRef();

    const [state, setState] = useState({
        contents: "",
        // answer: "",
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
        // alert("다른사람이 이렇게 말하면 : " + state.contents + "/ 심심이가 대답합니다" + state.answer);
        onCreate(state.contents);

        setState({
            contents: "",
            // answer: "",
        });
    };

    return (
        <div className="Home">
            <div className="homeTitle">
                <h1>Simsimi Edu</h1>
                <h3>나만의 AI 챗봇 심심이 만들기</h3>
            </div>
            {/* <TellMeYourName /> */}
            <div className="SimsimiBackground">
                <span>모르는말이에요, 가르쳐주세요!</span>
                <img src={SimsimiImg} alt="심심이이미지"/>
            </div>
            <div className="messageInputSendArea">
                <div className="messageInputArea">
                    <input
                        ref={contentsInput}
                        name="contents"
                        value={state.contents}
                        onChange={handleChangeState}
                        placeholder="심심이에게 말걸기"
                    />
                </div>
                <div className="submitBtn">
                    <button onClick={handleSubmit}>G</button>
                </div>
                {/* <div className="buttonArea">
                    <img src={MessageSendBtn} alt="보내기버튼" onClick={handleSubmit}/>
                </div> */}
                {/* <div className="teachBtn">
                    <button>
                        <img src={TeachBtn} alt="가르치기"/>
                    </button>
                </div> */}
            </div>
            {/* {<Narration />} */}
            {<TeachModal />}
        </div>
    );
}

export default Home;