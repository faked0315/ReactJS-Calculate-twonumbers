import './App.css';

function Footerr(){
return(
        <footer>    
            
            <iframe width="100%" height="500" src="https://maps.google.com/maps?q=kaashiv%20infotech&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>         
            <br/><br/>        
            <div id="colours">
                <h6>
                    <strong>
                        <a href="https://www.kaashivinfotech.com/services/">Services | </a><a href="https://www.kaashivinfotech.com/kaashiv-infotech-reviews/">Testimonials | </a><a href="https://www.kaashivinfotech.com/industrial-visit/">Industrial Visit | </a><a href="https://www.kaashivinfotech.com/internship-in-chennai/">Internship in Chennai | </a><a href="https://www.inplanttrainingchennai.com/">Inplant Training in Chennai | </a>
                    </strong>
                </h6>
                <h6>
                    <strong>
                        <a href="https://www.kaashivinfotech.com/training-courses/">Main Course Page | </a><a href="https://www.kaashivinfotech.com/apply-for-internship/hire-req.php">Want to Hire our Students?</a>
                    </strong>
                </h6>
                <br/>
                <h6 style={{color: "white"}}><strong> Address :</strong></h6>
                <h6 style={{color: "white"}}><strong>16/1, Radial Colony , (Round Building) Near to Chennai Public School ,</strong></h6>
                <h6 style={{color: "white"}}><strong>Collector nagar, Anna Nagar West ,</strong></h6>
                <h6 style={{color: "white"}}><strong>Chennai - 600101 .</strong></h6>                
                <strong><p style={{color: "white"}}>&copy; {(new Date().getFullYear())} - Kaashiv Infotech .</p></strong>
            </div>
        </footer>
);
}
export default Footerr;