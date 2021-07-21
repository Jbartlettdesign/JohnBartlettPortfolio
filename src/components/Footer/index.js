import React from 'react'; 
import linkedIn from '../../assets/linkedin.png'
import gitLogo from '../../assets/gitLogo.png'
function Footer(){
return(
    <section className = "footer ">
        <a href = "https://github.com/Jbartlettdesign">
        <img src = {gitLogo} alt = "gitLogo" /></a>
        <a href = "https://my.indeed.com/p/johnb-6p9sp9e">
        <img src = {linkedIn}  alt = "linkedinLogo" /></a>

    </section>
)
};
export default Footer;