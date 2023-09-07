import React, { useState } from "react";
import { motion } from "framer-motion"


const Tajmer = () => {

    const [isOpen, setOpen] = useState(false)
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)



    return (
        <>
            <div className="container">

                <div className="colorBox">
                    <div>
                        <motion.div
                            className="box"
                            layout
                            style={{ height: isOpen ? "300px" : "15px" }}
                            transition={{ duration: 3 }}

                        />
                        <div onClick={() => setOpen(!isOpen)}
                            className="boxBat"
                        >3 SEK</div>

                    </div>

                    <div>
                        <motion.div
                            className="box1"
                            layout
                            style={{ height: isOpen1 ? "300px" : "15px" }}
                            transition={{ duration: 5 }}
                        />
                        <div onClick={() => setOpen1(!isOpen1)}
                            className="boxBat"
                        >5 SEK</div>
                    </div>
                    <div>
                        <motion.div
                            className="box2"
                            layout
                            style={{ height: isOpen2 ? "300px" : "15px" }}
                            transition={{ duration: 8 }}
                        />
                        <div onClick={() => setOpen2(!isOpen2)}
                            className="boxBat"
                        >8 SEK</div>
                    </div>
                    <div>
                        <motion.div
                            className="box3"
                            layout
                            style={{ height: isOpen3 ? "300px" : "15px" }}
                            transition={{ duration: 13 }}
                        />
                        <div onClick={() => setOpen3(!isOpen3)}
                            className="boxBat"
                        >13 SEK</div>
                    </div>







                </div>
            </div>


        </>
    )

}
export default Tajmer;