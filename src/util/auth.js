/**
 * Authors:    Sourav Kumar Nanda @souravkumarnanda4@gmail.com
 * Created:    10.08.2019
 * Purpose:    I understand the importance of comment lines in big projects. While setting up a new function, I will try to write
 *             some inline comments, descriptive block comments etc. to briefly explain how things work. 

 **/

import React, { useState, useEffect, useContext, createContext } from "react";
import Auth0 from "auth0-js";

const auth0Realm = "Username-Password-Authentication";
const auth0 = new Auth0.WebAuth({
  domain: "dev-cy4zqx-n.auth0.com",
  // It's not a good practice to pass client id like this. I will soon find a way to pass it as a env variable.
  clientID: "9XO1hPPCxrKkoAtox30zpm6FYs2lEZni",
  responseType: "id_token",
  scope: "openid profile email"
});

const authContext = createContext();

// Provider component that wraps our app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object and update when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    return new Promise((resolve, reject) => {
      auth0.client.login(
        {
          realm: auth0Realm,
          username: email,
          password: password
        },
        (error, response) => {
          if (error) {
            reject(new CustomError(error.code, error.description));
          } else {
            // Store access token in local storage
            window.localStorage.setItem("access_token", response.accessToken);

            getCurrentUser().then(user => {
              setUser(user);
              resolve(user);
            });
          }
        }
      );
    });
  };

  const signup = (email, password) => {
    return new Promise((resolve, reject) => {
      auth0.signup(
        {
          connection: auth0Realm,
          email: email,
          password: password
        },
        (error, response) => {
          if (error) {
            reject(new CustomError(error.code, error.message));
          } else {
            // Automatically signin the user, a sign of better UX for the user.
            signin(email, password).then(() => {
              resolve();
            });
          }
        }
      );
    });
  };

  const signout = () => {
    window.localStorage.removeItem("access_token");
    setUser(false);
  };

  const sendPasswordResetEmail = email => {
    return new Promise((resolve, reject) => {
      auth0.changePassword(
        {
          connection: "Username-Password-Authentication",
          email: email
        },
        (error, response) => {
          if (error) {
            return reject(error);
          } else {
            resolve(true);
          }
        }
      );
    });
  };

  // Get the current user using stored access_token
  const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const accessToken = window.localStorage.getItem("access_token");
      if (accessToken) {
        auth0.client.userInfo(accessToken, (error, user) => {
          if (error) {
            reject(error);
          } else {
            resolve(user);
          }
        });
      } else {
        resolve(false);
      }
    });
  };

  // Get user on mount
  useEffect(() => {
    getCurrentUser().then(user => {
      setUser(user);
    });
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail
  };
}

function CustomError(code, message) {
  // Auth0 doesn't always give us a human readable error message ...
  // ... so as a backup we display the error code ("invalid_password", etc).
  const displayMessage = typeof message === "string" ? message : code;
  const error = new Error(displayMessage);
  error.code = code;
  return error;
}
