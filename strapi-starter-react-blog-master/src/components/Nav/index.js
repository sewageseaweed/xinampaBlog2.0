import React, {Component} from 'react';
import Query from "../Query";
import { Link } from "react-router-dom";
import './nav.css';

import CATEGORIES_QUERY from "../../queries/category/categories";
// import './css/AppNavbar.css'; //Remove this if you want to move logo to the left
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

  var icon = (
    <span class="logo">
      <a href="/">
        <img src="logo.png" height="33" width="120" alt="text here" /></a>
    </span>
  );


const AppNavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
      return (
      <div class="navigation">
        <Query query={CATEGORIES_QUERY} id={null}>
          {({ data: { categories } }) => {
            return (
      <div class="navigation">
        <Navbar style={{backgroundColor: '#b2dfdb'}} dark expand="md" className="py-0">
          <NavbarBrand href="/" >
            <span><img src="https://images.squarespace-cdn.com/content/v1/575a6067b654f9b902f452f4/1552683653140-0UUVQSSUEWVC73AWAEQG/ke17ZwdGBToddI8pDm48kP06O0_IHyRXSOOiqwgWaApZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEsL0EX72Q6S7TgfQYQBQpkz5xM6Qt8VXd_xJGg_ziCFib8BodarTVrzIWCp72ioWw/300Logo.png?format=300w" alt="broken" height="60" width="60"/></span> 
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="uk-navbar-left" navbar>
              <UncontrolledDropdown nav inNavbar color="dark"> 
                <DropdownToggle nav caret className="text-dark" >
                    Categories
                </DropdownToggle>
                <DropdownMenu left style={{backgroundColor: '#f1f1f1'}}>
                  {categories.map((category, i) => {
                        return (
                          <DropdownItem key={category.id} >
  
                            <Link
                              to={`/category/${category.id}`}
                              className="uk-link-reset"
                            >
                              {category.name}
                            </Link>
                            <DropdownItem divider/>
                          </DropdownItem>
                        
                        );
                      })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }}
  </Query>
  </div>
      );
};
  
   export default AppNavBar;

  // import React from "react";
  // import Query from "../Query";
  // import { Link } from "react-router-dom";
  // import './nav.css';
  
  // import CATEGORIES_QUERY from "../../queries/category/categories";
  
//   const AppNavBar = (props) => {
//     const [isOpen, setIsOpen] = React.useState(false);
  
//     const toggle = () => setIsOpen(!isOpen);
//     return (
//       <div class="navigation">
//         <Query query={CATEGORIES_QUERY} id={null}>
//           {({ data: { categories } }) => {
//             return (
//               <div>
//                 <nav className="uk-navbar-container" data-uk-navbar >
//                   <div className="uk-navbar-left" >
//                     <ul className="uk-navbar-nav">
//                       <li>
//                         <Link to="/">Xinampa Blog</Link>
//                       </li>
//                     </ul>
//                   </div>
// {/* <NavbarToggler onClick={toggle} />
//            <Collapse isOpen={isOpen} navbar> */}
//                   <div className="uk-navbar-right">
//                     <ul className="uk-navbar-nav">
//                     <UncontrolledDropdown nav inNavbar color="dark"> 
//                <DropdownToggle nav caret className="text-dark" >
//                    Categories
//                 </DropdownToggle>
//                 <DropdownMenu right style={{backgroundColor: '#f1f1f1'}}>
//                       {categories.map((category, i) => {
//                         return (
//                           <DropdownItem>
//                           <li key={category.id}>
//                             <Link
//                               to={`/category/${category.id}`}
//                               className="uk-link-reset"
//                             >
//                               {category.name}
//                             </Link>
//                           </li>
//                           </DropdownItem>
//                         );
//                       })}
//                       </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </ul>
//                   </div>
//                   {/* </Collapse> */}
//                 </nav>
//               </div>
//             );
//           }}
//         </Query>
//       </div>
//     );
//   };
  
//   export default AppNavBar;
  