import CloseBtn from "../img/closebutton.png";

const TeachModal = () => {
    return(
        <div className="TeachModal">
            <div className="TeachModalBox">
                <div className="CloseBtn">
                    <img src={CloseBtn} alt="닫기버튼" onClick/>
                </div>
                <div className="inputs">
                    <div>
                        <div>이렇게 물어보면</div>
                        <input></input>
                    </div>
                    <div>
                        <div>이렇게 대답해</div>
                        <input></input>
                    </div>
                </div>
                <div className="okaybutton">
                    <button>알겠지? 심심아</button>
                </div>
            </div>
        </div>
    );
};

export default TeachModal;