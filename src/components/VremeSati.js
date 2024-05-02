import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"


const VremeSati = () => {


    const [sati, setSati] = useState();
    const [minuti, setMinuti] = useState();
    const [sekundi, setSekundi] = useState();

    const [isOpenSec, setOpenSec] = useState(false)



    useEffect(() => {
        getVreme();
    }, []);

    const getVreme = () => {
        setInterval(() => {

            var danas = new Date;
            var hours = danas.getHours();
            var minuts = danas.getMinutes();
            var seconds = danas.getSeconds();

            setSati(hours);
            setMinuti(minuts);
            setSekundi(seconds);
        }, 1000)

    }




    return (
        <>
            <div>


                <div className="sati">
                    <div>
                        <motion.div
                        className="sekunde"
                        layout
                        style={{ height: isOpenSec ? "117px" : "0px" }} 
                        transition={{
                            ease: "easeInOut",
                            type: "spring",
                            duration: 1,
                            repeat: Infinity
                        }}/>
                        
                    </div>


                    <div>
                        <div className="dan" style={{ height: `${sekundi * 2}px`, backgroundColor: "#4db6ac" }}>

                            .
                            <span className="content">
                                <span>{sekundi}s</span></span>
                        </div>

                    </div>
                    <div>
                        <div className="dan" style={{ height: `${minuti * 2}px`, backgroundColor: "#26a69a" }}>
                            .
                            <span className="content">
                                <span>{minuti}m</span></span>
                        </div>

                    </div>
                    <div >
                        <div className="dan" style={{ height: `${sati * 5}px`, backgroundColor: "#009688" }}
                        >.
                            <span className="content">
                                <span>{sati}h</span></span>
                        </div>

                    </div>


                </div>
                <div style={{
                    width: "206px", height: "10px", color: "transparent", backgroundColor: "#80cbc4",
                    margin: "auto", cursor: "pointer"
                }}
                    onMouseOver={() => setOpenSec(!isOpenSec)}>
                    .

                </div>
          
            </div>
        </>
    )
}


export default VremeSati;