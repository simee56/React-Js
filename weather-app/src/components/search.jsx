import React from "react";

const Search = (props) => {
    return (
        <input claaName="Search" placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange} />
    )
};

export default Search;