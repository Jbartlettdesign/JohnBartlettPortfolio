import React, {useState} from 'react';


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
       
        
    </section>
)
};
export default Nav;