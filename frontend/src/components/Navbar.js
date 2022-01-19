// import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { useState, useContext } from "react";
// import { DataContext } from "../DataProvider";
// import "../styles/navbar.css";
// import Navbar from 'react-bootstrap/Navbar';
// import authActions from "../redux/actions/authActions";
// import { connect } from "react-redux";

// const Nav = (props) => {
//   console.log(props)
//   const { user } = props;
//   const [menu, setMenu] = useState(true);
//   const [userMenu, setUserMenu] = useState(false);
//   const value = useContext(DataContext);
//   const [carrito] = value.carrito;
//   const [menuCart, setMenuCart] = value.menuCart;

//   const toogleMenu = () => {
//     setMenuCart(!menuCart);
//   };

//   const handleLogOut = () => {
//     props.logOut();
//   };

  
//   return (
//     <Navbar class="marginGlobal container-fluid bg-danger d-flex justify-content-center mr-8">
//       <div class="container d-flex align-items-center bg-danger">
//         <Link to="/">
//           <img src="/assets/logoluxury.png" alt="logo" class="w-30 h-20" />
//         </Link>
//       </div>
//       {user && (
//         <>
//           <div className="cart mr-6" onClick={toogleMenu}>
//             <FaShoppingCart class="text-5xl" />
//             <span className="item__total">{carrito.length}</span>
//           </div>
//         </>
//       )}
//       <div className="block lg:hidden">
//         <button
//           onClick={() => setMenu(!menu)}
//           className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
//         >
//           <svg
//             className="fill-current h-10 w-10"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         </button>
//       </div>
//       <div className="relative w-full flex flex-grow lg:flex lg:items-end lg:w-auto lg:flex-col md:hidden">
//         {menu ? (
//           <>
//             <div className=" md:flex">
//               <Link
//                 to="/"
//                 className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4 text-base active:border-b-2 hover:border-b-2"
//               >
//                 INICIO
//               </Link>
//               <Link
//                 to="/Nosotros"
//                 className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4 text-base active:border-b-2 hover:border-b-2"
//               >
//                 NOSOTROS
//               </Link>
//               <Link
//                 to="/NuestrosGins"
//                 className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
//               >
//                 NUESTROS GINS
//               </Link>
//               <Link
//                 to="/Cocktails"
//                 className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
//               >
//                 COCKTAILS
//               </Link>
//               {!props.user ? (
//                 <>
//                   <Link
//                     to="/Registrarse"
//                     className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2 Register"
//                   >
//                     REGISTRATE
//                   </Link>
//                   <Link
//                     to="/Loguearse"
//                     className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
//                   >
//                     INGRESÁ
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <div
//                     onClick={() => setUserMenu(!userMenu)}
//                     className="w-64 justify-center items-center inline-block"
//                   >
//                     <div className="relative border-b-4 border-transparent py-3">
//                       <div className="flex justify-center items-center space-x-3 cursor-pointer">
//                         <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
//                           <img
//                             src={user.userImg}
//                             alt={user.firstName}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="font-semibold dark:text-white text-gray-900 text-lg">
//                           <div className="cursor-pointer">{user.firstName}</div>
//                         </div>
//                       </div>
//                       {userMenu && (
//                         <div className="absolute w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5 transition ease-out duration-100 inline">
//                           <ul className="space-y-3 dark:text-white">
//                             <li class="font-medium">
//                               <Link
//                                 to="/PanelUser"
//                                 class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
//                               >
//                                 <div class="mr-3">
//                                   <svg
//                                     class="w-6 h-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                   >
//                                     <path
//                                       stroke-linecap="round"
//                                       stroke-linejoin="round"
//                                       stroke-width="2"
//                                       d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                                     ></path>
//                                     <path
//                                       stroke-linecap="round"
//                                       stroke-linejoin="round"
//                                       stroke-width="2"
//                                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                                     ></path>
//                                   </svg>
//                                 </div>
//                                 Mi perfil
//                               </Link>
//                             </li>
//                             {user.role === "admin" && (
//                               <li className="font-medium">
//                                 <Link
//                                   to="/panelAdmin"
//                                   className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
//                                 >
//                                   <div className="mr-3">
//                                     <svg
//                                       className="w-6 h-6"
//                                       fill="none"
//                                       stroke="currentColor"
//                                       viewBox="0 0 24 24"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                       <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="2"
//                                         d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                                       ></path>
//                                       <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="2"
//                                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                                       ></path>
//                                     </svg>
//                                   </div>
//                                   Configuracion
//                                 </Link>
//                               </li>
//                             )}
//                             <hr className="dark:border-gray-700" />
//                             <li className="font-medium">
//                               <Link to="/">
//                               <button
//                                 onClick={() => handleLogOut()}
//                                 className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
//                               >
//                                 <div className="mr-3 text-red-600">
//                                   <svg
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                   >
//                                     <path
//                                       stroke-linecap="round"
//                                       stroke-linejoin="round"
//                                       stroke-width="2"
//                                       d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                                     ></path>
//                                   </svg>
//                                 </div>
//                                 Salir
//                               </button>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </>
//         ) : null}
//       </div>
//     </Navbar>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.authReducers.user,
//     role: state.authReducers.role,
//   };
// };

