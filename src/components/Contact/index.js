import React,{ useState } from 'react'; 
import emailjs from 'emailjs-com';
function Contact(){

    

     function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    ///////////////////////////
    function handleSubmit(e) {
        e.preventDefault();
        
        console.log(name + email + message)
        
         if(name && email  && message && !errorMessage){
        emailjs.send("service_xls2194", "template_rwqn9qr", formState, "user_AA2phFiKwzS8oxoabfx33")
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
               alert("Message sent to John.");
               window.location.reload();
            }, function(error) {
               console.log('FAILED...', error);
            });
        }
        else{
            alert("Insufficient information.")
        }
      }
/////////////////////////////////////////////
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
        }  
        else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          } 
          console.log('errorMessage', errorMessage);
          if (!errorMessage) {
              console.log(formState);
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }    
        }
      


return(
    <section className = "mainPage">
        <div className = "content">
        <div className = "contactPage">
            <form className = "container" onSubmit={handleSubmit}>
            <div className = "contact"> 
                <h2>Name</h2>
               
                <input defaultValue = {name} type="text" name="name" onChange={handleChange} />
            </div>  
            <div className = "contact">
                <h2>Email address:</h2>
                
                <input defaultValue = {email} type="email" name="email" onChange={handleChange} />
            </div>
            <div className = "contact message">
               <h2>Message:</h2>
                
                <textarea defaultValue = {message} className = "messageText" name="message" onChange={handleChange} />
            </div>
            <div>
                <button type ="submit"  className = "contact">Submit</button>
                {errorMessage && (
                <div className = "error">
                    <p>{errorMessage}</p>
                </div>
)}
            </div>
            </form>
        </div>
        </div>
    </section>
)
};
export default Contact;