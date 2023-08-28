import React, { useState } from "react";

const Tajmer = () => {

    const [inputValue, setInputValue] = useState("");
    const [dugme, setDugme] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

   const handleBut = () => {
console.log("radi dugme")
}
  

    return (
<>
        <div className="container">
           
            <div className="colorBox">
                <div className="box">{inputValue}</div>
                <div className="box1"></div>
                <div className="box2" ></div>
                <div className="box3"></div>

            </div>
            <div className="button">
               <div>
                <input type="text" value={inputValue} onChange={handleChange}/>
                <input type="button" value="ukljuci" onClick={handleBut}/>
            </div> 
            {/* <div>
                <input type="button" value="3 min" id="minut2"/>
            </div> 
            <div>
                <input type="button" value="4 min" id="minut3"/>

            </div>
            <div>
                <input type="text" value="upisi" id="broj"/>
            </div> */}
            </div>

        </div>
        </>
    )

}
export default Tajmer;