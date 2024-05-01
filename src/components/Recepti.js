import React from "react";
import SearchNutrition from "./SearchNutrition";
import SearchRecept from "./SearchRecept";
import ResultsNutrition from "./ResultsNutrition";
import ResultsRecipe from "./ResultsRecipe";

const Recepti = () => {

    return (
        <>
            <div className="odnosi">
                <div>
                    <SearchNutrition />
                </div>
                <div>
                    <SearchRecept />
                </div>
                {/* <div>

                    <ResultsNutrition />
                </div>
                <div>
                    <ResultsRecipe />
                </div> */}
            </div>

        </>
    )

}
export default Recepti;