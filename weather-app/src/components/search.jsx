import React from "react";

const Search = (props) => {
    return (
        < input
            className="Search"
            placeholder="{props.placeholder}"
            value="{props.value}"
            onChange="{props.onChange}" />
    );
};

export default Search;