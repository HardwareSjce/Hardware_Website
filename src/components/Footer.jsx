import React from "react";
function Footer(){
    return (
        <footer>
        <h2>Stay connected</h2>
        <div className="footer-contact">
          <a href="https://www.instagram.com/hardware_club_sjce/" target="_blank">
            <img class="footerimg" src="./Images/instagram.svg" alt="Instagram" width="50"/>
          </a>
          <a href="https://www.whatsapp.com" target="_blank">
            <img className="footerimg" src="./Images/whatsapp.svg" alt="WhatsApp" width="65"/>
          </a>
          <a href="https://www.linkedin.com/company/hardware-club-sjce/" target="_blank">
            <img className="footerimg" src="./Images/linkdin.svg" alt="LinkedIn" width="50"/>
          </a>
        </div>
        <h4>hardwareclubsjce@gmail.com</h4>
        <p>&copy; Hardware Club SJCE</p>
      </footer>
    );
}
export default Footer;