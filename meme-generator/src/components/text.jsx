import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState("Double click to Edit");


    return (
        <Draggable>
            <div
                style={{ position: "absolute", cursor: "move" }}>
                {
                    editMode ?
                        (
                            <textarea
                                type="text"
                                autoFocus
                                style={{
                                    fontSize: "24px",
                                    padding: "8px",
                                    minWidth: "250px",
                                    maxWidth: "600px",
                                    minHeight : "400px",
                                    resize : "both",
                                    overflow : "auto",
                                }}
                                onDoubleClick={(e) => setEditMode(false)}
                                value={value}
                                onChange={(e) => setValue(e.target.value)} />
                        ) : (

                            <h1 onDoubleClick={(e) => setEditMode(true)}
                                style={{
                                    fontSize: "24px",
                                    whiteSpace: "pre-wrap",
                                    wordBreak : "break-word",
                                    color :"white",
                                    textShadow: "2px 2px 4px #000",
                                    padding : "5px",
                                    maxWidth :"600px",
                                }}
                            >
                                {value}</h1>
                        )}
            </div>
        </Draggable >
    )
}

export default Text;