import React,{useState,useEffect} from 'react';
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { Auth } from "../Firebase/context";
import firebase from '../Firebase/firebase'
const LoginComponent = (props) => {
   const [userState, setUserState] = useState(null);
   const [userEmail, setUserEmail] = useState("");

   const { state, dispatch } = React.useContext(Auth);

   useEffect(() => {
     firebase.getUserState().then((user) => {
       if (user) {
         setUserState(user);
         setUserEmail(user.email);
       }
     });
   });

   const logout = () => {
     firebase.logout();
     setUserState(null);
      props.history.replace(`${ROUTES.SIGN_IN}`);
     return dispatch({
       type: "LOGOUT",
       payload: {},
     }); 
     
   };

   let buttons;
   if (userState != null || state.user.hasOwnProperty("user")) {
     //console.log(state);
     buttons = (
       <React.Fragment>
         <li>{userEmail}</li>
         <li>
           <li className="login-buttons-item" onClick={logout}>
             Wyloguj
           </li>
         </li>
       </React.Fragment>
     );
   } else {
     buttons = (
       <React.Fragment>
         <Link to={ROUTES.SIGN_IN}>
           <li className="login-buttons-item login-b">Zaloguj</li>
         </Link>

         <Link to={ROUTES.SIGN_UP}>
           <li className="login-buttons-item sign-b">Załóż konto</li>
         </Link>
       </React.Fragment>
     );
   }

    return (
      <ul className="login-buttons">
        {buttons}
      </ul>
    );
};

export default withRouter(LoginComponent);