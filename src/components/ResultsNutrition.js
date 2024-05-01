import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';

import GlobalContext from "./GlobalContext";
import Nutrition from "./Nutrition";
import SearchRecept from "./SearchRecept";
import SearchNutrition from "./SearchNutrition";








const ResultsNutrition = () => {
    const [error, setError] = useState(null);
    const [nutrition, setNutrition] = useState([]);
    const [results, setResults] = useState([]);


    const globalCtx = useContext(GlobalContext);
    const searchStringValue = globalCtx.searchStringValue;

    useEffect(() => {
        getNutrition(searchStringValue);
    }, [searchStringValue]);
    console.log("iz resultNutrition searchStringValue:", searchStringValue)

    const getNutrition = async (searchStringValue) => {
        const url = `https://api.api-ninjas.com/v1/nutrition?query=${searchStringValue}`;

        try {
            const response = await axios.get(url,
                {
                    headers: {
                        'X-Api-Key': 'D+dYjCxDSm5fEkIqyoCIeA==c2GvujXTiAbMIH05'
                    }
                }
            );
            const data = response.data;



            console.log("rezultat nutritiion", data)
            setNutrition(data);
            setResults(data.length);
        } catch (err) {
            setError(err);

        }

    };



    // if (results == 0) {
    //     return (
    //         <>
    //             <table className="tabelaZemlje">
    //                 <thead>

    //                     <tr>
    //                         <th>Nothing found</th>
    //                     </tr>
    //                     <tr className="razmak"></tr>
    //                 </thead>
    //             </table></>
    //     )
    // }
    return (
        <>
  <div className="odnosi">
                <div>
                    <SearchNutrition />
                </div>
                <div>
                    <SearchRecept />
     
</div>
</div>
            <table className="hrana">
                  
<thead>
    
                    <tr className="oil">

                        <th className="nutriName"
                        colSpan={2}>Hrana</th>

                    </tr>
</thead>

                <tbody>
                    {nutrition.map((dataNut) => (



                        <Nutrition key={dataNut.name} dataNut={dataNut} />
                    ))}
                </tbody>


            </table>






        </>
    );
};
export default ResultsNutrition;