import React, { useState } from "react";

const Odnosi = () => {

    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");
    const [inputValue5, setInputValue5] = useState("");
    const [inputValue6, setInputValue6] = useState("");


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

    return (
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
                       {(inputValue3 * inputValue2) / inputValue1}
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
                        {(inputValue4 * inputValue6) / inputValue5}

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
    )
}
export default Odnosi;