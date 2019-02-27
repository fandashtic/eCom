import axios from "axios";
import * as firebase from "firebase";
import { ref, companyData} from 'service/fireBase';
import config from 'config/jsonWebToken';
import jwt from 'jsonwebtoken'

export const COMPANY_LOGGED_IN = "COMPANY_LOGGED_IN";
export const COMPANY_LOGGED_OUT = "COMPANY_LOGGED_OUT";

//=========== Reducer call functions begin ===========//
export const companyLoggedIn = company => ({
  type: COMPANY_LOGGED_IN,
  company
});

export const companyLoggedOut = () => ({
  type: COMPANY_LOGGED_OUT
});

//=======================Action call functions============== //

export const login = credentials => dispatch => {
  return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
  .then((result) => {
         const token = {"id" : result.user.uid, "email" :credentials.email,'secret':{ expiresIn:"5h" }};
         localStorage.ecomJWT = token;
          dispatch(companyLoggedIn(token))
          return  token
    })
  .catch(error => {
    let err = {
          status:'error',
          message:"Email or Password is Invaild"
        }
        return err;
  })
};

export const logout = () => dispatch => {
  localStorage.removeItem("ecomJWT");
  dispatch(companyLoggedOut());
};

export const register = (data) =>  dispatch => {
  return firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
   .then(res => {
      console.log(res.user.uid)
      let userId = res.user.uid
      return companyData.child(userId).push({
        email : data.email,
        company : data.companyName,
      })
      .then( res => {
        let Success = {
          status:'Success',
          result:res.key
        }
        return Success
      })
        .catch( error => {
        let err = {
          status:'error',
          message:error.message
        }
        return err
      })
    })
   .catch( error => {
    let err = {
      status:'error',
      message:error.message
    }
    return err
   })
}

export const validateUserLoggedIn = user => dispatch => {
  console.log(user)
}

export const fileUpload = (data) => dispatch => {
  console.log(data)
};