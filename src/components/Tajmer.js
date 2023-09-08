import React, { useState } from "react";
import { motion } from "framer-motion"


const Tajmer = () => {

    const [isOpen, setOpen] = useState(false)
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    const [inputValue1, setInputValue1] = useState(0);


    const handleChangeValue1 = (e) => {
        setInputValue1(e.target.value)
    }

    return (
        <>
            <div className="container">

                <div className="colorBox">
                    <div>
                        <motion.div
                            className="box"
                            layout
                            style={{ height: isOpen ? "315px" : "0px" }}
                            transition={{ duration: 5 }}

                        />
                        <div onClick={() => setOpen(!isOpen)}
                            className="boxBat"
                        >5 sek</div>
                       
                    </div>

                    <div>
                        <motion.div
                            className="box1"
                            layout
                            style={{ height: isOpen1 ? "315px" : "0px" }}
                            transition={{ duration: 10 }}
                        />
                        <div onClick={() => setOpen1(!isOpen1)}
                            className="boxBat"
                        >10 sek</div>
                    </div>
                    <div>
                        <motion.div
                            className="box2"
                            layout
                            style={{ height: isOpen2 ? "315px" : "0px" }}
                            transition={{ duration: 20 }}
                        />
                        <div onClick={() => setOpen2(!isOpen2)}
                            className="boxBat"
                        >20 sek</div>
                    </div>
                    <div>
                        <motion.div
                            className="box3"
                            layout
                            style={{ height: isOpen3 ? "315px" : "0px" }}
                            transition={{ duration: inputValue1 }}
                        />
                        <div onClick={() => setOpen3(!isOpen3)}
                            className="boxBat"
                        >{ inputValue1 }</div>
                    </div>







                </div>

                <div className="inputText" > Upiši broj sekundi <span/>
                            <input type="number" className="inputPlace"
                            name="broj"
                                value={inputValue1}
                                onChange={handleChangeValue1} />
                        </div>
            </div>


        </>
    )

}
export default Tajmer;