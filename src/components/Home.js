import { useEffect, useRef, useState } from "react";
import SimsimiImg from '../img/simsimi.png';
import Narration from "./Narration";
import graduation_cap from "../img/graduation-cap.png";
import Arrow from "../img/Arrow.png"
import TeachModal from "./TeachModal";

const Home = ({onCreate}) => {
    const contentsInput = useRef();
    // const answerInput = useRef();
    const [isvisible, setIsvisible] = useState(false);
    const [step, setStep] = useState(0);
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

    const handleTeachModal = () => {
        setIsvisible(true);
        console.log("isvisible값은! : ",isvisible);
    }

    // useEffect(()=>{
    //     console.log("isvisible 값 변화함! = ",isvisible);
    // }, [isvisible]);
    // setIsvisible(true);

    const [hightlightbtn, setHightlightbtn] = useState(false);

    // 스텝별 행동
    // if(step === 2){
    //     console.log("가르치자!");
    //     setHightlightbtn(true);
    // }

    return (
        
        <div className="Home">
            <div className="homeTitle">
                <h1>Simsimi Edu</h1>
                <h3>나만의 AI 챗봇 심심이 만들기</h3>
            </div>
            {/* <TellMeYourName /> */}
            <div className="imgAndbtn">
                <div className="SimsimiBackground">
                    <span>모르는말이에요, 가르쳐주세요!</span>
                    <img src={SimsimiImg} alt="심심이이미지"/>
                </div>
                
                <div className="teachBtn">
                    <button onClick={handleTeachModal}>
                        <img src={graduation_cap} alt="학사모"/>
                    </button>
                    <div className="teach">가르치기</div>
                </div>
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
                <button className="submitBtn" onClick={handleSubmit}>
                    <img src={Arrow} alt="보내기버튼"/>
                </button>
            </div>
            {<Narration step={step} setStep={setStep}/>}
            {isvisible && <TeachModal isvisible={isvisible} setIsvisible={setIsvisible}/>}
        </div>
    );
}

export default Home;