import React from "react";

const Search = (props) => {
    return (
        <div className="Search">
            <Input placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
        </div>
    )
};

export default Search;