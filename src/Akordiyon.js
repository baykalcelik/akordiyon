import { useState,useRef } from 'react';
import './akordiyon.css';


export default function Akordiyon(props){

    const [gosterDurum, setGosterDurum] = useState(false);
    // const cevap = useRef();

    return(
        <div id="akorCover">
            <div id="questionDiv"><span id="qspan">{props.question}</span><button id="akorBtn" onClick={
                ()=>{
                    setGosterDurum(!gosterDurum); 
                    // if(cevap.style.display === "block"){
                    //     cevap.style.display = "none";
                    // } else {
                    //     cevap.style.display = "block";
                    // }
                
                }
                
                }>+</button></div>
            {gosterDurum ? <p id="answerDiv">{props.answer}</p> : ""}
            {/* <p ref={cevap} id="answerDiv">{props.answer}</p> */}
        </div>
    )
}