import project1 from '../../image/project-1.jpg';
import project2 from '../../image/project-2.jpg';
import project3 from '../../image/project-3.jpg';
import project4 from '../../image/project-4.jpg';
import project5 from '../../image/project-5.jpg';
import './Project.css';
function Project() {
    return (
        <div className='project_area pt_80 pb_80' id='Portfolio'>
            <div className="container relative">
                <div className="projct_contant heading text_align_center">
                    <h2> <span>M</span> y projects</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Explicabo ipsa ipsam quam a quae amet!</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,error?</p>
                </div>
                <div className="row">
                    <div className="col_3">
                    <div class="circle1 circle"></div>
                    <div class="circle2 circle"></div>
                        <div className="project_box pointer">
                            <div className="project_img">
                                <img src={project1} alt="img not found" />
                            </div>
                            <div className="project_effect"></div>
                            <div className="project_contant align_items_center">
                                <h5>development</h5>
                                <h4>Getting tickets to the big show</h4>
                                <button className='btn pointer'>view details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col_3">
                        <div className="project_box pointer">
                            <div className="project_img">
                                <img src={project2} alt="img not found" />
                            </div>
                            <div className="project_effect"></div>
                            <div className="project_contant align_items_center">
                                <h5>development</h5>
                                <h4>Getting tickets to the big show</h4>
                                <button className='btn pointer'>view details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col_3">
                        <div className="project_box pointer">
                            <div className="project_img">
                                <img src={project3} alt="img not found" />
                            </div>
                            <div className="project_effect"></div>
                            <div className="project_contant align_items_center">
                                <h5>development</h5>
                                <h4>Getting tickets to the big show</h4>
                                <button className='btn pointer'>view details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col_3">
                        <div className="project_box pointer">
                            <div className="project_img">
                                <img src={project4} alt="img not found" />
                            </div>
                            <div className="project_effect"></div>
                            <div className="project_contant align_items_center">
                                <h5>development</h5>
                                <h4>Getting tickets to the big show</h4>
                                <button className='btn pointer'>view details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col_3">
                        <div className="project_box pointer">
                            <div className="project_img">
                                <img src={project5} alt="img not found" />
                            </div>
                            <div className="project_effect"></div>
                            <div className="project_contant align_items_center">
                                <h5>development</h5>
                                <h4>Getting tickets to the big show</h4>
                                <button className='btn pointer'>view details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col_3">
                        <div className="project_box pointer">
                            <div className="project_img">
                                <img src={project1} alt="img not found" />
                            </div>
                            <div className="project_effect"></div>
                            <div className="project_contant align_items_center">
                                <h5>development</h5>
                                <h4>Getting tickets to the big show</h4>
                                <button className='btn pointer'>view details</button>
                            </div>
                        </div>
                    </div>
                    <div className="project_btn">
                        <button className='btn pointer'>view more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;