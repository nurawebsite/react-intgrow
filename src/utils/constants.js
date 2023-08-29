import jwt from 'jwt-decode';

const apiEndpoint = "https://dev.intgrow.co/api/";
const apis = {
    register: `${apiEndpoint}auth/signUp`,
    login: `${apiEndpoint}auth/signIn`
};

const HANDLERS = {
    INITIALIZE: 'INITIALIZE',
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT'
};

const getUsername = () => {
    const token = window.localStorage.getItem("access_token");
    const userInfo = jwt(token);
    return userInfo && userInfo.first_name;
  };

export {
    apiEndpoint,
    apis,
    HANDLERS,
    getUsername
};