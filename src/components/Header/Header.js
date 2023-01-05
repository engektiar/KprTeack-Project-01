import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return <header>
    <div className='container'>
      <div className='header-up d-flex justify-content-between'>
        <div className=''>
          <i class="fa-solid fa-phone"></i>
          <Link to=''>
            <span>+8801878116232</span>
          </Link>
        </div>
        <div>
          <div>
            <Link to=''>বাংলা</Link>
            <Link to=''><i class="fa-solid fa-user"></i> Sign In</Link>
            <Link to=''><i class="fa-solid fa-user-plus"></i> Sign Up</Link>
          </div>
          <div>
            <Link to=''><i class="fa-brands fa-facebook-f"></i></Link>
            <Link to=''><i class="fa-brands fa-youtube"></i></Link>
            <Link to=''><i class="fa-brands fa-twitter"></i></Link>
            <Link to=''><i class="fa-brands fa-instagram"></i></Link>
            <Link to=''><i class="fa-brands fa-linkedin-in"></i></Link>
          </div>
        </div>
      </div>
      <div className='header-down-main'>
        <div className='header-down'>
          <div className='bg-light'>
            <Link className='header-logo' to=''><img src='https://onetakameal.org/uploads/ahar_settings/logo.jpg' alt=''></img></Link>
            <ul className='header-mid'>
              <li><Link to=''><span>Bidyanondo</span></Link></li>
              <li><Link to=''><span>Special Meal</span></Link></li>
              <li className='position-relative'><Link to=''>
                DONATIONS
                <i class="fa-solid fa-angle-down"></i>
                <ul className='position-absolute'>
                  <li><Link to=''>DONATE NOW</Link></li>
                  <li><Link to=''>SPONSOR NOW</Link></li>
                  <li><Link to=''>DONATION CLARIFICATION</Link></li>
                  <li><Link to=''>BANK INFORMATION</Link></li>
                </ul>
              </Link></li>
              <li><Link className='position-relative' to=''>FOOD PROJECTS<i class="fa-solid fa-angle-down"></i>
                <ul className='position-absolute'>
                  <li><Link to=''>DONATE YOUR SPECIAL DAY</Link></li>
                  <li><Link to=''>DONATE YOU BIRTHDAY</Link></li>
                  <li><Link to=''>SHARE FOOD FOR STREET CHILDREN</Link></li>
                  <li><Link to=''>SADAQAH FOR PLEASING ALLAH</Link></li>
                  <li><Link to=''>VIEW ALL PROJECTS</Link></li>
                </ul></Link></li>
              <li><Link className='position-relative' to=''>MEDIA<i class="fa-solid fa-angle-down"></i>
                <ul className='position-absolute'>
                  <li><Link to=''>GALLERY</Link></li>
                  <li><Link to=''>VIDEO</Link></li>
                  <li><Link to=''>PRESS</Link></li>
                </ul></Link></li>
              <li><Link className='position-relative' to=''>ABOUT<i class="fa-solid fa-angle-down"></i>
                <ul className='position-absolute'>
                  <li><Link to=''>ABOUT US</Link></li>
                  <li><Link to=''>CONTACT US</Link></li>
                  <li><Link to=''>BRANCHES</Link></li>
                  <li><Link to=''>BIDYANNONDO</Link></li>
                  <li><Link to=''>FAQ</Link></li>
                  <li><Link to=''>AUDIT REPORT</Link></li>
                </ul></Link></li>
              <li><Link className='position-relative' to=''>SIGN IN<i class="fa-solid fa-angle-down"></i>
                <ul className='position-absolute'>
                  <li><Link to=''>SIGN UP</Link></li>
                  <li><Link to=''>SIGN IN</Link></li>
                  <li><Link to=''>FORGOT PASSWORD</Link></li>
                </ul></Link></li>
            </ul>
          </div>
          <button className='header-button'>
            <span>DONATE NOW</span>
          </button>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
