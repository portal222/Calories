import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"


const VremeSati = () => {


    const [sati, setSati] = useState();
    const [minuti, setMinuti] = useState();
    const [sekundi, setSekundi] = useState();

    const [isOpen5, setOpen5] = useState(false)
    const [isOpen6, setOpen6] = useState(false)


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
                <div >
                    <div className="minut" style={{ height: `${sati * 5}px`, backgroundColor: "#4db6ac" }}
                    >.</div>
                    <div className="title">Dan</div>
                </div>
                <div>
                    <div className="minut" style={{ height: `${minuti * 2}px`, backgroundColor: "#80cbc4" }}>
                        .
                    </div>
                    <div className="title">Sat</div>
                </div>
                <div>
                    <div className="minut" style={{ height: `${sekundi * 2}px`, backgroundColor: "#b2dfdb" }}>
                        .
                    </div>
                    <div className="title">Minut</div>
                </div>


                <div
                    style={{ width: "100px" }}>
                    <motion.div
                        className="box4"
                        layout
                        style={{ height: isOpen5 ? "116px" : "0px" }}
                        transition={{
                            ease: "easeInOut",
                            type: "spring",
                            duration: 1,
                            repeat: Infinity,

                        }}
                    />
                    <div className="title">
                        Sekunda
                    </div>
                   


                </div>
                <div>
                    <div className="casovnik">
                    {sati + ":" + minuti + ":" + sekundi}
                    </div>
                     <div
                     
                      
                        onClick={() => [setOpen5(!isOpen5)]}
                        className="boxBatAll">
                        Sekunda</div>
                </div>

            </div>
        </div>
        </>
    )
}


export default VremeSati;