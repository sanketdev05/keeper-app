import React from "react";

function Footer(){
    
    const today = new Date();
    const cuurentYear = today.getFullYear();


    return <footer>
        <p>Copyright @{cuurentYear}</p>
    </footer>
}

export default Footer;