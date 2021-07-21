import React from 'react'; 
import chatterbox from '../../assets/chatter.png'
import pegasus from '../../assets/pegasus.png'

function Portfolio(){
return(
    <section className = "mainPage">
        <div className = "content">
        <div className = "page">
        <div className = "container"> 
        <div className = "containerPort">
         
         <div className = "portfolio">
             <h2>
             Portfolio
         </h2>
            <div>
                <a href = "https://github.com/Jbartlettdesign/pegasus">
                <img src = {pegasus} alt="tools"/>
                <h4>Pegasus Travel App</h4>
                </a>
            </div>
            <div>
                <a href = "https://github.com/Jbartlettdesign/socialMediaSite_ChatterBox">
                <img src = {chatterbox} alt="tools"/>
                <h4>Chatterbox Social Media Site</h4>
                </a>
            </div>
            
         </div>
         </div>
         </div>
         </div>
        </div>
       
    </section>
)
};
export default Portfolio;