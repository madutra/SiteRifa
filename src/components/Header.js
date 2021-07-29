import React from 'react';
import Typography from "@material-ui/core/Typography";

function Header() {
  return(
      <Typography component="div" style={{ 
        backgroundColor: 'rgb(0,0,0)', 
        width: "100%",
        height: '5vh', 
        borderBottomRightRadius: "5px", 
        borderBottomLeftRadius: "5px" 
      }} />
  );
}

export default Header;