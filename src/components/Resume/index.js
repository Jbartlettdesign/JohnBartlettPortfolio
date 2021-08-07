import React from 'react'; 
function Resume(){
return(
    <section className = "mainPage">
        <div className = "content">
        <div className = "page">
        <div className = "containerRes"> 
         <h2>
             Resume
         </h2>
         <div className = "skills">
         <div>
            <h3>
                Front-end Proficiencies
            </h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
         </div>
         <div>
         <h3>
             Back-end Proficiencies
            </h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
         </div>
         </div>
         </div>
         </div>
        </div>
       
    </section>
)
};
export default Resume;