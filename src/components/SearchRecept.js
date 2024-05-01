import React, { useRef, useContext } from "react";
import { Paper, InputBase, IconButton } from "@mui/material";

import { useNavigate } from "react-router-dom";
import GlobalContext from "./GlobalContext";



const SearchRecept = () => {

    const globalCtx = useContext(GlobalContext);
    const navigate = useNavigate();
    const searchString = useRef();

    const handleClickSearch = () => {
        if (searchString.current.value.trim().length === 0) {
            return false;
        }

        globalCtx.setSearchStringFn(searchString.current.value.trim());
        navigate("/recept");

        console.log("recepti pretraga", searchString)
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
        se={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '80rem',
            fontSize: '28px',
            backgroundColor: 'red',
        }}
        >
        <InputBase className="base"
            sx={{
                p: '5px 10px',
                ml: 5,
                // width: '70rem',
                
                flex: 1
            }}

            autoFocus
            placeholder="recipe"
            // inputProps={{ 'ariel-label': 'search' }}
            inputRef={searchString}
            onKeyDown={handleKeyDown}
        />
        <IconButton
            type='button'
            onClick={handleClickSearch}
            sx={{ p: '10px' }}
            aria-label='search'
        >
            🥧
        </IconButton>
    </Paper>
    )
}
export default SearchRecept;