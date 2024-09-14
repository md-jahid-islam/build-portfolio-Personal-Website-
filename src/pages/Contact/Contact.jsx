 import { useState } from "react";
 import { Bounce, toast, ToastContainer } from "react-toastify";
 ;
 import 'react-toastify/dist/ReactToastify.css';
 const Contact = () => {
 //=================variable part start 
 const [Name , SetName]                               = useState('')
 const [NameError , SetNameError]                     = useState ('')
 const [Email , setEmail]                             = useState ('')
 const [EmailError , setEmailError]                   = useState ('')
 const [sentmessege , setsentmessege]                 = useState ('')
 const [sentmessegeError , setsentmessegeError]       = useState ('')

 //=================variable part end 
 //================= function part start 
 const handelName = (e)=>{
  SetName(e.target.value)
  SetNameError('')
 }
 const handelEmail = (e)=>{
  setEmail(e.target.value)
  setEmailError('')
 }
 const handelsentmessege = (e)=>{
  setsentmessege(e.target.value)
  setsentmessegeError('')
 }
 //================= function part end
 //================= main submit part start
  const handelSubmit = (e)=>{
 e.preventDefault()

 if(!Name){
  SetNameError('Please Enter Your Error')

 }
 if(!Email){
  setEmailError('Please Enter Your Error')
 }
 if(!sentmessege){
  setsentmessegeError('Please Enter Your Error')
 }
 else{
  toast.success('sent messege', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
    

 }
  }
 
 //================= main submit part end

  return (
    <section className="contact" data-page="contact">
      <ToastContainer/>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29072.60109759209!2d91.41629619999999!3d24.37868945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751445418320993%3A0x4aac154dd6283b1f!2sHabiganj!5e0!3m2!1sen!2sbd!4v1723662041183!5m2!1sen!2sbd"
            width="400" height="300" loading="lazy" title="Google Map"></iframe>
        </figure>
      </section>
      <div className="container">
    
        <div className="form_row">
          <div className="from_coll">
            <h2 className=" text-2xl font-bold text-[#fff]">Contac From</h2>
         
            <label className=" text-[13px] uppercase text-[#fff] mt-3">name</label>
            <input onChange={handelName} className=" w-[300px] h-[45px] p-5 text-[#fff] mt-5" type="text" placeholder="Enter Your Name" />
            <p className=" text-red-500 mt-5">{NameError}</p>


           <div className=" mt-[-115px] ml-[450px]">
          <label className=" text-[13px] uppercase text-[#fff] mt-3">email</label>
          <input onChange={handelEmail} className=" w-[300px] h-[45px] p-5 text-[#fff] mt-5" type="text" placeholder="Enter Your Email" />
           <p className=" text-red-500 mt-5">{EmailError}</p>
          </div>
          <div className=" mt-5">
          <input onChange={ handelsentmessege} className=" w-[840px] h-[100px] text-[#fff] p-5" type="text" placeholder="Your messege" />
          <p className=" text-red-500 mt-3 ">{sentmessegeError}</p>
          <button type="button" onClick={handelSubmit} className=" text-rose-50 w-[130px] h-[45px] bg-[#654520] flex justify-center items-center rounded-lg hover:scale-110 ml-[715px] transition ">sent messege</button>

          </div>
     

         
         
          </div>

        </div>
      </div>

      

    </section>
  );
};

export default Contact;



