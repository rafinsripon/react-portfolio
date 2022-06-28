import { useState } from "react";
import home_img from "../../image/home.png";
import logo from "../../image/logo.png";
import './Home.css';
function Home() {
  //sticky
  window.addEventListener("scroll", function(){
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 0)
  });
  //kdjdlf
  const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="container header d_flex align_items_center justify_content_space_between">
        <div className="logo">
                <img src={logo} alt="img not found" />
            </div>
            <div className="navbar">
                <ul className="navlist d_flex">
                  <li><a href="#Home">Home</a></li>
                  <li><a href="#About">About</a></li>
                  <li><a href="#Services">Services</a></li>
                  <li><a href="#Portfolio">Portfolio</a></li>
                  <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
            {/* toggle_menu */}
          <div className="toggle_menu">
              <svg onClick={ () => setShow (!show) } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-right white pointer" viewBox="0 0 16 16">
              <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/></svg>
          </div>
          {show ?(
          // side_bar
          <div className="sideNavBar">
            <ul className="sideBar">
                  <li><a href="#Home">Home</a></li>
                  <li><a href="#About">About</a></li>
                  <li><a href="#Services">Services</a></li>
                  <li><a href="#Portfolio">Portfolio</a></li>
                  <li><a href="#Contact">Contact</a></li>
            </ul>
          </div>
          ) : null}
      </div>
      <div className="hero_area">
        <div className="container relative">
          <div className="row">
            <div className="col_2 eidt_col">
              <div className="hero_contant">
                  <div class="circle1 circle"></div>
                  <div class="circle2 circle"></div>
                <h4>well come to my world</h4>
                <h1>hi! i'm rafins ripon<span><span className="white">a</span> creative web developer</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem  possimus dicta maiores similique nesciunt ipsa iste quasi repudiandae sunt.</p>
                <div className="home_button">
                <button className="btn pointer">Download CV</button>
                </div>
              </div>
            </div>
            <div className="col_2 eidt_col">
              <div className="hero_img">
                <img src={home_img} alt="img not found" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;