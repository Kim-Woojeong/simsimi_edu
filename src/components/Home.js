import { useRef, useState } from "react";
import SimsimiImg from '../img/simsimi.png';
import graduation_cap from "../img/graduation-cap.png";
import Arrow from "../img/Arrow.png"
import TeachModal from "./TeachModal";
import MessageList from "./MessageList";
import Share from "./Share";

const Home = ({setStep, step, simsimisay, asksimsimiInput, asksimsimi, setAsksimsimi, teachbuttonRef, teachQuestionInput, teachAnswerInput}) => {
    const [isvisible, setIsvisible] = useState(false);
    const [shareisvisible, setShareisvisible] = useState(false);

    // 가르친말들 다 저장하는곳
    const [data, setData] = useState([]);

    const onCreate = (teachQuestion, teachAnswer) => {
        const newMessage = {
          // id: dataId.current,
          // id 는 Step 값 넣기
          teachQuestion,
          teachAnswer,
        };
        // dataId.current += 1;
        console.log("지금까지 가르친 말은 : ",data);

        // 최초 가르친거라먄
        if(data.length === 0){
            setStep(3);
        }
        if(data.length === 2){
            console.log("세개 가르침!");
            setStep(7);
        }

        setData([...data, newMessage]);
        console.log("현재 입력한 데이터 : ",newMessage);
    }

    function handleSubmit () {
        // alert("다른사람이 이렇게 말하면 : " + state.contents + "/ 심심이가 대답합니다" + state.answer);
        // onCreate(state.contents);

        // setState({
        //     contents: "",
        //     // answer: "",
        // });
    };

    const handleTeachModal = () => {
        setIsvisible(true);
        console.log("isvisible값은! : ",isvisible);
    }

    if(data.length === 1){
        console.log("최초 가르치기!");
    }

    return (
        <div className="Home">
            <div className="homeTitle">
                <h1>Simsimi Edu</h1>
                <h3>나만의 AI 챗봇 심심이 만들기</h3>
            </div>
            {/* <TellMeYourName /> */}
            <div className="imgAndbtn">
                <div className="SimsimiBackground">
                    <span>{simsimisay}</span>
                    <img src={SimsimiImg} alt="심심이이미지"/>
                </div>
                
                <div className="teachBtn">
                    <button 
                        ref={teachbuttonRef}
                        onClick={handleTeachModal}
                    >
                        <img src={graduation_cap} alt="학사모"/>
                    </button>
                    <div className="teach">가르치기</div>
                </div>
            </div>

            <div className="messageInputSendArea">
                <div className="messageInputArea">
                    <input
                        ref={asksimsimiInput}
                        name="contents"
                        value={asksimsimi}
                        onChange={e => setAsksimsimi(e.target.value)}
                        placeholder="심심이에게 말걸기"
                    />
                </div>
                <button className="submitBtn" onClick={handleSubmit}>
                    <img src={Arrow} alt="보내기버튼"/>
                </button>
            </div>
            {(step > 8) && <MessageList MessageList={data}/>}
            {/* 심심이 말 가르치기 modal */}
            {isvisible && <TeachModal data={data} onCreate={onCreate} isvisible={isvisible} setIsvisible={setIsvisible} teachQuestionInput={teachQuestionInput} teachAnswerInput={teachAnswerInput}  />}
            {shareisvisible && <Share />}
        </div>
    );
}

export default Home;