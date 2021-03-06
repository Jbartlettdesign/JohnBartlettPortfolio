import React from 'react'; 
import chatterbox from '../../assets/chatter.png'
import pegasus from '../../assets/pegasus.png'
import dingo from '../../assets/dingo.png'
function Portfolio(){
return(
    <section className="mainPage">
        
        <div className = "content">
        <div className = "page">
        <div className = "container"> 
        <div className = "containerPort">
         
         <div className = "portfolio">
             <h2>
             Portfolio
         </h2>
            <div className = "portDiv">
                
                <img src = {pegasus} alt="pegasus"/>
                <div className = "links">
                    <a href = "https://jbartlettdesign.github.io/pegasus/"><h4>Pegasus Travel App</h4></a>
                    <a  className = "git" href = "https://github.com/Jbartlettdesign/pegasus">github link</a>
                </div>
            </div>
            <div  className = "portDiv">
                
                <img src = {chatterbox} alt="chatterbox"/>
                <div className = "links">
                    <a href = "https://pure-river-00031.herokuapp.com/"><h4>Chatterbox Social Media</h4></a>
                    <a className = "git" href = "https://github.com/Jbartlettdesign/socialMediaSite_ChatterBox">github link</a>
                </div>
            </div>
            <div  className = "portDiv">
                
                <img className = "dingo" src = {dingo} alt="dingo"/>
                <div className = "links">
                    <a href = "https://dingo-dog-walker.herokuapp.com/"><h4>Dingo Dog Walking App</h4></a>
                    <a className = "git" href = "https://github.com/bc-mern-stack/dingo">github link</a>
                </div>
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