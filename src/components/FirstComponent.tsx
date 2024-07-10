import React from "react";

const logo = "/images/logo.png";

const FirstComponent: React.FC<{}> = () => {
    return (
        <div>
            <h3>React Component Example with Typescript</h3>
            <div>
                <img height="250" src={logo} alt="Logo" />
            </div>
        </div>
    );
};

export default FirstComponent;
