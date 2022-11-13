import Kaashiv from './Kaashiv.png';
import './App.css';

function Headerr(){
return(
    <div id="navb">
        <nav class="navbar">
        <img src={Kaashiv} alt="Logo" />
        <br/><br/>
        <div class="navbar-collapse" id="navb">
            <ul class="nav">
                <li style={{paddingRight: "10px"}}><a class="btn btn-outline-info" href="https://www.kaashivinfotech.com/home-version-5/">HOME</a></li><br/>                
                <li style={{paddingRight: "10px"}}><a class="btn btn-outline-info" href="https://www.kaashivinfotech.com/about-us/">ABOUT US</a></li>
                <li style={{paddingRight: "10px"}}><a class="btn btn-outline-info" href="https://www.kaashivinfotech.com/services/">SERVICES</a></li>
                <li style={{paddingRight: "10px"}}><a class="btn btn-outline-info" href="https://www.kaashivinfotech.com/products/">PRODUCTS</a></li>
                <li style={{paddingRight: "10px"}}><a class="btn btn-outline-info" href="https://www.kaashivinfotech.com/internship/">STUDENTS</a></li>
                <li style={{paddingRight: "10px"}}><a class="btn btn-outline-info" href="https://www.kaashivinfotech.com/tutorial/">BLOG</a></li>
                <li><a class="btn btn-outline-info" href="https://www.kaashivinfotech.com/contact-us/">CONTACT US</a></li>
            </ul>
        </div>
  </nav> 
  <br/>
    </div>    

);
}
export default Headerr;