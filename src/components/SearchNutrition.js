import React, { useRef, useContext } from "react";
import { Paper, InputBase, IconButton } from "@mui/material";


import { useNavigate } from "react-router-dom";
import GlobalContext from "./GlobalContext";

const SearchNutrition = (props) => {

    const globalCtx = useContext(GlobalContext);

    const navigate = useNavigate();
    const searchString = useRef();

    const handleClickSearch = () => {
        if (searchString.current.value.trim().length === 0) {
            return false;
        }

        globalCtx.setSearchStringFn(searchString.current.value.trim());
        navigate("/kalorije/nutrition");

        console.log("Search nutrition pretraga", searchString)
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClickSearch();
        }
    };

    return (
        <Paper
            component='form'
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '16rem',
                fontSize: '28px',
                backgroundColor: 'lightgray',
            }}
            >
            <InputBase 
                sx={{
                    // p: '5px 10px',
                    ml: 1,
                    width: '20rem',
                    
                    flex: 1
                }}
                
                // fullWidth='true'
                autoFocus
                placeholder="search food"
                inputProps={{ 'ariel-label': 'search' }}
                inputRef={searchString}
                onKeyDown={handleKeyDown}
            />
            <IconButton
                type='button'
                onClick={handleClickSearch}
                sx={{ p: '10px' }}
                aria-label='search'
            >
                🍎
            </IconButton>
        </Paper>
    );
};
export default SearchNutrition;
