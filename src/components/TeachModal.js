import { useState } from "react";
import CloseBtn from "../img/closebutton.png";


const TeachModal = ({isvisible, setIsvisible}) => {

    // 최종적으로는 Home으로 뺴기
    const [state, setState] = useState({
        teachQuestion: "",
        teachAnswer: "",
      });

    const [localContent, setLocalContent] = useState("");

    const handleCloseModal = () => {
        setIsvisible(false);
        console.log("모달 닫힘!", isvisible);

        // 작성내용 초기화
        setLocalContent({

        });
    }

    const handleChangeState = e => {
        // console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
          });
    }

    const handleOkayModal = () => {
        handleCloseModal();
    }

    return(
        <div className="TeachModal">
            <div className="TeachModalBox">
                <div className="CloseBtn" onClick={handleCloseModal}>
                    <img src={CloseBtn} alt="닫기버튼"/>
                </div>
                <div className="inputs">
                    <div>
                        <div>이렇게 물어보면</div>
                        <input
                            name="teachQuestion"
                            value={state.teachQuestion}
                            onChange={handleChangeState}
                        />
                    </div>
                    <div>
                        <div>이렇게 대답해</div>
                        <input 
                            name="teachAnswer"
                            value={state.teachAnswer}
                            onChange={handleChangeState}
                        />
                    </div>
                </div>
                <div className="okaybutton" onClick={handleOkayModal} >
                    <button>알겠지? 심심아</button>
                </div>
            </div>
        </div>
    );
};

export default TeachModal;