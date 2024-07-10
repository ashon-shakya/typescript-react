import React from "react";
import PersonInterFace from "../interface/PersonInterface";

const UserComponent: React.FC<PersonInterFace> = (props) => {
    return (
        <div>
            <h1>Biodata</h1>
            Hello, <b>{props.name}</b>
            <br />
            You are <b>{props.age} years old</b>
            <br />
            You live at: <b>{props.address}</b>
            <br />
            You were born: <b>{props.dob.toDateString()}</b>
        </div>
    );
};

export default UserComponent;
