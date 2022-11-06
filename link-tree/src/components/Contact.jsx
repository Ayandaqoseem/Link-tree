import React, { useState } from 'react'
import Footer from './home/Footer'

function Contact() {
  // const [form, setForm] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   message: "",
  // }); 
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [firsterror, setFirsterror] = useState("");
  const [lasterror, setLasterror] = useState("");
  const [emailerror, setEmailerror] = useState(""); 
  const [messageerror, setMessageerror] = useState("");
  

  const validate = () => {
    const errors = {}
    if (firstname ==="")
    errors.firstname="firstname is required";

    if (lastname ==="")
    errors.lastname="lastname is required";

    if (email ==="")
    errors.email="email is required";

    if (message ==="")
    errors.message="message is required";

    return Object.keys(errors).length===0? null:errors;

  }


  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.username]: e.target.value,
  //   });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
   
    const errors = validate();

    if (errors){
      setFirsterror(errors.firstname);
      setLasterror(errors.lastname);
      setEmailerror(errors.email);
      setMessageerror(errors.message);
    }
    else {
      setFirsterror("");
      setLasterror("");
      setEmailerror("");
      setMessageerror("");
    }
  }
  return (

    <div
      className='h-full w-full p'
    >
      <div 
      name='contact'
      className='w-full h-screen p-4 md:flex md:justify-center md:items-center'>
      <div className='flex flex-col'>
        <div className='pt-2'>
          <p className='text-3xl font-bold inline mb-8'>
            Contact Me
          </p>
          <p className='py-2 text-sm'>
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <div className='flex justify-center items-center mt-6 md:justify-start '>
          <form
            onSubmit={submitHandler} 
            action=""
            className='flex flex-col w-full md:w-full'
          >
            <div
              className='sm:flex sm:flex-col sm:w-full md:flex  md:flex-row md:w-full md:gap-5 md:justify-center md:items-center'
            >
              <div className='flex flex-col w-full md:flex md:flex-col md:w-60'>
                <label 
                  htmlFor="firstname"
                  className='text-sm'
                >
                  First name
                </label>
                <input 
                id='first_name'
                type="text" 
                name='fistname'
                placeholder='Enter your first name'
                className='p-2 bg-transparent border-2 rounded-md text-sm'
                onChange={(e) =>{setFirstname(e.target.value)}}
                />
                <div className='text-red-600 text-sm'>
                  {firsterror}
                </div>
              </div>
              <div className='flex flex-col w-full md:pb-4 md:flex md:flex-col md:w-60'>
                <label 
                  htmlFor="lastname"
                  className='text-sm mt-4' 
                >
                  Last name
                </label>
                <input 
                id='last_name'
                type="text" 
                name='lastname'
                placeholder='Enter your last name'
                className='p-2 bg-transparent border-2 rounded-md text-sm '
                onChange={(e) =>{setLastname(e.target.value)}}
                />
                 <div className='text-red-600 text-sm'>
                  {lasterror}
                </div>
              </div>
            
            </div>
            
            <label 
              htmlFor="email"
              className='text-sm mt-4'
            >
              Email
            </label>
            <input 
            id='email'
            type="email" 
            name='email'
            placeholder='yourname@gmail.com'
            className='p-2 bg-transparent border-2 rounded-md text-sm md:w-full'
            onChange={(e) =>{setEmail(e.target.value)}}
            />
             <div className='text-red-600 text-sm'>
                  {emailerror}
                </div>
            <label 
              htmlFor="message"
              className='text-sm mt-4'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              placeholder="Send me a message and I'll reply you as soon as possible"
              rows='4' 
              className='p-2  bg-transparent border-2 rounded-md text-sm'
              onChange={(e) =>{setMessage(e.target.value)}}
            >

          </textarea>
          <div className='text-red-600 text-sm'>
                  {messageerror}
                </div>
          <div className='flex justify-center items-center gap-3 mt-4 md:justify-start'>
          <input type="checkbox" />
          <p className='text-sm'>
            You agree to providing your data to who may contact you.
          </p>
          </div>
          <button 
            id="btn__submit"
            className='bg-blue-700 text-white px-5 py-3 my-7 rounded-md hover:scale-110 duration-300'
          >
            Send message
          </button>
          </form>
        </div>
      </div>
    </div>
  
    <div className='h-full md:h-48 md:pt-20 pt-96 relative' >
      <Footer />
    </div>
     
    
      
  </div>
  )
}

export default Contact
