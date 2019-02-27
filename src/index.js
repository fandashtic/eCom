import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'
import App from './App'
import * as serviceWorker from './serviceWorker';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import decode from 'jwt-decode';
import { validateUserLoggedIn } from 'actions/auth';

/*let loadScript = function(href, rel="", type="") {
    let link = document.createElement('link')
    link.rel  = (rel) ? rel : 'stylesheet'
    link.type = (type) ? type : 'text/css'
    link.href = href
    document.head.appendChild(link)
  }*/
  

// fav icon
//loadScript('/assets/images/favicon.png', "shortcut icon", "image/png")
// loadScript('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
// loadScript('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons');
// loadScript('https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css');

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

/*if (localStorage.ecomJWT) {
  //setAuthorizationToken(localStorage.ecomJWT);
  let payload = decode(localStorage.ecomJWT)
  console.log("test",payload)
  const user = {
    userId: payload.id,
    userName: payload.name,
    userEmail: payload.email
  };
  //store.dispatch(validateStudentLoggedIn(user))
}*/

render( 
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>, document.getElementById('app')
)
serviceWorker.unregister();