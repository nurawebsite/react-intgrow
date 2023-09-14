// Sample data (you can replace this with your actual data)
let data = [], authHeaders;

const itemsPerPage = 10, maxlength = 20; // Number of items to display per page
let currentPage = 1;

const tableBody = document.getElementById('table-body');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');
const hostname = "https://dev.intgrow.co";
const getHsnUrl = `${hostname}/api/logs/hs_code`;

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

async function fetchHsnData(page) {
    try {
        const response = await fetch(`${getHsnUrl}/${page}`, { headers: authHeaders }).catch(function (error) {
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
        hscodeHTML += `<div class="hstable-body"><div class="hstable-title"> <span>HS Codes of ${country} </span></div>`;
        hscodeHTML += `<table class="hstable-data"><tr> <th> HS Code </th> <th> Product Description </th> </tr>`
        HSMap.forEach(d => {
            hscodeHTML += `<tr> <td> ${d.value} </td> <td> ${d.label} </td></tr>`;
        });
        hscodeHTML += "</table></div></div>";
    }
    return hscodeHTML;
}

async function displayData(page) {
    setHeaders();
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = await fetchHsnData(page);
    let number = 0;
    tableBody.innerHTML = '';
    let line = "";
    pageData && pageData.forEach(item => {
        const responseData = item && item.response && JSON.parse(item.response);
        const point = item && item.point || 0;
        const queryData = item && item.query && JSON.parse(item.query);
        const impHSNMap = responseData && responseData.import || [];
        const expHSNMap = responseData && responseData.export || [];

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

        line += `<div class="row padding-left-zero hsn-history-row"><div class="col-sm-2 hsn-history-td">${getFormattedDate(item.iso_date)}</div><div class="col-sm-2 hsn-history-td">${queryData.hs}</div><div class="col-sm-2 hsn-history-td">${queryData.imp}</div><div class="col-sm-2 hsn-history-td">${queryData.exp}</div><div class="col-sm-2 hsn-history-td">${point}</div>`;
        line += `<div class="col-sm-2 hsn-history-td"><div id="accordion" role="tablist" aria-multiselectable="true"><a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#index${number}" aria-expanded="false" aria-controls="index${number}">`;
        line += `<span class="menu-title">Expand</span></a></div></div>`;
        line += `<div class='panel-collapse collapse col-sm-12' id='index${number}' role="tabpanel" aria-labelledby="heading${number}" aria-expanded="false">`
        line += `<div class='panel-body row padding-left-zero'>`;
        line += entryDetails;
        line += `</div></div></div>`;
        // tableBody.appendChild(row);
        number++;
    });
    tableBody.innerHTML += line;

    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(maxlength / itemsPerPage)}`;
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
