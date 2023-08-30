function createCookie(name, value) {
    let expires = "";
    const date = new Date();
    date.setTime(date.getTime() + (3 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
    let cookieData = `${name}=${value}${expires};`;
    document.cookie = cookieData;
    console.log(cookieData);
    console.log("cookie created => ", name, readCookie(name));
}

function readCookie(name) {
    const cookieValue = document.cookie
        .split(';')
        .map(cookie => cookie.trim())
        .find(cookie => cookie.startsWith(name + '='));

    if (cookieValue) {
        return cookieValue.substring(name.length + 1);
    }

    return null; // Return null if the cookie with the given name is not found
}

function saveInLocalStorage(name, value) {
    if(name && value) {
        localStorage.setItem(name, value);
    }
}
