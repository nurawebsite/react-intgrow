let data = [], authHeaders;

const itemsPerPage = 10, maxlength = 20; // Number of items to display per page
let currentPage = 1;

const tableBody = document.getElementById('table-body');
const pageType = document.getElementById('hsn-data-table') ? 'hsn'
    : document.getElementById('duty-data-table') ? 'duty'
        : document.getElementById('fta-data-table') ? 'fta'
            : 'hsn';

const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');
const hostname = "https://dev.intgrow.co";
const getHsnLogUrl = `${hostname}/api/logs/hs_code`;
const getDutyLogUrl = `${hostname}/api/logs/duty`;
const getFtaLogUrl = `${hostname}/api/logs/fta`;
const responseUrl = `${hostname}/api/logs_response_by_id`;

function setHeaders() {
    const tokenData = window.localStorage.getItem("access_token") || "EAALlsF27TkEBAPFq6ow61SOkPt3Gg1LqAlkKtoZCsFPP3q3KkOgmXqiDpDyyeMAwxJbTB3k56bkliVcXvXjoZC0GcIMpIEXDjgDf3UGgT4USdVPu1SbVQMHJbssuvjZA5mLhJemWfnttFXRtfuUv5PiaZAeZAB7ZBWql4JCZBAhE71QalEqi78vUFZA5ILIFfv0vAbXFmAM8TkdaKsvvOqCzcZAlUYqXj4T0ZD";
    const token = `Bearer ${tokenData}`;

    authHeaders = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Origin": window.location.hostname,
        "Authorization": token,
        "x-access-token": tokenData
    }
}

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

function getCountryId(countryId, returnVal = "label") {
    const countryList = window.localStorage.getItem("countries");
    const countryMap = countryList && JSON.parse(countryList);
    var obj = countryMap && countryMap.find(o => o.label == countryId || o.value == countryId);
    return obj && obj[returnVal] || countryId || "-";
}

