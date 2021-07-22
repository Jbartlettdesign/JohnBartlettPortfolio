import React, {useState} from 'react';
import toolsPhoto from '../../assets/toolsPng.png';
import yellowPhoto from '../../assets/yellow.png';

function Nav(props){
    const {currentPage}  = props;  
    console.log(currentPage)
return(
    <section className = "top">
    <header><style>
  @import url("https://use.typekit.net/ari5lkx.css");
</style>


         <h1>John Bartlett</h1>
        <ul className = "nav">
            <li onClick = {() => props.handlePageChange('about')}
            className = {`${currentPage === 'about' ? 'active' : ''}`}
                >About
            </li>

            <li onClick = {() => props.handlePageChange('contact')}
                className = {`${currentPage === 'contact' ? 'active' : ''}`} >Contact</li>

            <li onClick = {() => props.handlePageChange('resume')}
            className = {`${currentPage === 'resume' ? 'active' : ''}`}
                >Resume</li>

            <li onClick = {() => props.handlePageChange('portfolio')}
            className = {`${currentPage === 'portfolio' ? 'active' : ''}`}
                >Portfolio</li>  

        </ul>
        
    </header>
        <div className = "tri">
            
            
        <div className = "triangle-down"></div>

            <div className = "triangle-up">
            <img className = "yellow" src= {yellowPhoto} alt="yellow"/>
            
                <div className = "rec">
                    <div className = "titles">  
                        <p>
                            Web Developer
                        </p>
                        <p>
                            Graphic Designer
                        </p>
                        <p>
                            Illustrator
                        </p>
                    </div>
                  
                        <img className = "tools" src = {toolsPhoto} alt="tools"/>
                    
                    <div className = "statementRec">
                        
                        <h2>Statement</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className = "small-tri-up" >

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
)
};
export default Nav;