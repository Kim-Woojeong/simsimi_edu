import { useRef, useState } from "react";
import SimsimiImg from '../img/simsimi.png';
import graduation_cap from "../img/graduation-cap.png";
import share from "../img/share.png";
import Arrow from "../img/Arrow.png"
import TeachModal from "./TeachModal";
import MessageList from "./MessageList";
import Share from "./ShareModal";
import SimsimiShadow from "../img/simsimishadow.png"
import ShareModal from "./ShareModal";

const Home = ({data, setData, setStep, step, simsimisay, asksimsimiInput, asksimsimi, setAsksimsimi, teachbuttonRef, teachQuestionInput, teachAnswerInput}) => {
    const [isvisible, setIsvisible] = useState(false);
    const [shareisvisible, setShareisvisible] = useState(false);

    const teachBtnRef = useRef();
    const shareBtnRef = useRef();
    const SimsimiBackgroundRef = useRef();
    const messageInputSendAreaRef = useRef();
    const MessageListContainerRef = useRef();

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

    if(step === 9){
        teachBtnRef.current.className = "teachBtn fadeout";
        shareBtnRef.current.className = "teachBtn shareBtn fadeout";

        SimsimiBackgroundRef.current.className = "SimsimiBackground moveleft";
        SimsimiBackgroundRef.current.style = "width: 450px";
        messageInputSendAreaRef.current.className =  "messageInputSendArea moveleft";

        // MessageListContainerRef.current.className = "MessageListContainer fadein";
    }

    if(step === 11){
        teachBtnRef.current.className = "teachBtn fadein";
        shareBtnRef.current.className = "teachBtn shareBtn fadein";
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
        console.log("가르치기 모달on");
    }

    if(data.length === 1){
        console.log("최초 가르치기!");
    }

    const handleShareModal = () => {
        setShareisvisible(true);
        console.log("공유하기 모달on");
    }

    return (
        <div className="Home">
            <div className="homeTitle">
                <h1>Simsimi Edu</h1>
                <h3>나만의 AI 챗봇 만들기</h3>
            </div>
            <div className="imgAndbtn">
                <div 
                    ref={SimsimiBackgroundRef}
                    className="SimsimiBackground">
                    <span>{simsimisay}</span>
                    <div className="imgs">
                        <img className="shadow" src={SimsimiShadow} alt="심심이그림자"/>
                        <img className="simsimi" src={SimsimiImg} alt="심심이이미지"/>
                    </div>
                </div>
                
                <div 
                    ref={teachBtnRef}
                    className="teachBtn">
                    <button 
                        ref={teachbuttonRef}
                        onClick={handleTeachModal}
                    >
                        <img src={graduation_cap} alt="학사모"/>
                    </button>
                    <div className="teach">가르치기</div>
                </div>
                <div
                    ref={shareBtnRef} 
                    className="teachBtn shareBtn">
                    <button 
                        // ref={sharebuttonRef}
                        onClick={handleShareModal}
                    >
                        <img src={share} alt="공유"/>
                    </button>
                    <div className="teach">공유하기</div>
                </div>
            </div>

            <div
                ref={messageInputSendAreaRef}
                className="messageInputSendArea"
            >
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
            { (step > 8) && <MessageList MessageList={data} />}
            {/* 심심이 말 가르치기 modal */}
            {isvisible && <TeachModal data={data} onCreate={onCreate} isvisible={isvisible} setIsvisible={setIsvisible} teachQuestionInput={teachQuestionInput} teachAnswerInput={teachAnswerInput}  />}
            {shareisvisible && <ShareModal shareisvisible={shareisvisible} setShareisvisible={setShareisvisible}/>}
        </div>
    );
}

export default Home;