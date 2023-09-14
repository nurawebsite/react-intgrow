import jwt from 'jwt-decode';

const apiEndpoint = "https://dev.intgrow.co/api/";
const apis = {
    register: `${apiEndpoint}auth/signUp`,
    login: `${apiEndpoint}auth/signIn`,
    updateUser: `${apiEndpoint}auth/me`,
    changePassword: `${apiEndpoint}auth/changePassword`,
    getWallet: `${apiEndpoint}wallets/get`,
    getSummary: `${apiEndpoint}logs/all`,
    getHsnLog: `${apiEndpoint}logs/hs_code`,
    getDutyLog: `${apiEndpoint}logs/duty`,
    getFtaLog: `${apiEndpoint}logs/fta`
};

const HANDLERS = {
    INITIALIZE: 'INITIALIZE',
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT'
};

const getUsername = () => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
        const userInfo = jwt(token);
        return userInfo && userInfo.first_name;
    }
    return "";
};

const getUserData = () => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
        const userInfo = jwt(token);
        return {
            name: userInfo.first_name,
            email: userInfo.email
        };
    }
    return {};
};

const monthNames = [
    "Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

const getFormattedDate = (val) => {
    const date = new Date(val);
    const day = date.getDate();
    const monthName = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${monthName}-${year}`;
};

const statusMap = {
    1: 'success',
    0: 'error'
};

const statusText = {
    0: 'Failed',
    1: 'Success'
}

export {
    apiEndpoint,
    apis,
    HANDLERS,
    getUsername,
    getUserData,
    getFormattedDate,
    statusMap,
    statusText
};