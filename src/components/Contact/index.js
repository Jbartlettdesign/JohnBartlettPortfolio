import React from 'react'; 
function Contact(){
return(
    <section className = "mainPage">
        <div className = "content">
        <div className = "contactPage">
            <div className = "container">
            <div className = "contact"> 
                <h2>Name</h2>
               
                <input type="text" name="name" />
            </div>  
            <div className = "contact">
                <h2>Email address:</h2>
                
                <input type="email" name="email" />
            </div>
            <div className = "contact message">
               <h2>Message:</h2>
                
                <textarea className = "messageText" name="message" />
            </div>
            <div>
                <button className = "contact">Submit</button>
            </div>
            </div>
        </div>
        </div>
    </section>
)
};
export default Contact;