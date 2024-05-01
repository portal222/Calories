import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
// import SearchPlace from "./SearchPlace";
// import Box from '@mui/material/Box';

// import IconButton from '@mui/material/IconButton';
// import Collapse from '@mui/material/Collapse';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import GlobalContext from "./GlobalContext";
import SearchRecept from "./SearchRecept";
import SearchNutrition from "./SearchNutrition";
import ResultsNutrition from "./ResultsNutrition";









const ResultsRecipe = () => {
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState([]);
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);




    const globalCtx = useContext(GlobalContext);
    const searchStringValue = globalCtx.searchStringValue;

    useEffect(() => {
        getRecipe(searchStringValue);
    }, [searchStringValue]);
    console.log("iz resultRecipe searchStringValue:", searchStringValue)

    const getRecipe = async (searchStringValue) => {
        const url = `https://api.api-ninjas.com/v1/recipe?query=${searchStringValue}`;

        try {
            const response = await axios.get(url,
                {
                    headers: {
                        'X-Api-Key': 'D+dYjCxDSm5fEkIqyoCIeA==c2GvujXTiAbMIH05',

                    }
                }
            );
            const data = response.data;




            console.log("rezultat recipe pretrage", data)

            setRecipe(data);
            setResults(data.length);
        } catch (err) {
            setError(err);

        }

    };



    if (results == 0) {
        return (
            <>

                <table className="odnosi">
                    <thead>

                        <tr>
                            <th>Nothing found</th>
                        </tr>

                    </thead>
                </table></>
        )
    }
    return (
        <>
            <div className="odnosi">
                <div>
                    <SearchNutrition />
                </div>
                <div>
                    <SearchRecept />
                </div>
                {/* <ResultsNutrition /> */}

            </div>
            <table className="odnosi">
                <thead >


                    <tr>
                        <th colSpan={2}
                            className="history">Recipe</th>
                    </tr>
                    <tr
                        className="results">
                        <th colSpan={2}>Number of Recipe: {results}</th>

                    </tr>


                </thead>



                {recipe.map((dataObj) => (



                    <tbody >
                        <tr>
                            <td className="recipe">Name:</td>
                            <td className="celebrity">
                                {dataObj.title}

                            </td>


                        </tr>
                        <tr>
                            <td className="recipe">
                                For:
                            </td>
                            <td className="nameComm">{dataObj.servings}</td>
                        </tr>
                        <tr>
                            <td className="recipe">Ingredients:</td>
                            <td className="nameComm">{dataObj.ingredients}</td>
                        </tr>

                        <tr>
                            <td className="recipe">Instructions:</td>
                            <td className="nameComm">{dataObj.instructions}</td>
                        </tr>



                        <tr>
                            <td colSpan={2}>
                                <hr></hr>
                            </td>
                        </tr>

                    </tbody>

                ))}

            </table >

        </>
    );
};
export default ResultsRecipe;