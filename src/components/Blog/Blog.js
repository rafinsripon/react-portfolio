import blog1 from '../../image/blog-1.jpg';
import blog2 from '../../image/blog-2.jpg';
import blog4 from '../../image/blog-4.jpg';
import './Blog.css';
function Blog() {
    return (
        <div className='blog_area pt_80 pb_80'>
            <div className="container relative">
                <div className="blog_contant heading text_align_center mb_30">
                    <h2> <span>L</span> atest News</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Explicabo ipsa ipsam quam a quae amet!</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,error?</p>
                </div>
                <div className="row">
                    <div className="col_3">
                    <div class="circle1 circle"></div>
                    <div class="circle2 circle"></div>
                        <div className="project_box pointer">
                            <div className="project_img">
                                <img src={blog1} alt="img not found" />
                            </div>
                            <div className="project_effect"></div>
                            <div className="blog_text text align_items_center">
                                <h5>development</h5>
                                <h4>Getting tickets to the big show</h4>
                                <button className='blog btn pointer'>view details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col_3">
                        <div className="project_box pointer">
                            <div className="project_img">
                                <img src={blog2} alt="img not found" />
                            </div>
                            <div className="project_effect"></div>
                            <div className="blog_text text align_items_center">
                                <h5>designs</h5>
                                <h4>Getting tickets to the big show</h4>
                                <button className='blog btn pointer'>view details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col_3">
                        <div className="project_box pointer">
                            <div className="project_img">
                                <img src={blog4} alt="img not found" />
                            </div>
                            <div className="project_effect"></div>
                            <div className="blog_text text align_items_center">
                                <h5>development</h5>
                                <h4>Getting tickets to the big show</h4>
                                <button className='blog btn pointer'>view details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;