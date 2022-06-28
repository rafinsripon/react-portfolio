import footer1 from '../../image/logo-1.png';
import './Footer.css';

function Footer() {
  return (
    <div className='footer_area'>
        <div className="container footer_container">
            <div className="footer_img">
                <img src={footer1} alt="img not found" />
            </div>
            <span className='copyright'>copyright@ 2022 programmer rafinsripon. All right reserved.</span>
        </div>
    </div>
  )
}

export default Footer;