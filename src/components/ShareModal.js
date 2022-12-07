import { useState } from "react";
import CloseBtn from "../img/closebutton.png";


const ShareModal = ({shareisvisible, setShareisvisible}) => {

    const handleCloseModal = () => {
        setShareisvisible(false);
        console.log("모달 닫힘!", shareisvisible);
    }
    
    return(
        //ShareModal 으로 이름 바꿔야함.
        <div className="TeachModal">
            <div className="TeachModalBox">
                <div className="CloseBtn" onClick={handleCloseModal}>
                    <img src={CloseBtn} alt="닫기버튼"/>
                </div>
                <div className="shareModalContents">
                    <div className="shareModalTitle">
                        <div className="userName">라온 </div>
                        님의 챗봇 공유하기</div>
                    <div className="shareModalExplain">링크를 받은 사람들이 내가 만든 챗봇한테 말을 걸 수 있어요!</div>
                </div>
                <div className="linkShareButton">
                    <button>링크 공유하기</button>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;