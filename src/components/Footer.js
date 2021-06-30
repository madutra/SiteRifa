import React from 'react';
import Typography from "@material-ui/core/Typography";

function Footer() {
    return(
        <Typography component="div" style={{ backgroundColor: 'rgb(70,130,180)', 
        width: "100%",
        height: '5vh', 
        borderTopRightRadius: "5px", 
        borderTopLeftRadius: "5px" 
    }} />
    );
}

export default Footer;