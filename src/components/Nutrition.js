import React from "react";










const Nutrition = (props) => {








    return (
        <>


         

            <tr >
               <td>Name</td>
                <td className="protein">{props.dataNut.name}</td>
                </tr>
                <tr>
                    <td>Serving size</td>
                    <td className="protein">{props.dataNut.serving_size_g} g</td>
                </tr>
                <tr>
                    <td>Fat</td>
                <td className="protein">{props.dataNut.fat_total_g} g</td>
               </tr>
               <tr>
               <td>Protein</td>
                <td className="protein">{props.dataNut.protein_g} g</td>
                </tr>
                <tr>
                    <td>Carbohydrates</td>
                <td className="protein">{props.dataNut.carbohydrates_total_g} g</td>
                </tr>
                <tr>
                    <td>Sodium</td>
                <td>{props.dataNut.sodium_mg} mg</td>
                </tr>
                <tr>
                    <td>Pottasium</td>
                <td>{props.dataNut.potassium_mg} mg</td>
                </tr>
                <tr>
                    <td>Sugar</td>
                <td className="protein">{props.dataNut.sugar_g} g</td>
                </tr>
                <tr>
                    <td>Fiber</td>
                <td>{props.dataNut.fiber_g} g</td>
                </tr>
                <tr>
                    <td>Cholesterol</td>  
                <td>{props.dataNut.cholesterol_mg} mg</td>
                </tr>
                <tr>
                    <td>Calories</td>
                <td className="protein">{props.dataNut.calories}</td>
            </tr>








        </>
    );
};
export default Nutrition;