import React from "react";

// import ReactDom from "react-dom/client";

import StateHoops from './components/hooks';
import USeEffectHooks from './components/effecthooks';


//EMBEDDING EXPRESSIONS IN JSX
function MyComponent() {
    const name = "Simee Pandey";

    //DYNAMIC ATTRIBUTE
    const link = "https://google.com"
    return <h1>Hello {name}. {MyFruits(fruits)} <a href={link}>Click me </a> </h1>;
}


//JAVASCRIPT IN JSX
function MyFruits(fruits) {
    return fruits.firstFruit + ' ' + fruits.secondFruit
}

const fruits = {
    firstFruit : "Mango",
    secondFruit : "Banana"
};

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<MyComponent/>);

const App = () => {
    return (
        <div className="hooks">
            <MyComponent/>
            <StateHoops/>
            <USeEffectHooks/>
        </div>
    );
};

export default App;
