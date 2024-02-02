import React, { useState } from "react";
import { Button } from "reactstrap";

const ColorChangeComponent = () => {
    const [color, setColor] = useState('red');
    const click = color => {
        setColor(color)
    }
    const changeColorHandler = () => {
        if (color == "red") {
            setColor("blue");
        } else {
            setColor("red");
        }
    };
    return (

        <div style={{
            backgroundColor: color,
            height: "100vh",
        }}>
            <Button onClick={() => changeColorHandler()} color="yellow">
                Change color
            </Button>
        </div>
    );
};

export default ColorChangeComponent;