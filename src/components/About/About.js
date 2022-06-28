import aboutImg from '../../image/about1.jpg';
import about_shape1 from '../../image/js.png';
import about_shape2 from '../../image/react.png';
import './About.css';

function About() {
    //up_to_top_btn
    window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom_to_top");
        upToTop.classList.toggle("active", window.scrollY > 0)
    });
    return (
        <div className='about_area pt_80 pb_80' id='About'>
            <div className="container relative">
                <div className="row">
                    <div className="col_2">
                        <div className="about_img relative">
                            <img src={aboutImg} alt="img not found" />
                            <img src={about_shape1} className="shape javascript" alt="img not found" />
                            <img src={about_shape2} className="shape react" alt="img not found" />
                        </div>
                    </div>
                    <div className="col_2">
                        <div className="abut_contant heading">
                            <h2><span>A</span> bout Me</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consectetur sequi libero vero maxime natus repudiandae rerum aperiam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores id officiis reprehenderit. Molestias incidunt eaque commodi? </p><br />
                            <p className='about_padding'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam consequatur iure corporis obcaecati dignissimos iusto culpa ipsum.</p>
                        </div>
                        <div className="about_info">
                        <div class="circle2 circle"></div>
                            <h2>Personal Info</h2>
                            <div className="row">
                                <div className="col">
                                    <div className="about_list">
                                        <span class="perName1">Name: </span>
                                        <span class="perName2">Rafins Ripon</span>
                                    </div>
                                    <div className="about_list">
                                        <span class="perName1">Age: </span>
                                        <span class="perName2"> 24 Years</span>
                                    </div>
                                    <div className="about_list">
                                        <span class="perName1">Nationality: </span>
                                        <span class="perName2"> Bangladeshi</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="about_list">
                                        <span class="perName1">Address: </span>
                                        <span class="perName2"> Dhaka,Bangladesh</span>
                                    </div>
                                    <div className="about_list">
                                        <span class="perName1">Phone: </span>
                                        <span class="perName2"> +88018128...302</span>
                                    </div>
                                    <div className="about_list">
                                        <span class="perName1">E-mail: </span>
                                        <span class="perName2"> rafinsripon@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="about_button">
                                <button className="btn pointer">Download CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* up_to_btn */}
            <div className="up_to_top">
                <a href="#" className='bottom_to_top'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-up white" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg>
                </a>
            </div>
        </div>
    )
}

export default About;