import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Aside = () => {
  return (
    <aside className="sidebar ">
      
        <div className="sidebar-info">
          <figure className="avatar-box h-[205px] ">
            <div className=" w-[250px] h-[100px] mt-[-20px] ml-[120px]">
            <img className=" mt-7" src={"/images/images.jpg"}alt="" width="80"/>

            </div>
            <div className=' mt-[-320px] ml-[400px]'>
         
         </div>
          </figure>
          

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Jahidul Islam
            </h1>

            <p className="title">React developer</p>
         
            <div className=" main flex gap-4 mt-8">
              
            <Link className=" w-[50px] h-[50px] bg-[#FF8A8A] rounded-md flex justify-center items-center border border-x-indigo-700" to='https://www.facebook.com/people/Jahidul-Islam/100083385545891/'> <BsFacebook /> </Link>
            <Link className=" w-[50px] h-[50px] bg-[#FF8A8A] rounded-md flex justify-center items-center border border-x-indigo-700" to='https://github.com/md-jahid-islam/My-Portfolio-Website'> <FaGithub /> </Link>
            <Link className=" w-[50px] h-[50px] bg-[#FF8A8A] rounded-md flex justify-center items-center border border-x-indigo-700" to='https://www.linkedin.com/in/jahidul-islam-a5021b325/'> <FaLinkedin /> </Link>
            <Link className=" w-[50px] h-[50px] bg-[#FF8A8A] rounded-md flex justify-center items-center border border-x-indigo-700" to='https://www.instagram.com/jahidulislamwebbd/?hl=en'> <FaInstagramSquare /> </Link>
            </div>

          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <GiClawSlashes />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:richard@example.com" className="contact-link">
                jahidulislawebbd@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+01772353905" className="contact-link">
                  +01772353905
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1982-06-23">July 15, 2003</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Sylhet,Bangladesh</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
          
          <a className=" w-[200px] h-[50px] bg-[#FF0075] hover:bg-[#FC4100] rounded-lg flex justify-center items-center text-[#fff] font-bold hover:scale-110 transition " href=" public/Resume/Resume.mp4" download= 'my cv '>Cv Download</a>
        </div>
        
      </aside>
  )
}

export default Aside

