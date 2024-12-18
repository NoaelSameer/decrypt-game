import React from 'react'

function Styler({level}) {
    switch (level){
        case "peaceful":
            return <>
        
            </>;
        case "easy":
            return "adventure-style";
        case "normal":
            return "hard-style";
        case "hard":
            return "hard-style";
        default:
            return "default-style";
    }
}

export default Styler