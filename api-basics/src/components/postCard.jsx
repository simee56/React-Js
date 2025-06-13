import React from "react";

const PostCard = (props) => {
    return (
    <div className="post-card">
        <h3>{props.Title}</h3>
        <p>{props.Body}</p>
    </div>
    )}
export default PostCard;