import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// const Footer = () => {
//   return (
//     <div className="foot">
//     <MDBFooter color="teal lighten-4" className="font-small pt-4 mt-4">
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <MDBCol size="9">
//             <h5 className="title"><b>Footer Content</b></h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </MDBCol>
//           <MDBCol size="3">
//             <ul>
//             <h4 className="title" style={{color: 'white'}}><b><u>Connect!</u></b></h4>
//             <li className="list-unstyled">
//             <a class="btn-floating btn-lg btn-fb" type="button" role="button">
//                 <i class="fab fa-facebook-f fa-2x"></i>
//             </a>
//             <a class="btn-floating btn-lg btn-tw" type="button" role="button">
//                   <i class="fab fa-twitter fa-2x"></i>
//                 </a>
//                 </li>
//               <li className="list-unstyled">
//               <a class="btn-floating btn-lg btn-ins" type="button" role="button">
//                     <i class="fab fa-instagram fa-2x"></i>
//                 </a>
//               <a class="btn-floating btn-lg btn-li" type="button" role="button">
//                   <i class="fab fa-linkedin-in fa-2x"></i>
//                   </a>
//                   </li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//       <div className="footer-copyright text-center py-3">
//         <MDBContainer fluid>
//             Hi
//         </MDBContainer>
//       </div>
//     </MDBFooter>
//     </div>
//   );
// }

// export default Footer;


const Footer = () => {
  return (
    <div className="foot">
    <MDBFooter color="teal lighten-4" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="3">
            <h5 className="title" style={{color: 'white'}}><b><u>Stay Connected</u></b></h5>
            <ul>
            <li className="list-unstyled">
             <a class="btn-floating btn-lg btn-fb" type="button" role="button" href="https://www.facebook.com/xinampa.bio">
                <i class="fab fa-facebook-f fa-2x"></i>
              </a></li>
              <li className="list-unstyled">
              <a class="btn-floating btn-lg btn-tw" type="button" role="button" href="https://twitter.com/Xinampa_Bio">
                  <i class="fab fa-twitter fa-2x"></i>
                </a></li>
              <li className="list-unstyled">
              <a class="btn-floating btn-lg btn-ins" type="button" role="button" href="https://www.instagram.com/xinampa.bio/?hl=en">
                    <i class="fab fa-instagram fa-2x"></i>
                 </a></li>
              <li className="list-unstyled">
              <a class="btn-floating btn-lg btn-li" type="button" role="button" href="https://www.linkedin.com/company/xinampa/?trk=public_profile_topcard_current_company">
                   <i class="fab fa-linkedin-in fa-2x"></i>
                   </a></li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <a>Hi</a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;