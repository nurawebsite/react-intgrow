import React, { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { apis } from "/src/utils/constants";
import jwt from 'jwt-decode';

const HANDLERS = {
  INITIALIZE: 'INITIALIZE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
};

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null
};

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      ...(
        // if payload (user) is provided, then is authenticated
        user
          ? ({
            isAuthenticated: true,
            isLoading: false,
            user
          })
          : ({
            isLoading: false
          })
      )
    };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null
    };
  }
};

const isTokenExpired = (token) => {
  if(!token) { return true; }
  const decodedToken = jwt(token);
  if (!decodedToken || !decodedToken.exp) {
    // If "exp" claim is missing, consider the token as expired
    return true;
  }
  const expirationTime = decodedToken.exp;
  const currentTime = Math.floor(Date.now() / 1000);
  return currentTime >= expirationTime;
}

const reducer = (state, action) => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);

const getHsnHistory = async (page) => {
  try {
    const url = apis.getHsnLog + `/${page}`;
    const token = window.localStorage.getItem('access_token');
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
const getDutyHistory = async (page) => {
  try {
    const url = apis.getDutyLog + `/${page}`;
    const token = window.localStorage.getItem('access_token');
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};

const getFtaHistory = async (page) => {
  try {
    const url = apis.getFtaLog + `/${page}`;
    const token = window.localStorage.getItem('access_token');
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    let isAuthenticated = false;
    let token;

    try {
      token = window.localStorage.getItem('access_token');
      isAuthenticated = token && !isTokenExpired(token);
    } catch (err) {
      console.error(err);
    }

    if (isAuthenticated) {
      const userInfo = jwt(token);
      const user = {
        id: userInfo.id,
        name: userInfo.first_name,
        email: userInfo.email
      };

      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: user
      });
    } else {
      dispatch({
        type: HANDLERS.INITIALIZE
      });
    }
  };

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const skip = () => {
    try {
      window.localStorage.setItem('authenticated', 'true');
    } catch (err) {
      console.error(err);
    }

    const user = {
      id: '5e86809283e28b96d2d38537',
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: 'Test',
      email: 'test@test.com'
    };

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user
    });
  };

  const signIn = async (email, password) => {
    try {
      const url = apis.login;
      const data = {
        email,
        password
      };
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response;

    } catch (error) {
      console.error('Error:', error);
    }

  };

  const signUp = async (email, name, password) => {
    try {
      const url = 'https://dev.intgrow.co/api/auth/signUp';
      const data = {
        email,
        "first_name": name,
        password
      };
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const signOut = () => {
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('authenticated');

    dispatch({
      type: HANDLERS.SIGN_OUT
    });

  };

  const updateUserInfo = async (name) => {
    try {
      const url = apis.updateUser;
      const data = {
        "first_name": name
      };
      const token = window.localStorage.getItem('access_token');
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });

      return response;

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updatePassword = async (oldPassword, newPassword) => {
    try {
      const url = apis.changePassword;
      const data = {
        "old_password": oldPassword,
        "new_password": newPassword
      };
      const token = window.localStorage.getItem('access_token');
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });

      return response;

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getWalletPoints = async () => {
    try {
      const url = apis.getWallet;
      const token = window.localStorage.getItem('access_token');
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      return response;

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getAccountSummary = async () => {
    try {
      const url = apis.getSummary;
      const token = window.localStorage.getItem('access_token');
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      return response;
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <AuthContext.Provider
      value={{
        ...state,
        skip,
        signIn,
        signUp,
        signOut,
        updateUserInfo,
        updatePassword,
        getWalletPoints,
        getAccountSummary
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);

export {
  reducer,
  initialState,
  isTokenExpired,
  getHsnHistory,
  getDutyHistory,
  getFtaHistory
};
