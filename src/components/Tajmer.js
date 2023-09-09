import React, { useState } from "react";
import { motion } from "framer-motion"


const Tajmer = () => {

    const [isOpen, setOpen] = useState(false)
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    const [isOpen4, setOpen4] = useState(false)
    const [isOpen5, setOpen5] = useState(false)
    const [isOpen6, setOpen6] = useState(false)
    const [isOpen7, setOpen7] = useState(false)
    const [isOpen8, setOpen8] = useState(false)
    const [isOpen9, setOpen9] = useState(false)


    const [inputValue1, setInputValue1] = useState(0);
    const [inputValue2, setInputValue2] = useState(0);


    const handleChangeValue1 = (e) => {
        setInputValue1(e.target.value)
    }
    const handleChangeValue2 = (e) => {
        setInputValue2(e.target.value)
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
                            transition={{
                                ease: "linear",
                                duration: 5,
                                repeat: Infinity,
                            }}

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
                            transition={{
                                ease: "linear",
                                duration: 10,
                                repeat: Infinity
                            }}
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
                            transition={{
                                ease: "linear",
                                repeat: Infinity,
                                duration: 20
                            }}
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
                            transition={{
                                ease: "linear",
                                duration: inputValue1,
                                repeat: Infinity,

                            }}
                        />
                        <div onClick={() => setOpen3(!isOpen3)}
                            className="boxBat"
                        >{inputValue1}</div>
                    </div>
                    <div>
                        <motion.div
                            className="box4"
                            layout
                            style={{ height: isOpen4 ? "315px" : "0px" }}
                            transition={{
                                ease: "linear",
                                duration: inputValue2,
                                repeat: Infinity,

                            }}
                        />
                        <div onClick={() => setOpen4(!isOpen4)}
                            className="boxBat"
                        >{inputValue2}</div>
                    </div>

                </div>

                <div className="inputText" > Upiši broj sekundi <span />
                    <input type="number" className="inputPlace"
                        name="broj"
                        value={inputValue1}
                        onChange={handleChangeValue1} />
                </div>
                <div className="inputText" > Upiši broj sekundi <span />
                    <input type="number" className="inputPlace"
                        name="broj"
                        value={inputValue2}
                        onChange={handleChangeValue2} />
                </div>
                <div
                    onClick={() => [setOpen4(!isOpen4), setOpen3(!isOpen3), setOpen2(!isOpen2),
                    setOpen1(!isOpen1), setOpen(!isOpen)]}
                    className="boxBatAll"
                >

                    sve</div>
                <hr></hr>
                <h1>Ceo dan u prolazu </h1>
                <div className="colorBox">
                    <div>
                        <motion.div
                            className="box4"
                            layout
                            style={{ height: isOpen5 ? "308px" : "0px" }}
                            transition={{
                                ease: "easeInOut",
                                type: "spring",
                                duration: 1,
                                repeat: Infinity,

                            }}
                        />
                        <div className="title">
                            1 sek
                        </div>
                    </div>
                    <div>
                        <motion.div
                            className="box3"
                            layout
                            style={{ height: isOpen6 ? "315px" : "0px" }}
                            transition={{
                                ease: "linear",
                                duration: 15,
                                repeat: Infinity,

                            }}
                        />
                        <div className="title">
                            15 sek
                        </div>
                    </div>
                    <div>
                        <motion.div
                            className="box2"
                            layout
                            style={{ height: isOpen7 ? "315px" : "0px" }}
                            transition={{
                                ease: "linear",
                                duration: 60,
                                repeat: Infinity,

                            }}
                        />
                        <div className="title">
                            1 minut
                        </div>
                    </div>
                    <div>
                        <motion.div
                            className="box1"
                            layout
                            style={{ height: isOpen8 ? "315px" : "0px" }}
                            transition={{
                                ease: "linear",
                                duration: 3600,
                                repeat: Infinity,

                            }}
                        />
                        <div className="title">
                            1 sat
                        </div>
                    </div>
                    <div>
                        <motion.div
                            className="box"
                            layout
                            style={{ height: isOpen9 ? "315px" : "0px" }}
                            transition={{
                                ease: "linear",
                                duration: 86400,
                                repeat: Infinity,

                            }}
                        />
                        <div className="title">
                            1 dan
                        </div>
                    </div>

                </div>
                <div
                    onClick={() => [setOpen5(!isOpen5), setOpen6(!isOpen6), setOpen7(!isOpen7),
                    setOpen8(!isOpen8), setOpen9(!isOpen9)]}
                    className="boxBatAll"
                >

                    POKRENI DAN</div>


            </div>


        </>
    )

}
export default Tajmer;