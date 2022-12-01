import { useState } from "react";


const Home = () => {

    const [input, setInput] = useState("");

    const [state, setState] = useState({
        contents: "",
        answer: "",
    });

    const handleChangeState = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    };
    const handleSubmit=() => {
        alert("input 값은 = "+input);
    };

    return (
        <div className="Home">
            <h1>Simsimi Edu</h1>
            <div className="messageInputSendArea">
                <input
                    name="message"
                    value={input}
                    onChange={handleChangeState}
                />
                <button onClick={handleSubmit}>보내기</button>
            </div>
        </div>
    );
}

export default Home;