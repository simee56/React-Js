import React, {useState} from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/text";

const EditPage = () => {
    const [params] = useSearchParams();
    const[count, setCount] = useState(0);

    const addText = () => {
        setCount(count+1)
    };

    return (
        <div>
            <div>
                <img src={params.get("url")} width="350px" />
                {
                    Array(count).fill(0).map(e => <Text/>)
                }
            </div>
            <button onClick={addText}  >Add Text</button>
        </div>
    );
};

export default EditPage;