// const mapDispatchToProps = {
//   logOut: authActions.logOut,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Nav);

//Opcion 2

import React from "react";
import LogoUsuario from "./assetsCocktails/logo_usuario.png";
import authActions from "../redux/actions/authActions";
import Navbar from 'react-bootstrap/Navbar'
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useContext } from "react";
import { DataContext } from "../DataProvider";


function Navigator (props) {
  
  
  const logoUser = props.user
  ? <img className="user" src= {(`${props.img}`)}/>
  : <img className="user" src={LogoUsuario}/> 

  const { user } = props;
  const [menu, setMenu] = useState(true);
  const [userMenu, setUserMenu] = useState(false);
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menuCart, setMenuCart] = value.menuCart;

  const toogleMenu = () => {
    setMenuCart(!menuCart);
  };

  const handleLogOut = () => {
    props.logOut();
  };

  return (
    <nav class="marginGlobal container-fluid d-flex justify-content-end mr-8">
  <Navbar className="marginGlobal" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="nav" as={Link} to={"/"}>INICIO</Nav.Link>
        <Nav.Link className="nav" as={Link} to={"/NuestrosGins"}>NUESTROS GINS</Nav.Link>
        <Nav.Link className="nav" as={Link} to={"/Cocktails"}>COCKTAILS</Nav.Link>
        <Nav.Link className="nav" as={Link} to={"/Nosotros"}>NOSOTROS</Nav.Link> 
        <NavDropdown title={logoUser} id="basic-nav-dropdown">
          {props.user ? <NavDropdown.Item className="nav2" onClick={() => props.logOut()}>SALIR</NavDropdown.Item> : <><NavDropdown.Item className="nav2" as={Link} to={"/Registrarse"}>REGISTRATE</NavDropdown.Item><NavDropdown.Item className="nav2" as={Link} to={"/Loguearse"}>INGRESÁ</NavDropdown.Item></>}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>
 </nav>
   );
 }
 const mapStateToProps = (state) => {
  return {
    user: state.authReducers.user,
    role: state.authReducers.role,
  };
};

const mapDispatchToProps = {
  logOut: authActions.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigator);


//BackUp

// import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { useState, useContext } from "react";
// import { DataContext } from "../DataProvider";
// import "../styles/navbar.css";
// import Navbar from 'react-bootstrap/Navbar';
// import authActions from "../redux/actions/authActions";
// import { connect } from "react-redux";

// const Nav = (props) => {
//   console.log(props)
//   const { user } = props;
//   const [menu, setMenu] = useState(true);
//   const [userMenu, setUserMenu] = useState(false);
//   const value = useContext(DataContext);
//   const [carrito] = value.carrito;
//   const [menuCart, setMenuCart] = value.menuCart;

//   const toogleMenu = () => {
//     setMenuCart(!menuCart);
//   };