async function fetchHistoryData(url, page) {
    try {
        const response = await fetch(`${url}/${page}`, { headers: authHeaders }).catch(function (error) {
            console.log("Error in fetching hscodes", error);
        });
        if (!response.ok) {
            const msg = `Error in fetch ${response.status}`;
            throw new Error(msg);
        }
        return response.status != 204 ? await response.json() : [];

    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function getHSMapTable(HSMap, country) {
    let hscodeHTML = "";
    if (HSMap && HSMap.length) {
        hscodeHTML = "<div class='col-sm-6 hstable'>";
        hscodeHTML += `<div class="hstable-body"><div class="hstable-title"> <span>HS Codes of ${getCountryId(country)} </span></div>`;
        hscodeHTML += `<table class="hstable-data"><tr> <th> HS Code </th> <th> Product Description </th> </tr>`
        HSMap.forEach(d => {
            hscodeHTML += `<tr> <td> ${d.value} </td> <td> ${d.label} </td></tr>`;
        });
        hscodeHTML += "</table></div></div>";
    }
    return hscodeHTML;
}

async function fetchLogData(logId) {
    try {
        const response = await fetch(`${responseUrl}/${logId}`, { headers: authHeaders }).catch(function (error) {
            console.log("Error in fetching log history", error);
        });
        if (!response.ok) {
            const msg = `Error in fetch ${response.status}`;
            throw new Error(msg);
        }
        return response.status != 204 ? await response.json() : [];

    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function displayFtaLog(item, point, queryData, logData, line, tableBody) {
    const impHSNMap = logData && logData.import || [];
    const expHSNMap = logData && logData.export || [];
    let entryDetails = "";
    entryDetails += `<div class='row hsn-history-row'>`;
    entryDetails += `<div class="col-sm-12 hsn-history-subtitle"><span>Input Data: </span>`;
    entryDetails += `<div class="col-sm-3">HS Code : ${queryData.hs}</div>`;
    entryDetails += `<div class="col-sm-3">Import Destination : ${queryData.imp}</div>`;
    entryDetails += `<div class="col-sm-3">Export Destination : ${queryData.exp}</div>`;
    entryDetails += `</div>`;
    entryDetails += `<div class="col-sm-12"><span>Response Data: </span>`;

    if (!impHSNMap.length || !expHSNMap.length) {
        entryDetails += "<span>No Data.</div>";
    }
    else {
        entryDetails += `<div class='row hstable-row'>${getHSMapTable(impHSNMap, queryData.imp)}`;
        entryDetails += getHSMapTable(expHSNMap, queryData.exp);
        entryDetails += `</div>`;
    }
    entryDetails += `</div>`;

    line += `<div class="row padding-left-zero hsn-history-row"><div class="col-sm-2 hsn-history-td">${getFormattedDate(item.iso_date)}</div><div class="col-sm-2 hsn-history-td">${queryData.hs}</div><div class="col-sm-2 hsn-history-td">${getCountryId(queryData.imp)}</div><div class="col-sm-2 hsn-history-td">${getCountryId(queryData.exp)}</div><div class="col-sm-2 hsn-history-td">${point}</div>`;
    line += `<div class="col-sm-2 hsn-history-td"><div id="accordion" role="tablist" aria-multiselectable="true"><a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#index${number}" aria-expanded="false" aria-controls="index${number}">`;
    line += `<span class="menu-title">Expand</span></a></div></div>`;
    line += `<div class='panel-collapse collapse col-sm-12' id='index${number}' role="tabpanel" aria-labelledby="heading${number}" aria-expanded="false">`
    line += `<div class='panel-body row padding-left-zero'>`;
    line += entryDetails;
    line += `</div></div></div>`;
    // tableBody.appendChild(row);
    number++;
    tableBody.innerHTML += line;
}

function getDutyMapTable(logData) {
    let dutyHTML = "";
    if (logData) {
        const dutyDetailsDesc = logData && logData.dutyDetails || [];
        let line = "";
        if (dutyDetailsDesc.length > 0) {
            line += `<div class='row duty-block'><div class='col-sm-12 col-md-8 row duty-table'>`;
            line += `<div class='col-sm-12'><div class='duty-details-heading'><h4>Breakdown of Duties and Taxes</h4></div><table class="duty-details"><tr><th>Duty Details</th><th>Duty Rate</th><th>Duty Amount<br>(in ${logData.cyn})</th>`;
            line += "</tr>";

            dutyDetailsDesc.forEach(ele => {
                var getKey = Object.keys(ele).filter(e => e.match(/(_dd)$/))[0];
                var prefix = getKey.split("_dd")[0];
                line += `<tr><td>${ele[`${prefix}_dd`]}`;
                line += ele[`${prefix}_define`] ? `<span class="info"> <i class="icon-info-sign"></i> <span class="extra-info"> ${ele[`${prefix}_define`]} </span></span>` : '';
                line += `</td>`;
                line += `<td>${ele[`${prefix}_d`]}</td>`;
                line += `<td>${ele[`${prefix}_cl`] && Math.floor(ele[`${prefix}_cl`]) || 0}</td>`;
            });
            line += `<tr><td colspan="2">Total payable duties and taxes</td><td> ${Math.floor(logData.total)} </td>`;
            line += "</tr></table></div>";
        }
        line += `<div class='col-sm-12 log-display-group'>`;
        line += `<span class='duty-cost'>Landed Cost: ${logData.total+logData.CIFVALUE}  ${logData.cyn}</span></div>`;
        dutyHTML += line;
    }
    return dutyHTML;
}

function displayDutyLog(item, point, queryData, logData, line, tableBody) {
    let entryDetails = "";
    entryDetails += `<div class='row hsn-history-row'>`;
    entryDetails += `<div class="col-sm-12 hsn-history-subtitle"><span>Input Data: </span>`;
    entryDetails += `<div class="col-sm-3">Import Destination : ${getCountryId(queryData.import_country)}</div>`;
    entryDetails += `<div class="col-sm-3">Export Destination : ${getCountryId(queryData.export_country)}</div>`;
    entryDetails += `<div class="col-sm-3">HS Code : ${queryData.hscode}</div>`;
    entryDetails += `<div class="col-sm-3">Transportation Mode : ${queryData.mode}</div>`;

    entryDetails += `</div>`;
    entryDetails += `<div class="col-sm-12"><span>Response Data: </span>`;

    if (!logData) {
        entryDetails += "<span>No Data.</div>";
    }
    else {
        entryDetails += `<div class='row'>${getDutyMapTable(logData)}</div>`;
    }
    entryDetails += `</div>`;

    line += `<div class="row padding-left-zero hsn-history-row"><div class="col-sm-2 hsn-history-td">${getFormattedDate(item.iso_date)}</div><div class="col-sm-1 hsn-history-td">${getCountryId(queryData.import_country)}</div><div class="col-sm-1 hsn-history-td">${getCountryId(queryData.export_country)}</div><div class="col-sm-2 hsn-history-td">${queryData.hscode}</div><div class="col-sm-2 hsn-history-td">${queryData.CIFVALUE}</div>`;
    line += `<div class="col-sm-2 hsn-history-td">${Math.floor(logData.total)}</div>`;
    line += `<div class="col-sm-1 hsn-history-td">${Math.floor(logData.total + logData.CIFVALUE)}</div>`;
    line += `<div class="col-sm-1 hsn-history-td"><div id="accordion" role="tablist" aria-multiselectable="true"><a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#index${number}" aria-expanded="false" aria-controls="index${number}">`;
    line += `<span class="menu-title">Expand</span></a></div></div>`;
    line += `<div class='panel-collapse collapse col-sm-12' id='index${number}' role="tabpanel" aria-labelledby="heading${number}" aria-expanded="false">`
    line += `<div class='panel-body row padding-left-zero'>`;
    line += entryDetails;
    line += `</div></div></div>`;
    // tableBody.appendChild(row);
    number++;
    tableBody.innerHTML += line;
}

function displayHsnLog(item, point, queryData, logData, line, tableBody) {
    const impHSNMap = logData && logData.import || [];
    const expHSNMap = logData && logData.export || [];
    let entryDetails = "";
    entryDetails += `<div class='row hsn-history-row'>`;
    entryDetails += `<div class="col-sm-12 hsn-history-subtitle"><span>Input Data: </span>`;
    entryDetails += `<div class="col-sm-3">HS Code : ${queryData.hs}</div>`;
    entryDetails += `<div class="col-sm-3">Import Destination : ${queryData.imp}</div>`;
    entryDetails += `<div class="col-sm-3">Export Destination : ${queryData.exp}</div>`;
    entryDetails += `</div>`;
    entryDetails += `<div class="col-sm-12"><span>Response Data: </span>`;

    if (!impHSNMap.length || !expHSNMap.length) {
        entryDetails += "<span>No Data.</div>";
    }
    else {
        entryDetails += `<div class='row hstable-row'>${getHSMapTable(impHSNMap, queryData.imp)}`;
        entryDetails += getHSMapTable(expHSNMap, queryData.exp);
        entryDetails += `</div>`;
    }
    entryDetails += `</div>`;

    line += `<div class="row padding-left-zero hsn-history-row"><div class="col-sm-2 hsn-history-td">${getFormattedDate(item.iso_date)}</div><div class="col-sm-2 hsn-history-td">${queryData.hs}</div><div class="col-sm-2 hsn-history-td">${getCountryId(queryData.imp)}</div><div class="col-sm-2 hsn-history-td">${getCountryId(queryData.exp)}</div><div class="col-sm-2 hsn-history-td">${point}</div>`;
    line += `<div class="col-sm-2 hsn-history-td"><div id="accordion" role="tablist" aria-multiselectable="true"><a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#index${number}" aria-expanded="false" aria-controls="index${number}">`;
    line += `<span class="menu-title">Expand</span></a></div></div>`;
    line += `<div class='panel-collapse collapse col-sm-12' id='index${number}' role="tabpanel" aria-labelledby="heading${number}" aria-expanded="false">`
    line += `<div class='panel-body row padding-left-zero'>`;
    line += entryDetails;
    line += `</div></div></div>`;
    // tableBody.appendChild(row);
    number++;
    tableBody.innerHTML += line;
}

let number = 0;

async function displayData(page) {
    setHeaders();
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let apiURL = '';
    switch (pageType) {
        case 'duty': apiURL = getDutyLogUrl; break;
        case 'fta': apiURL = getFtaLogUrl; break;
        case 'hsn':
        default: apiURL = getHsnLogUrl; break;
    }
    const pageData = await fetchHistoryData(apiURL, page);

    tableBody.innerHTML = '';
    let line = "";
    pageData && pageData.forEach(item => {
        // const responseData = item && item.response && JSON.parse(item.response);
        const point = item && item.point || 0;
        const queryData = item && item.body && JSON.parse(item.body);
        fetchLogData(item.id).then((logData) => {

            switch (pageType) {
                case 'duty': displayDutyLog(item, point, queryData, logData, line, tableBody); break;
                case 'fta': displayFtaLog(item, point, queryData, logData, line, tableBody); break;
                case 'hsn':
                default: displayHsnLog(item, point, queryData, logData, line, tableBody); break;
            }

        });

    });

    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(maxlength / itemsPerPage)}`;
    if (!pageData || !pageData.length) {
        tableBody.innerHTML += "<div class='col-sm-12 hsn-history-td'>No Data to display</div>";
        pageInfo.textContent = `Page 1 of 1`;
    }
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayData(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(maxlength / itemsPerPage)) {
        currentPage++;
        displayData(currentPage);
    }
});

// Initial data display
displayData(currentPage);
