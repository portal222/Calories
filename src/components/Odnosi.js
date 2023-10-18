import React, { useState, useRef } from "react";


const Odnosi = () => {

    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");
    const [inputValue5, setInputValue5] = useState("");
    const [inputValue6, setInputValue6] = useState("");
    const [inputValue7, setInputValue7] = useState("");
    const [inputValue8, setInputValue8] = useState("");
    const [inputValue9, setInputValue9] = useState("");
    const [inputValue10, setInputValue10] = useState("");
// odavde na dole ubaceno 3d gledanje
    const modelRef = React.useRef();
    const [annots, setAnnots] = useState([]);

    const handleClick = (event) => {
      const { clientX, clientY } = event;
  
      if (modelRef.current) {
        let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY);
        if (hit) {
          setAnnots((annots) => {
            return [...annots, hit];
          });
        }
      }
    };
  
    const getDataPosition = (annot) => {
      return `${annot.position.x} ${annot.position.y} ${annot.position.z}`;
    };
  
    const getDataNormal = (annot) => {
      return `${annot.normal.x} ${annot.normal.y} ${annot.normal.z}`;
    };

    // kraj dodatka za 3d


    const handleChangeValue1 = (e) => {
        setInputValue1(e.target.value)
    }
    const handleChangeValue2 = (e) => {
        setInputValue2(e.target.value)
    }
    const handleChangeValue3 = (e) => {
        setInputValue3(e.target.value)
    }
    const handleChangeValue4 = (e) => {
        setInputValue4(e.target.value)
    }
    const handleChangeValue5 = (e) => {
        setInputValue5(e.target.value)
    }
    const handleChangeValue6 = (e) => {
        setInputValue6(e.target.value)
    }
    const handleChangeValue7 = (e) => {
        setInputValue7(e.target.value)
    }
    const handleChangeValue8 = (e) => {
        setInputValue8(e.target.value)
    }
    const handleChangeValue9 = (e) => {
        setInputValue9(e.target.value)
    }
    const handleChangeValue10 = (e) => {
        setInputValue10(e.target.value)
    }

    return (
        <>
            <table className="odnosi">
                <thead>
                    <tr>
                        <th colSpan={7}>Odnosi</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td >
                            <input type="number"
                                value={inputValue1}
                                onChange={handleChangeValue1} />
                        </td>
                        <td >prema</td>
                        <td >
                            <input type="number"
                                value={inputValue2}
                                onChange={handleChangeValue2} />
                        </td>
                        <td >isto je kao</td>
                        <td >
                            <input type="number"
                                value={inputValue3}
                                onChange={handleChangeValue3} />
                        </td>
                        <td >prema</td>
                        <td className="relacija">
                            {((inputValue3 * inputValue2) / inputValue1).toFixed(1)}
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <input type="number"
                                value={inputValue4}
                                onChange={handleChangeValue4} />
                        </td>
                        <td >prema</td>
                        <td >
                            <input type="number"
                                value={inputValue5}
                                onChange={handleChangeValue5} />
                        </td>
                        <td >isto je kao</td>
                        <td className="relacija">
                            {((inputValue4 * inputValue6) / inputValue5).toFixed(1)}

                        </td>
                        <td >prema</td>
                        <td >
                            <input type="number"
                                value={inputValue6}
                                onChange={handleChangeValue6} />
                        </td >

                    </tr>
                </tbody>
            </table>
            <br></br>
            <br></br>
            <table className="odnosi">
                <thead>
                    <tr>
                        <th colSpan={5}>Procenti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="number"
                                value={inputValue7}
                                onChange={handleChangeValue7} />
                        </td>
                        <td>Od</td>
                        <td>
                            <input type="number"
                                value={inputValue8}
                                onChange={handleChangeValue8} />
                        </td>
                        <td>Iznosi</td>
                        <td className="relacija">
                            {((inputValue7 / inputValue8) * 100).toFixed(1)} %
                        </td>
                    </tr>
                    <tr>
                        <td className="proc">
                            <input type="number"
                                value={inputValue9}
                                onChange={handleChangeValue9} />
                            %
                        </td>
                        <td>Od</td>
                        <td>
                            <input type="number"
                                value={inputValue10}
                                onChange={handleChangeValue10} />
                        </td>
                        <td>Iznosi</td>
                        <td className="relacija">

                            {((inputValue9 * inputValue10) / 100).toFixed(1)}
                        </td>
                    </tr>
                </tbody>

            </table>
           {/* dodatak za 3d na dole */}
             <model-viewer
              src="./AutomatBiepi.glb" 
              shadow-intensity="1"
              camera-controls
              ar
              ar-modes="webxr"
              onClick={handleClick}
              ref={(ref) => {
                modelRef.current = ref;
              }} 
            className="moduleView">
                {annots.map((annot, idx) => (
        <button
          key={`hotspot-${idx}`}
          className="view-button"
          slot={`hotspot-${idx}`}
          data-position={getDataPosition(annot)}
          data-normal={getDataNormal(annot)}
        ></button>
      ))}
        </model-viewer>
        {/* kraj dodatka za 3d */}
          
          
          
        </>
    )
}
export default Odnosi;