//   const handleLogOut = () => {
//     props.logOut();
//   };

  
//   return (
//     <Navbar class="marginGlobal sticky flex items-center justify-between flex-wrap bg-red-600 p-2">
//       <div class="flex items-center flex-shrink-0 text-white mr-6">
//         <Link to="/">
//           <img src="/assets/logoluxury.png" alt="logo" class="w-30 h-20" />
//         </Link>
//       </div>
//       {user && (
//         <>
//           <div className="cart mr-6" onClick={toogleMenu}>
//             <FaShoppingCart class="text-5xl" />
//             <span className="item__total">{carrito.length}</span>
//           </div>
//         </>
//       )}
//       <div className="block lg:hidden">
//         <button
//           onClick={() => setMenu(!menu)}
//           className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
//         >
//           <svg
//             className="fill-current h-10 w-10"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         </button>
//       </div>
//       <div className="relative w-full flex flex-grow lg:flex lg:items-end lg:w-auto lg:flex-col md:hidden">
//         {menu ? (
//           <>
//             <div className=" md:flex">
//               <Link
//                 to="/"
//                 className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4 text-base active:border-b-2 hover:border-b-2"
//               >
//                 INICIO
//               </Link>
//               <Link
//                 to="/Nosotros"
//                 className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4 text-base active:border-b-2 hover:border-b-2"
//               >
//                 NOSOTROS
//               </Link>
//               <Link
//                 to="/NuestrosGins"
//                 className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
//               >
//                 NUESTROS GINS
//               </Link>
//               <Link
//                 to="/Cocktails"
//                 className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
//               >
//                 COCKTAILS
//               </Link>
//               {!props.user ? (
//                 <>
//                   <Link
//                     to="/Registrarse"
//                     className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2 Register"
//                   >
//                     REGISTRATE
//                   </Link>
//                   <Link
//                     to="/Loguearse"
//                     className="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
//                   >
//                     INGRESÁ
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <div
//                     onClick={() => setUserMenu(!userMenu)}
//                     className="w-64 justify-center items-center inline-block"
//                   >
//                     <div className="relative border-b-4 border-transparent py-3">
//                       <div className="flex justify-center items-center space-x-3 cursor-pointer">
//                         <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
//                           <img
//                             src={user.userImg}
//                             alt={user.firstName}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="font-semibold dark:text-white text-gray-900 text-lg">
//                           <div className="cursor-pointer">{user.firstName}</div>
//                         </div>
//                       </div>
//                       {userMenu && (
//                         <div className="absolute w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5 transition ease-out duration-100 inline">
//                           <ul className="space-y-3 dark:text-white">
//                             <li class="font-medium">
//                               <Link
//                                 to="/PanelUser"
//                                 class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
//                               >
//                                 <div class="mr-3">
//                                   <svg
//                                     class="w-6 h-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                   >
//                                     <path
//                                       stroke-linecap="round"
//                                       stroke-linejoin="round"
//                                       stroke-width="2"
//                                       d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                                     ></path>
//                                     <path
//                                       stroke-linecap="round"
//                                       stroke-linejoin="round"
//                                       stroke-width="2"
//                                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                                     ></path>
//                                   </svg>
//                                 </div>
//                                 Mi perfil
//                               </Link>
//                             </li>
//                             {user.role === "admin" && (
//                               <li className="font-medium">
//                                 <Link
//                                   to="/panelAdmin"
//                                   className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
//                                 >
//                                   <div className="mr-3">
//                                     <svg
//                                       className="w-6 h-6"
//                                       fill="none"
//                                       stroke="currentColor"
//                                       viewBox="0 0 24 24"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                       <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="2"
//                                         d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                                       ></path>
//                                       <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="2"
//                                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                                       ></path>
//                                     </svg>
//                                   </div>
//                                   Configuracion
//                                 </Link>
//                               </li>
//                             )}
//                             <hr className="dark:border-gray-700" />
//                             <li className="font-medium">
//                               <Link to="/">
//                               <button
//                                 onClick={() => handleLogOut()}
//                                 className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
//                               >
//                                 <div className="mr-3 text-red-600">
//                                   <svg
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                   >
//                                     <path
//                                       stroke-linecap="round"
//                                       stroke-linejoin="round"
//                                       stroke-width="2"
//                                       d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                                     ></path>
//                                   </svg>
//                                 </div>
//                                 Salir
//                               </button>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </>
//         ) : null}
//       </div>
//     </Navbar>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.authReducers.user,
//     role: state.authReducers.role,
//   };
// };

// const mapDispatchToProps = {
//   logOut: authActions.logOut,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Nav);
