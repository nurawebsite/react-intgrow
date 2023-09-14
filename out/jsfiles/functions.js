let urlInputResponse, currencyResponse, countryListResponse, cyn, impCurrency, cynRate, params, authHeaders;
let hsDetailsResponse, impcountryHSResponse, expcountryHSResponse, rulesResponse, footnoteResponse;
let getDutyResponse = saveDutyResponse = {}, inputData = other_params = {}, showSaveDutyDetails = "";
let importCountrySummary = exportCountrySummary = transportModeSummary = hscodeSummary = hscodeDescSummary = currencyDescSummary = null;
let cifValSummary = totalDutySummary = totalCostSummary = null, hsnVal, impCountryVal, expCountryVal;
// const hostname = "http://localhost:5555";
const hostname = "https://dev.intgrow.co";
const getDutyUrl = `${hostname}/api/dutyCalculator/getDuty`;
const saveDutyUrl = `${hostname}/api/dutyCalculator/getFTA`;
const countryUrl = `${hostname}/api/country/search`;
const incoInfoMap = {
    EXW: "EXW (Ex Works): EXW Price = Cost of Goods at Factory Premises",
    CIF: "CIF (Cost, Insurance, Freight): CIF Price = Cost of Goods + Local Transport and Clearance Cost + Cost of Loading Goods onto the Vessel + Freight Cost till Destination + Insurance",
    FOB: "FOB (Free On Board): FOB Price = Cost of Goods + Local Transport and Clearance Cost + Cost of Loading Goods onto the Vessel"
}

const deductionMessage = {
    hsnMsg: "If you proceed 2 points will be deducted from your HS Code finder credits. Do you want to proceed?",
    dutyMsg: "If you proceed 1 point will be deducted from your Duty Calulator credits. Do you want to proceed?",
    ftaMsg: "If you proceed 1 point towards each FTA rule will be deducted from your Duty Calulator credits. Do you want to proceed?"
}


const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function formattedDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthName = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    return `${day} ${monthName}, ${year}`;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

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

function loadData(cynLoad = true) {
    const impCountry = document.getElementById("import_country").value;
    const expCountryHtml = document.getElementById("export_country");
    let expList = "<option value=''>Select country</option>";
    countryListResponse && countryListResponse.length && countryListResponse.forEach(item => {
        if (item.label != impCountry && item.is_export) {
            expList += `<option value="${item.label}">${item.label}</option>`;
        }
    });
    expCountryHtml.innerHTML = expList;
    cynLoad && loadCurrency();
}

function displayCountryList(countryListResponse) {
    const impCountryHtml = document.getElementById("import_country");
    var impList = "";
    impList += "<option value=''>Select country</option>";
    countryListResponse && countryListResponse.length && countryListResponse.forEach(item => {
        if (item.is_import) {
            impList += `<option value="${item.label}">${item.label} </option>`;
        }
    });
    impCountryHtml.innerHTML = impList;
    setTimeout(function () {
        // When the asynchronous operation is complete, trigger DOMContentLoaded
        impCountryHtml.dispatchEvent(new Event('DOMContentLoaded'));
    }, 2000);
}

function loadCountryList(callback) {
    fetch(countryUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("Could not reach the country ist API: " + response.statusText);
            }
        }).then(function (data) {
            countryListResponse = data;
            countryListResponse && displayCountryList(countryListResponse);
            callback && callback();
        }).catch(function (error) {
            console.log("Error in countryList fetch ", error);
        });
}

function displayUserInputs(userInputFields) {
    const userHtml = document.getElementById("user_input");
    let userFields = "";
    userInputFields && userInputFields.length && userInputFields.forEach(attr => {
        let isRequired = attr.is_required ? "required" : "";
        let attrVal = attr.default || "";
        let type = attr.type ? attr.type : "none";
        userFields += "<div class='form-group col-sm-4'>";
        userFields += `<label for="${attr.field}" class="col col-form-label"> ${attr.label} `;

        userFields += `</label><div class="btn-group col">`;
        switch (type) {
            case "none":
            default:
                let inputType = attr.type == "number" ? attr.type : "text";
                userFields += `<input type="${inputType}" class="form-control form-control-lg" id="${attr.field}" placeholder="Enter value" ${isRequired} value="${attrVal}"> `;
                break;
            case "droplist":
                let list = attr.values;
                userFields += `<select class="form-control form-control-lg" id="${attr.field}" required>`;
                userFields += `<option value="">Select ${attr.label}</option>`;
                list && list.length && list.forEach(v => {
                    userFields += `<option value="${v.value}"> ${v.label} </option>`;
                });
                userFields += "</select>";
                break;
        }
        if (attr.pre_fix) {
            userFields += `<span class="userinput-align">(in ${attr.pre_fix})</span>`;
        }
        userFields += "</div></div>";
    });

    userHtml.innerHTML = userFields;
}

function getCountryId(countryName, returnVal = "value") {
    var obj = countryListResponse && countryListResponse.find(o => o.label == countryName || o.value == countryName);
    return obj && obj[returnVal];
}

function getUserInput() {
    let hscodeVal = document.getElementById("hscode").value;
    if (hscodeVal.length > 6) {
        const impCountry = document.getElementById("import_country").value;
        const expCountry = document.getElementById("export_country").value;
        const impCode = getCountryId(impCountry);
        const userInputUrl = `${hostname}/api/getUserInput?hs=${hscodeVal}&imp=${impCode}`;

        fetch(userInputUrl)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Could not reach the userInput API: " + response.statusText);
                }
            }).then(function (data) {
                urlInputResponse = data;
                urlInputResponse && displayUserInputs(urlInputResponse);

            }).catch(function (error) {
                console.log("Error in urlInput fetch", error);
            });
    }

}

function displayCurrency() {
    const currencyHTML = document.getElementById("cyn");
    let cynData = "";
    let cynStored = localStorage.getItem('cyn');
    currencyResponse.forEach(c => {
        let isSelect = c.country == cynStored ? 'selected' : '';
        cynData += `<option id=${c.currency} value='${c.country}' ${isSelect}>${c.country}</option>`;
    });
    currencyHTML.innerHTML += cynData;
}

function loadCurrency() {
    try {
        const impCountry = getCountryId(document.getElementById("import_country").value);
        const currencyAPIUrl = `${hostname}/api/country/currency?imp=${impCountry}`;

        fetch(currencyAPIUrl)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Could not reach the currency API: " + response.statusText);
                }
            }).then(function (data) {
                currencyResponse = data;
                currencyResponse && displayCurrency();
            }).catch(function (error) {
                console.log("Error occurred ", error);
            });

    }
    catch (e) {
        console.log("Error in Currency API => ", e);
    }
}

function currencyConvert(val) {
    let total = 0;
    currencyResponse.forEach(c => {
        if (c.country === cyn || c.currency === cyn) {
            total = val / c.value;
            cynRate = c.value;
        }
    });
    return total && Math.floor(total) || 0;
}

function getRTACountry(countryList) {
    if (countryList) {
        const countryArray = countryList.replace(/\s+/g, "").split(",");
        let retVal = [];
        countryArray.forEach(c => {
            retVal.push(getCountryId(c, "label"));
        });
        return retVal.join(", ");
    }
    return "";
}

function displayOriginRules(ftaIds) {

    let string = "";
    if (rulesResponse && rulesResponse.length) {
        rulesResponse.forEach(r => {
            let rule = ftaIds.find(f => f == r.rule);
            let rulesHTML = document.getElementById(`rules${rule}`);
            if (r && r.criteria && r.criteria.toLowerCase() != 'not applicable' && rule) {
                const countries = getRTACountry(r.countries);
                string = "<div class='col-sm-12 col-md-12 col-lg-12 padding-left-zero'>";
                string += `<table class='roo-table-data'>`;
                string += `<tr><th colspan='2'>Rules Of Origin</th></tr>`;
                string += `<tr><td><span class="rules-label"> RoO Criteria </span></td><td> ${r.criteria}</td></tr>`;
                string += r.doc != '#' ? `<tr><td><span class="rules-label"> Download </span></td><td class="overflow-text"><a href='${r.doc}'><img class='thumbs-up-icon' src='assets/pdf-icon.png' alt='pdf link' /></a></td></tr>` : " ";
                string += countries ? `<tr><td><span class="rules-label"> RoO Countries </span></td><td> ${countries}</td></tr>` : "";
                string += "</table></div>";
                string += r.note ? `<div class='rules-note'> Note: ${r.note} </div>` : " ";
                rulesHTML.innerHTML = string;
            }
        });
    }
}

function getRulesOfOrigin() {
    try {
        let importCountry = inputData.import_country,
            exportCountry = inputData.export_country,
            hs = inputData.hscode;
        const rulesOfOriginUrl = `${hostname}/api/country/rules?hs=${hs}&imp=${importCountry}&exp=${exportCountry}`;

        fetch(rulesOfOriginUrl)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Could not reach the origin rules API: " + response.statusText);
                }
            }).then(function (data) {
                rulesResponse = data;
                // rulesResponse && displayOriginRules();
            }).catch(function (error) {
                console.log("Error occurred in origin rules api", error);
            });

    }
    catch (e) {
        console.log("Error in origin rules API => ", e);
    }
}

function updateFieldVal(eleID, value) {
    let ele = document.getElementById(eleID);
    ele.value = value;
}

function getFootnotes() {

    let importCountry = inputData.import_country,
        exportCountry = inputData.export_country,
        hs = inputData.hscode;
    const footnoteUrl = `${hostname}/api/footnote?hs=${hs}&imp=${importCountry}&exp=${exportCountry}`;

    fetch(footnoteUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Could not reach the footnote API: " + response.statusText);
            }
        }).then(function (data) {
            footnoteResponse = data;
            footnoteResponse && loadFootnote();
        }).catch(function (error) {
            console.log("Error occurred in footnote api", error);
        });
}

function loadFootnote() {
    let footnoteEle = document.getElementById('footnoteBlock'),
        footnoteData = "";
    if (footnoteResponse) {
        let index = 0;
        footnoteData += `<div class='row footnote-data-block'>`;
        footnoteData += `<div class='row'>`;
        footnoteResponse.forEach(f => {
            if (index < 4) {
                footnoteData += `<div class='col-md-3 col-sm-12 footnote-btn-heading'><button class="btn btn-outline-primary btn-icon-text footnote-btn" type="button" id='btnid${index}' onclick="expandFootnote('btnid${index}', '${f.value}')">${f.label}</button></div>`;
                index++;
            }
        });
        footnoteData += `</div><div id='footnotes' class='col-sm-12'>  </div></div>`;
        footnoteEle.innerHTML = footnoteData;

        expandFootnote("btnid0", footnoteResponse[0].value);
    }
}

function removeLocalStorage() {
    window.localStorage.removeItem("imp");
    window.localStorage.removeItem("exp");
    window.localStorage.removeItem("cyn");
    window.localStorage.removeItem("val");
}

function displayGetDuty() {
    cyn = cyn || getDutyResponse.cyn || "INR";
    let getdutyTotal = Math.floor(getDutyResponse.total + getDutyResponse.CIFVALUE);
    let cynConvertDutyTotal = currencyConvert(getdutyTotal);
    const impCountryLabel = getCountryId(inputData.import_country, "label");
    const expCountryLabel = getCountryId(inputData.export_country, "label");
    const getDutyFormEle = document.getElementById("getdutyForm");
    getDutyFormEle.style.visibility = "hidden";
    getDutyFormEle.style.display = "none";

    currencyResponse && currencyResponse.forEach(c => {
        if (c.unit == c.value) {
            impCurrency = c.currency;
        }
    });

    let formDetails = "";
    loadData(false);

    let expLabel = document.getElementById('export_list');
    const currencyList = document.getElementById('cyn');

    formDetails += `<div class='row'><div class='col-sm-9 row'>`;
    formDetails += `<div class='form-group col-sm-12 col-md-4'><span class='col-hs col-form-label'>Exporting Country</span><input type='text' class='form-control form-control-lg' value='${expCountryLabel}' disabled> </div>`;
    formDetails += `<div class='form-group col-sm-12 col-md-4'><span class="col-hs col-form-label">Currency</span><input type='text' class='form-control form-control-lg' value='${currencyList.value}' disabled></div>`;
    formDetails += `<div class='form-group col-sm-12 col-md-4'><span class="col-hs col-form-label">Value of Product</span><input type='text' class='form-control form-control-lg' value='${inputData.CIF}' id='productValue' onchange='updateFieldVal("productValue",this.value)'> </div></div>`;
    formDetails += `<div class='col-md-3 row align-center padding-left-zero position-absolute'>`;
    formDetails += `<div class='col-md-6 padding-left-zero'><button class='btn btn-outline-primary btn-icon-text btn-result-update' id='callGetDuty' type='button' onclick='getDuty(event)'>Get Result</button></div>`;
    formDetails += `<div class='col-md-6 padding-left-zero'><button class='btn btn-outline-primary btn-icon-text btn-result-update' id='showGetDutyForm' type='button' onclick='gotoForm("getdutyForm", "getdutyDetails")' title='Click to modify Shipping information.'>Modify</button></div></div>`;
    formDetails += `<span class='col-12 result-top-info'>Please click on the "Modify" button to change Exporting Country, Currency, and Value of Products for faster results.</span></div>`;

    document.getElementById('export_country').value = expCountryLabel;
    const showGetDutyDetails = document.getElementById("getdutyDetails");

    showGetDutyDetails.innerHTML = "";
    showGetDutyDetails.innerHTML += addPopup();
    showGetDutyDetails.innerHTML += formDetails;

    let totalDuty = 0, footnote_data = '';
    const dutyDetailsDesc = getDutyResponse && getDutyResponse.dutyDetails || [];
    let line = "";
    if (dutyDetailsDesc.length > 0) {
        line += `<div class='row display-group duty-block'><div class='col-sm-12 col-md-8 row duty-table'>`;
        line += `<div class='col-sm-12'><div class='duty-details-heading'><h3>Breakdown of Duties and Taxes</h3></div><table class="duty-details"><tr><th>Duty Details</th><th>Duty Rate</th><th>Duty Amount<br>(in ${impCurrency})</th>`;
        line += impCurrency != cyn ? `<th>Duty Amount<br>(in ${cyn})</th>` : "";
        line += "</tr>";

        dutyDetailsDesc.forEach(ele => {
            var getKey = Object.keys(ele).filter(e => e.match(/(_dd)$/))[0];
            var prefix = getKey.split("_dd")[0];
            footnote_data = !footnote_data && prefix.includes('mfn') ? getDutyResponse[`${prefix}_f`] : footnote_data;
            line += `<tr><td>${ele[`${prefix}_dd`]}`;
            line += ele[`${prefix}_define`] ? `<span class="info"> <i class="icon-info-sign"></i> <span class="extra-info"> ${ele[`${prefix}_define`]} </span></span>` : '';
            line += `</td>`;
            line += `<td>${ele[`${prefix}_d`]}</td>`;
            line += `<td>${ele[`${prefix}_cl`] && Math.floor(ele[`${prefix}_cl`]) || 0}</td>`;
            line += impCurrency != cyn ? `<td>${ele[`${prefix}_cl`] && currencyConvert(ele[`${prefix}_cl`] || 0)}</td>` : "";

        });
        totalDuty = currencyConvert(getDutyResponse.total);
        line += `<tr><td colspan="2">Total payable duties and taxes</td><td> ${Math.floor(getDutyResponse.total)} </td>`;
        line += impCurrency != cyn ? `<td> ${totalDuty} </td>` : "";
        line += "</tr></table></div>";
    }

    let string = `<div class='col-sm-12 display-group'>`;
    string += `<span class='duty-cost'>Landed Cost: ${getdutyTotal}  ${impCurrency}</span>`;
    string += impCurrency != cyn ? ` <span class='duty-costchange'>( ${cynConvertDutyTotal} ${cyn} )</span>` : "";
    string += `<div class='col-sm-12 tnc-note'>Landed Cost = Assessable value + Total Duty</div>`;
    string += `<div class='col-sm-12 tnc-note'>*Excluding destination freight, destination charges and intermediaries margin (importer, wholesaler, etc.)</div>`;
    string += `<div class='col-sm-12 tnc-note'>This total landed cost calculation is applicable as of ${formattedDate()}. Foreign exchange rates are revised in accordance with notifications from the importing country.</div>`;
    string += footnote_data ? `<div class='col-sm-12 col-md-12 col-lg-12 fta-footnote'><span>Note: </span><span class='fta-footnote-data'>${footnote_data}</span></div>` : ``;
    string += `</div></div>`;

    line += string;

    line += `<div class='col-sm-12 col-md-4 row'>`;
    line += `<div class='row getduty-summary'>`;
    line += `<div class='col-sm-12 summary-title'> YOUR SHIPMENT SUMMARY</div>`;
    line += `<div class='col-sm-6 summary-label'> Import Country: </div> <div class='col-sm-6 summary-value'> ${impCountryLabel} </div>`;
    line += `<div class='col-sm-6 summary-label'> Export Country: </div> <div class='col-sm-6 summary-value'> ${expCountryLabel} </div>`;
    line += `<div class='col-sm-6 summary-label'> Mode of Transport: </div> <div class='col-sm-6 summary-value'> ${inputData.mode} </div>`;
    line += `<div class='col-sm-6 summary-label'> Import HSN: </div> <div class='col-sm-6 summary-value'> ${getDutyResponse.hscode} </div>`;
    line += `<div class='col-sm-6 summary-label'> Currency: </div> <div class='col-sm-6 summary-value'> ${cyn} </div>`;
    line += `<div class='col-sm-6 summary-label'> Currency rate for 1 ${cyn}: </div> <div class='col-sm-6 summary-value'> ${cynRate} ${impCurrency}</div>`;
    line += `<div class='col-sm-6 summary-label'> CIF Value: </div> <div class='col-sm-6 summary-value'> ${inputData.CIF} ${cyn}</div>`;

    let insuranceCharge = params.exwInsuranceCharges || params.cifInsuranceCharges || params.fobInsuranceCharges || 0;
    let internationalFreight = params.exwIntFreight || params.cifIntFreight || params.fobIntFreight || 0;
    const incoInfo = `<span class="inco-info"> <i class="icon-info-sign"></i> <span class="inco-extra-info"> ${incoInfoMap[params.inco_term]} </span></span>`;
    line += `<div class='col-sm-6 summary-label'> Inco Term ${incoInfo} : </div> <div class='col-sm-6 summary-value'> ${params.inco_term}</div>`;
    line += params.exwInsuranceCharges ? `<div class='col-sm-6 summary-label'> Origin Charges: </div> <div class='col-sm-6 summary-value'> ${params.exwInsuranceCharges}</div>` : '';
    line += params.exwIntFreight ? `<div class='col-sm-6 summary-label'> Origin Freight: </div> <div class='col-sm-6 summary-value'> ${params.exwIntFreight}</div>` : '';
    line += `<div class='col-sm-6 summary-label'> International Freight: </div> <div class='col-sm-6 summary-value'> ${internationalFreight}</div>`;
    line += `<div class='col-sm-6 summary-label'> Insurance Charges: </div> <div class='col-sm-6 summary-value'> ${insuranceCharge}</div>`;

    line += `<div class='col-sm-6 summary-label'> Total payable duties and taxes: </div> <div class='col-sm-6 summary-value'> ${totalDuty} ${cyn}</div>`;
    line += `<div class='col-sm-6 summary-label'> Total Landed Cost: </div> <div class='col-sm-6 summary-value'> ${getdutyTotal}  ${cyn}</div>`;
    line += `<div class='col-sm-6 summary-label'> HSN Description: </div> <div class='col-sm-12'> ${getDutyResponse.des} </div>`;
    line += `</div>`;    //summary block closed.

    line += `<div class='row duty-saver-btn-block'>`;
    line += `<div class='row duty-saver-block'> <div>"Want to save more with this transaction?</div> <div> Tap the button to unlock Duty Saver Pro now!" </div> </div>`;
    line += `<button class="row btn btn-outline-primary btn-icon-text duty-saver-btn" id="callSaveDuty" type="button" onclick="goToPageWithPointDeduct('dutysaver','points-popup-box-save')">Duty Saver Pro</button>`;
    line += `</div>`; //duty saver button close

    line += `</div> `;

    line += `<div class='row' id='footnoteBlock'> </div>`;

    showGetDutyDetails.innerHTML += line;
    showGetDutyDetails.style.visibility = "visible";
    showGetDutyDetails.style.display = 'inline-block';

}

function expandFootnote(btnEle, data) {
    let ele = document.getElementById('footnotes');
    let btnHTMLEle = document.getElementById(btnEle);
    for (index = 0; index < 4; index++) {
        let btn = document.getElementById(`btnid${index}`);
        btn && btn.classList.value.match(/(active)/g) && btn.classList.remove('active');
    }
    btnHTMLEle.classList.add('active');
    ele.innerHTML = `<div class='footnote-block'> <span>${data}</span></div> `;
}

function formRequest() {

    setHeaders();

    //summary block
    importCountrySummary = document.getElementById('import_name_summary');
    exportCountrySummary = document.getElementById('export_name_summary');
    transportModeSummary = document.getElementById('transport_mode_summary');
    hscodeSummary = document.getElementById('hscode_val_summary');
    hscodeDescSummary = document.getElementById('hscode_desc_summary');
    currencyDescSummary = document.getElementById('currecny_summary');
    cifValSummary = document.getElementById('cif_val_summary');
    totalDutySummary = document.getElementById('total_duty_summary');
    totalCostSummary = document.getElementById('total_cost_summary');

    params = {};
    var y = document.getElementById("myForm");
    for (var i = 0; i < y.elements.length; i++) {
        var fieldName = y.elements[i].id;
        var fieldValue = y.elements[i].value;

        if (fieldName != "formsubmit") { params[fieldName] = getCountryId(fieldValue) || fieldValue; }
    }
    console.log("---params --- ", params);

    var exwValue = cifValue = fobValue = 0;
    var originCharges = parseFloat(params.originCharges) || 0,
        exwInsuranceCharges = parseFloat(params.exwInsuranceCharges) || 0,
        cifInsuranceCharges = parseFloat(params.cifInsuranceCharges) || 0,
        fobInsuranceCharges = parseFloat(params.fobInsuranceCharges) || 0,

        exwIntFreight = parseFloat(params.exwIntFreight) || 0,
        cifIntFreight = parseFloat(params.cifIntFreight) || 0,
        fobIntFreight = parseFloat(params.fobIntFreight) || 0,


        originFreight = parseFloat(params.originFreight) || 0,
        productVal = parseFloat(params.productValue) || 0;


    switch (params['inco_term']) {
        case 'EXW':
            exwValue = productVal;
            fobValue = exwValue + originCharges + originFreight;
            cifValue = fobValue + exwIntFreight + exwInsuranceCharges;
            break;
        case 'CIF':
            cifValue = productVal;
            fobValue = cifValue - (cifIntFreight + cifInsuranceCharges);
            exwValue = cifValue - (originCharges + originFreight + cifIntFreight + cifInsuranceCharges);
            break;
        case 'FOB':
            fobValue = productVal;
            cifValue = fobValue + (fobIntFreight + fobInsuranceCharges);
            exwValue = fobValue - (fobIntFreight + fobInsuranceCharges);
    }

    cynDetail = currencyResponse && currencyResponse.find(c => c.country == params.cyn)
    cyn = cynDetail.currency || params.cyn;
    params["CIFVALUE"] = params["CIF"] = cifValue * cynDetail.value;
    params["FOBVALUE"] = fobValue * cynDetail.value;
    otherData = {};

    urlInputResponse && urlInputResponse.forEach(val => {
        otherData[val.field] = val.type == "number" ? parseFloat(params[val.field]) : params[val.field];
    });

    inputData = {
        hscode: params.hscode,
        import_country: params.import_country,
        export_country: params.export_country,
        CIFVALUE: params["CIFVALUE"],
        CIF: cifValue,
        FOBVALUE: params["FOBVALUE"],
        mode: params.mode,
        ...otherData
    };

    other_params = {
        headers: authHeaders,
        body: JSON.stringify(inputData),
        method: "POST",
    };

    removeLocalStorage();
}
function isElementVisible(element) {
    const styles = window.getComputedStyle(element);
    return styles.display !== 'none' && styles.visibility !== 'hidden';
}

function validateForm() {
    const form = document.getElementById("myForm");
    const errorEle = document.getElementById('errorMsg');
    const requiredFields = form.querySelectorAll("[required]");
    requiredFields.forEach(field => {
        if (field.value.trim() == "") {
            field.classList.add("required-fields");
        } else {
            field.classList.remove("required-fields");
        }
    });

    const invalidFields = form.querySelectorAll(".required-fields");
    const visibleFormEle = Array.from(invalidFields).filter(isElementVisible);
    if (invalidFields.length > 0 && visibleFormEle.length > 0) {
        errorEle.innerHTML = "**Please enter all the details";
        return false;
    }

    // let importCountry = document.getElementById("import_country").value,
    //     exportCountry = document.getElementById("export_country").value,
    //     hscode = document.getElementById("hscode").value,
    //     currency = document.getElementById('cyn').value;

    // if (!(getCountryId(importCountry) && getCountryId(exportCountry) && hscode.match(/^[0-9]+[a-zA-Z]*/g))) {
    //     errorEle.innerHTML = "**Please enter all the details";
    //     return false;
    // }
    errorEle.innerHTML = "";
    return true;
}

async function getDuty(event) {
    event.preventDefault();

    

        formRequest();

        fetch(getDutyUrl, other_params)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    const responseData = response.json();
                    document.getElementById("errorMsg").innerHTML = `<div class="hsn-error">${responseData.message}</div>`;
                    throw new Error(response.message || response.statusText);
                }
            }).then(function (data) {
                getDutyResponse = data;
                getFootnotes();
                getDutyResponse && displayGetDuty();
            }).catch(function (error) {
                console.log('Error in getDuty ', error);
                document.getElementById("errorMsg").innerHTML = error;
            });
    
    return true;
}

function integerToCurrency(value, cynVal) {
    return value.toLocaleString('en-US', { style: 'currency', currency: cynVal });
}

function addPopup() {
    return `<div id="points-popup-box-save" class="modal">
        <div class="content">
            <span class="box-close" onclick="closeModal('points-popup-box-save')">
                ×
            </span>
            <div id="pointsdeduct" class="points-popup">
                <div class="points-popup-text" id="deductMsg">If you proceed 1 point towards each FTA rule will be deducted from your Duty Calulator credits. Do you want to proceed?</div>
                <button type="button" id="popup-confirm-save" class="btn btn-outline-primary btn-icon-text btn-center-align">
                    <i class="mdi mdi-file-check btn-icon-prepend" onclick="getSavedDuty()"></i>
                    Yes
                </button>
            </div>
        </div>
    </div>`;
}

function displaySaveDuty() {
    showSaveDutyDetails = document.getElementById("getdutyDetails");
    saveDutyForm = document.getElementById("getdutyForm");
    saveDutyForm.style.visibility = "hidden";
    saveDutyForm.style.display = "none";

    showSaveDutyDetails.innerHTML = " ";
    // showPointsDeductScreen.innerHTML += addPopup();
    let entry = "", savedDutyDetails = [], ftaRule = "", ftaId = [], ftaLabel = "";
    const getDutyTotal = getDutyResponse && Math.floor(getDutyResponse.CIFVALUE + getDutyResponse.total);
    let importCountry = inputData.import_country,
        exportCountry = inputData.export_country;
    cyn = cyn || getDutyResponse.cyn || "INR";

    currencyResponse && currencyResponse.forEach(c => {
        if (c.unit == c.value) {
            impCurrency = c.currency;
        }
    });

    const impCountryLabel = getCountryId(inputData.import_country, "label");
    const expCountryLabel = getCountryId(inputData.export_country, "label");

    let formDetails = "", dutyData = "", dutyData1 = "";
    let expLabel = document.getElementById('export_country');
    const exportCountryList = document.getElementById('export_countryList');
    const currencyList = document.getElementById('cyn');

    formDetails += `<div class='row' > <div class='col-sm-9 row'>`;
    // formDetails += `<div class='col-sm-4 form-group'><label for='export_country' class='col col-form-label'>Exporting</label><select class='form-control form-control-lg' id='export_country' value='${expLabel.value}' onchange='updateFieldVal("export_country",this.value)'>${expLabel.innerHTML}</select></div>`;
    formDetails += `<div class='form-group col-sm-12 col-md-4'><span class='col-hs col-form-label'>Exporting Country</span><input type='text' class='form-control form-control-lg' value='${expCountryLabel}' disabled> </div>`;
    formDetails += `<div class='form-group col-sm-12 col-md-4'><span class="col col-form-label">Currency</span><input type='text' class='form-control form-control-lg' value='${currencyList.value}' disabled></div>`;
    formDetails += `<div class='form-group col-sm-12 col-md-4'><span class="col-hs col-form-label">Value of Product</span><input type='text' class='form-control form-control-lg' value='${inputData.CIF}' id='productValue' onchange='updateFieldVal("productValue",this.value)'> </div> </div>`;
    formDetails += `<div class='col-sm-3 row align-center padding-left-zero position-absolute' > `;
    formDetails += `<div class='col-sm-6 padding-left-zero' > <button class='btn btn-outline-primary btn-icon-text btn-result-update' id='callGetDuty' type='button' onclick='getSavedDuty()'>Get Result</button></div> `;
    formDetails += `<div class='col-sm-6 padding-left-zero' > <button class='btn btn-outline-primary btn-icon-text btn-result-update' id='showGetDutyForm' type='button' onclick='gotoForm("getdutyForm", "getdutyDetails")' title='Click to modify Shipping information.'>Modify</button></div></div></div> `;

    // document.querySelector('#export_country').value = expLabel.value;
    // document.getElementById('cyn').value = cyn;
    document.getElementById('export_country').value = expCountryLabel;
    showSaveDutyDetails.innerHTML = "";
    showSaveDutyDetails.innerHTML += formDetails;
    let index = 0, nosaveData = [];
    saveDutyResponse && saveDutyResponse.length && saveDutyResponse.forEach(duty => {
        var dutyDetailsDesc = duty && duty[0] && duty[0].dutyDetails || [];
        var total = Math.floor(duty[0].total + duty[0].CIFVALUE);
        let cynConvertTotal = currencyConvert(total);
        let savedDuty = Math.floor(getDutyTotal - total);
        let savedDutyPercent = Math.floor(savedDuty * 100 / getDutyTotal);
        let footnote_data = "";
        if (savedDuty > 0) {
            if (dutyDetailsDesc.length > 0) {

                entry = "", dutyCodes = [];
                dutyDetailsDesc.forEach(ele => {
                    var getKey = Object.keys(ele).filter(e => e.match(/(_dd)$/))[0].match(/(^((?!mfn).)*$)/);
                    getKey = getKey && getKey[0];
                    if (getKey) {
                        var prefix = getKey.split("_dd")[0];
                        var _dd = ele[`${prefix}_dd`],
                            _d = ele[`${prefix}_d`] || 0,
                            _cl = ele[`${prefix}_cl`] || 0,
                            _define = ele[`${prefix}_define`] || '';
                        if (!ftaRule) {
                            ftaId.push(prefix.split(`${prefix.split("_")[0]}_`)[1]);
                            ftaLabel = prefix.split(`${prefix.split("_")[0]}_`)[1];
                            footnote_data = duty[0][`${prefix}_f`];
                            ftaRule = _dd;
                        }
                        entry += `<tr> <td>${_dd}`;
                        entry += _define ? `<span class="info"> <i class="icon-info-sign"></i> <span class="extra-info"> ${_define} </span></span>` : '';
                        entry += `</td>`;
                        entry += `<td> ${_d}</td> `;
                        entry += `<td> ${Math.floor(_cl)}</td> `;
                        entry += impCurrency != cyn ? `<td> ${currencyConvert(_cl)}</td> ` : "";
                        dutyCodes.push(ele[getKey]);
                    }
                });
                let key = Object.keys(duty[0].dutyDetails[1]).filter(o => o.includes('_dd'));
                savedDutyDetails.push({
                    total: total,
                    cyn: cyn,
                    code: duty[0].dutyDetails[1][key]
                });

                let savedConvertPrice = savedDuty ? currencyConvert(savedDuty) : 0;
                let categories = `Save ${integerToCurrency(savedDuty, impCurrency)} (${integerToCurrency(savedConvertPrice, cyn)} ) Landing cost`;

                var line = `<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true" > <div class='row display-group duty-block panel panel-default'>`;
                line += `<div class="col-sm-12 save-duty-heading panel-heading" role="tab" id="heading${index}">`;
                line += `<a class="save-duty-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#index${index}" aria-expanded="false" aria-controls="index${index}">`;
                line += `<span class="menu-title">${categories}</span></a></div>`;
                line += `<div class='panel-collapse collapse' id='index${index}' role="tabpanel" aria-labelledby="heading${index}" aria-expanded="false" > <div class='panel-body row'>`;
                line += `<div class='col-sm-12 col-md-9 col-lg-9'>`;
                line += `<div class='col-sm-12'>`;
                line += `<div class='duty-details-heading'><h3>Breakdown of Duties and Taxes</h3></div>`;
                line += `<table class='duty-details'><tr><th>Duty Details</th><th>Duty Rate</th><th>Duty Amount<br>(in ${impCurrency})</th>`;
                line += impCurrency != cyn ? `<th>Duty Amount<br>(in ${cyn})</th>` : "";
                line += "</tr>";

                let dutyTotal = duty[0].total ? Math.floor(duty[0].total) : 0;
                let totalPrecision = impCurrency != cyn && currencyConvert(dutyTotal);
                let htmlText = line + entry + `<tr><td colspan="2">Total payable duties and taxes</td><td> ${dutyTotal} </td>`;
                htmlText += impCurrency != cyn ? `<td> ${totalPrecision} </td>` : "";
                dutyData += `${htmlText} </tr></table></div></div>`;
            }
            let savedAmt = `<img class="thumbs-up-icon" src="assets/thumbsup.png" alt="success">Congratulation you have saved ${integerToCurrency(savedDuty, impCurrency)} in above transaction if imported under ${ftaRule} against the normal Import Duty of ${integerToCurrency(getDutyTotal, impCurrency)} from Duty Calculator.`;
            // let footnote_label = ftaLabel+"_f";
            let footnote_key = Object.keys(duty[0].dutyDetails[0]);
            dutyData += `<div class='col-sm-12 col-md-3 col-lg-3'><div id='rules${ftaLabel}' class='roo-table'>  </div>`;
            dutyData += `</div>`;
            // showSaveDutyDetails.innerHTML += dutyData;
            dutyData += "<div class='margin-all col-sm-12 col-md-12 col-lg-12'><div>";
            dutyData += `<span class='duty-cost'>Landed cost: ${integerToCurrency(total, impCurrency)}`;
            dutyData += impCurrency != cyn ? ` ( ${integerToCurrency(cynConvertTotal, cyn)} )</span>` : "</span>";
            dutyData += `</div><div class='col-sm-12 tnc-note'>Landed Cost = Assessable value + Total Duty</div>`;
            dutyData += "<div class='row'> <div class='tnc-note'><i>*Excluding destination freight, destination charges and intermediaries margin (importer, wholesaler, etc.) </i></div>";
            dutyData += `<div class='col-sm-12 tnc-note'>This total landed cost calculation is applicable as of ${formattedDate()}. Foreign exchange rates are revised in accordance with notifications from the importing country.</div>`;
            dutyData += `<div class='col-sm-12 col-md-12 col-lg-12 margin-below'>${savedAmt}</div></div></div>`;
            dutyData += footnote_data ? `<div class='col-sm-12 col-md-12 col-lg-12 fta-footnote fta-footnote-save'><span>Note: </span><span class='fta-footnote-data'>${footnote_data}</span></div>` : ``;
            dutyData += `</div></div></div> `;
            ftaRule = "";
            index++;
        }
        else {
            nosaveData.push(duty);
        }

    });

    nosaveData && nosaveData.length && nosaveData.forEach(duty => {
        var dutyDetailsDesc = duty && duty[0] && duty[0].dutyDetails || [];
        var total = Math.floor(duty[0].total + duty[0].CIFVALUE);
        let cynConvertTotal = currencyConvert(total);
        let savedDuty = Math.floor(getDutyTotal - total);
        let savedDutyPercent = Math.floor(savedDuty * 100 / getDutyTotal);
        let footnote_data = "";
        if (dutyDetailsDesc.length > 0) {

            entry1 = "", dutyCodes = [];
            dutyDetailsDesc.forEach(ele => {
                var getKey = Object.keys(ele).filter(e => e.match(/(_dd)$/))[0].match(/(^((?!mfn).)*$)/);
                getKey = getKey && getKey[0];
                if (getKey) {
                    var prefix = getKey.split("_dd")[0];
                    var _dd = ele[`${prefix}_dd`],
                        _d = ele[`${prefix}_d`] || 0,
                        _cl = ele[`${prefix}_cl`] || 0,
                        _define = ele[`${prefix}_define`] || '';
                    if (!ftaRule) {
                        ftaId.push(prefix.split(`${prefix.split("_")[0]}_`)[1]);
                        ftaLabel = prefix.split(`${prefix.split("_")[0]}_`)[1];
                        footnote_data = duty[0][`${prefix}_f`];
                        ftaRule = _dd;
                    }
                    entry1 += `<tr> <td>${_dd}`;
                    entry1 += _define ? `<span class="info"> <i class="icon-info-sign"></i> <span class="extra-info"> ${_define} </span></span>` : '';
                    entry1 += `</td>`;
                    entry1 += `<td> ${_d}</td> `;
                    entry1 += `<td> ${Math.floor(_cl)}</td> `;
                    entry1 += impCurrency != cyn ? `<td> ${currencyConvert(_cl)}</td> ` : "";
                    dutyCodes.push(ele[getKey]);
                }
            });
            let key = Object.keys(duty[0].dutyDetails[1]).filter(o => o.includes('_dd'));
            savedDutyDetails.push({
                total: total,
                cyn: cyn,
                code: duty[0].dutyDetails[1][key]
            });

            let savedConvertPrice = savedDuty ? currencyConvert(savedDuty) : 0;
            let line1 = `<div class='row'><div class='col-sm-12 col-md-9 col-lg-9'>`;
            line1 += `<div class='col-sm-12'>`;
            line1 += `<div class='duty-details-heading'><h3>Breakdown of Duties and Taxes</h3></div>`;
            line1 += `<table class='duty-details'><tr><th>Duty Details</th><th>Duty Rate</th><th>Duty Amount<br>(in ${impCurrency})</th>`;
            line1 += impCurrency != cyn ? `<th>Duty Amount<br>(in ${cyn})</th>` : "";
            line1 += "</tr>";

            let dutyTotal = duty[0].total ? Math.floor(duty[0].total) : 0;
            let totalPrecision = impCurrency != cyn && currencyConvert(dutyTotal);
            let htmlText1 = line1 + entry1 + `<tr><td colspan="2">Total payable duties and taxes</td><td> ${dutyTotal} </td>`;
            htmlText1 += impCurrency != cyn ? `<td> ${totalPrecision} </td>` : "";
            dutyData1 += `${htmlText1} </tr></table></div></div>`;

            let savedAmt = `<img class="thumbs-up-icon" src="assets/thumbsdown.png" alt="nosave"> Sorry you haven't saved duty under ${ftaRule} and you may have to pay ${integerToCurrency(getDutyTotal, impCurrency)} from Duty Calculator.`;
            // let footnote_label = ftaLabel+"_f";
            let footnote_key = Object.keys(duty[0].dutyDetails[0]);
            dutyData1 += `<div class='col-sm-12 col-md-3 col-lg-3'><div id='rules${ftaLabel}' class='roo-table'>  </div>`;
            dutyData1 += `</div>`;
            // showSaveDutyDetails.innerHTML += dutyData;
            dutyData1 += "<div class='margin-all col-sm-12 col-md-12 col-lg-12'><div>";
            dutyData1 += `<span class='duty-cost'>Landed cost: ${integerToCurrency(total, impCurrency)}`;
            dutyData1 += impCurrency != cyn ? ` ( ${integerToCurrency(cynConvertTotal, cyn)} )` : "";
            dutyData1 += `</span></div><div class='col-sm-12 tnc-note'>Landed Cost = Assessable value + Total Duty</div>`;
            dutyData1 += "<div class='row'> <div class='tnc-note'><i>*Excluding destination freight, destination charges and intermediaries margin (importer, wholesaler, etc.) </i></div>";
            dutyData1 += `<div class='col-sm-12 tnc-note'>This total landed cost calculation is applicable as of ${formattedDate()}. Foreign exchange rates are revised in accordance with notifications from the importing country.</div>`;
            dutyData1 += `<div class='col-sm-12 col-md-12 col-lg-12 margin-below'>${savedAmt}</div></div>`;
            dutyData1 += footnote_data ? `<div class='col-sm-12 col-md-12 col-lg-12 fta-footnote'><span>Note: </span><span class='fta-footnote-data'>${footnote_data}</span></div>` : ``;
            dutyData1 += `</div></div>`;
            ftaRule = "";
            index++;
        }
    });
    let nosaveDutyData = "";
    if (nosaveData && nosaveData.length) {

        let lines = `<div class='row display-group duty-block no-saving-block panel panel-default'>`;
        lines += `<div class="col-sm-12 save-duty-heading panel-heading" role="tab" id="heading${index}">`;
        lines += `<a class="save-duty-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#index${index}" aria-expanded="false" aria-controls="index${index}">`;
        lines += `<span class="menu-title">No saving on Landing cost</span></a></div>`;
        lines += `<div class='panel-collapse collapse' id='index${index}' role="tabpanel" aria-labelledby="heading${index}" aria-expanded="false"><div class='panel-body row'>`;
        lines += `<div class='col-sm-12 nosave-block-subtitle'><span>This product is not eligible or covered under any existing Trade Agreement signed by importing country.</span></div>`;
        nosaveDutyData = lines + dutyData1;
    }
    const landedCost = Math.floor(currencyConvert(getDutyResponse.total + getDutyResponse.CIF));

    let shipmentSummary = "";
    shipmentSummary += `<div class='row fta-shipment-summary-block'>`;
    shipmentSummary += `<div class="col-sm-12 fta-shipment-heading"><h3 clas="col-sm-12">YOUR SHIPMENT SUMMARY</h3></div>`;
    shipmentSummary += `<div class="col-sm-12 vertical-separator"></div>`;

    // FTAs summary
    if (savedDutyDetails && savedDutyDetails.length) {
        shipmentSummary += `<div class='col-sm-12 col-md-6 col-lg-6 fta-shipment-summary'>`;
        savedDutyDetails.forEach(s => {
            const saved = getDutyTotal - s.total;
            shipmentSummary += `<div class='row'>`;
            shipmentSummary += `<div class='col-sm-12 fta-summary-heading'>- Under ${s.code}</div>`;
            shipmentSummary += `<div class='col-sm-12 fta-summary-data'>Total Import Duty: ${s.total} ${s.cyn}</div>`;
            shipmentSummary += `<div class='col-sm-12 fta-summary-data'>Duty Saved: ${saved} ${s.cyn}</div>`;
            shipmentSummary += `</div>`;
        });
        shipmentSummary += `</div>`;
    }

    // shipment summary

    shipmentSummary += `<div class='col-sm-12 col-md-5 col-lg-5 fta-shipment-summary'>`;
    shipmentSummary += `<div class="fta-shipment-data"> Import Country: <span>${impCountryLabel}</span></div>`;
    shipmentSummary += `<div> Export Country: <span>${expCountryLabel}</span></div>`;
    shipmentSummary += `<div> Mode of Transport: <span>${inputData.mode}</span></div>`;
    shipmentSummary += `<div> Import HS Code: <span>${getDutyResponse.hscode}</span></div>`;
    shipmentSummary += `<div> Currency: <span>${cyn}</span></div>`;
    shipmentSummary += `<div> Currency Rate for ${cyn}: <span>${cynRate} ${impCurrency}</span></div>`;
    shipmentSummary += `<div> CIF Value: <span>${getDutyResponse.CIF} ${cyn}</span></div>`;

    let insuranceCharge = params.exwInsuranceCharges || params.cifInsuranceCharges || params.fobInsuranceCharges || 0;
    let internationalFreight = params.exwIntFreight || params.cifIntFreight || params.fobIntFreight || 0;
    const incoInfo = `<span class="inco-info"> <i class="icon-info-sign"></i> <span class="inco-extra-info"> ${incoInfoMap[params.inco_term]} </span></span>`;
    shipmentSummary += `<div> Inco Term ${incoInfo} : <span> ${params.inco_term} </span></div>`;
    shipmentSummary += params.exwInsuranceCharges ? `<div> Origin Charges: <span> ${params.exwInsuranceCharges}</span></div>` : '';
    shipmentSummary += params.exwIntFreight ? `<div> Origin Freight: <span> ${params.exwIntFreight}</span></div>` : '';
    shipmentSummary += `<div> International Freight: <span> ${internationalFreight}</span></div>`;
    shipmentSummary += `<div> Insurance Charges: <span> ${insuranceCharge}</span></div>`;

    shipmentSummary += `<div> Total payable duties and taxes: <span>${currencyConvert(getDutyResponse.total)} ${cyn}</span></div>`;
    shipmentSummary += `<div> Total landed cost: <span>${landedCost}</span></div>`;
    shipmentSummary += `<div> HSN Description: <span>${getDutyResponse.des}</span></div>`;
    shipmentSummary += '</div></div>';

    showSaveDutyDetails.innerHTML += dutyData + nosaveDutyData;
    showSaveDutyDetails.innerHTML += shipmentSummary;
    displayOriginRules(ftaId);
}

async function getSavedDuty() {

        formRequest();
        getRulesOfOrigin();
        const body = JSON.parse(other_params.body);
        body.getFTA = "true";
        other_params.body = JSON.stringify(body);

        fetch(getDutyUrl, other_params)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Could not reach the API: " + response.statusText);
                }
            }).then(function (data) {
                getDutyResponse = data;
                // getDutyResponse && displayGetDuty();

                fetch(saveDutyUrl, other_params)
                    .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        } else {
                            const responseData = response.json();
                            showSaveDutyDetails.innerHTML= `<div class="hsn-error">${responseData.message}</div>`
                            throw new Error("Could not reach the API: " + response.statusText);
                        }
                    }).then(function (data) {
                        saveDutyResponse = data;
                        saveDutyResponse && displaySaveDuty();

                    }).catch(function (error) {
                        showSaveDutyDetails.innerHTML = error;
                    });
            }).catch(function (error) {
                console.log("Error occurred ", error);
            });
    
}

function displayHSCodes(ele) {
    let hsArray = [], hsDataList = "", unique = [];

    hsDetailsResponse && hsDetailsResponse.forEach(h => {
        hsDataList += `<option>${h.hs6}</option>`;
    });

    document.getElementById("hscodeList").innerHTML = hsDataList;
}

function showPointsDeductScreen(popupEle = "points-popup-box", page) {
    if (validateForm()) {
        var ele = document.getElementById(popupEle);
        if (page) {
            document.getElementById('deductMsg').innerHTML = deductionMessage[page];
        }
        ele.style.visibility = "visible";
        ele.style.opacity = "1";
        ele.style.display = "flex";
    }
}

function goToPageWithPointDeduct(redirectPath, popupEle = "points-popup-box", page = "ftaMsg") {
    showPointsDeductScreen(popupEle, page);
    document.getElementById("popup-confirm-save").onclick = function () {
        const newPath = `/${redirectPath}`;
        history.pushState(null, null, newPath);
        getSavedDuty();
    };

}

function searchHSCode() {
    let hscode = document.getElementById("hscode").value,
        impCountry = document.getElementById("import_country").value,
        string = '';
    document.getElementById('popup-box').style.visibility = "visible";
    document.getElementById('popup-box').style.opacity = "1";
    document.getElementById('popup-box').style.display = "flex";

    let searchHSForm = document.getElementById("searchHSN");
    if (!impCountry || impCountry == 'Select country') {
        string = `<div class='row'><span> Select import country to continue</span></div>`;
    }
    else
        if (impCountry) {
            string = `<div class="row modal-body"> `;
            string += `<div class="col-sm-12 padding-down"> Please enter the product name or at least HS 2, 4, 6 digit of HS codes. </div>`;
            string += `<div class="col col-sm-9 padding-down"><input type="text" class="form-control form-control-lg" id="search-hscode" placeholder="Enter product name or HS code here..." aria-label="search"></div>`;
            string += `<button id="hscodesubmit" type="button" class="btn btn-outline-primary btn-icon-text btn-center-align col-sm-3 modal-btn btn-hscode-result" onclick="getHSNSearch('${impCountry}', 'hs_search_result')"> Get Result</button>`;
            string += `<div class='col-sm-12'>If you are unable to locate the HS Code, please use Intgrow's HS Code Finder for more accurate results. <a href='/hscodefinder' target='_parent'> Click here</a></div>`;
            string += `<div class="col-sm-12" id="hs_search_result"></div> </div></div>`;
        }

    searchHSForm.innerHTML = string;
}

function closeModal(modal = 'popup-box') {
    document.getElementById(modal).style.visibility = "hidden";
    document.getElementById(modal).style.display = "none";
}

async function findHSCode(ele = '') {
    try {
        ele = document.getElementById("hscode").value;
        const response = await fetch(`${hostname}/api/hs_code/details?hs=${ele}`);

        const data = await response.json();
        if (!response.ok) {
            console.log("Error in fetch hscode");
            throw new Error('Error in fetch hscode');
        }
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function findHSCode1(ele = '') {
    ele = document.getElementById("hscode").value;
    if ((ele.match(/^[0-9]+$/g) && ele.length > 1 && ele.length % 2 == 0) || (ele.match(/[a-zA-Z]+/g) && ele.length > 2)) {
        const hsDetailsUrl = `${hostname}/api/hs_code/details?hs=${ele}`;
        fetch(hsDetailsUrl)
            .then(function (response) {
                if (response.ok && response.status != 204) {
                    return response.json();
                }
            }).then(function (data) {
                hsDetailsResponse = data;
                hsDetailsResponse && displayHSCodes(ele);
            }).catch(function (error) {
                console.log("Error in HS Code details fetch, ", error);
            });
    }
}

function gotoPage(pageURL) {
    const impCountry = document.getElementById('import_country'),
        expCountry = document.getElementById('export_country'),
        prodVal = document.getElementById('productValue'),
        cyn = document.getElementById('cyn');

    if (impCountry && expCountry && prodVal && cyn) {
        localStorage.setItem("imp", getCountryId(impCountry.value, "label"));
        localStorage.setItem("exp", getCountryId(expCountry.value, "label"));
        localStorage.setItem("cyn", cyn.value);
        localStorage.setItem("val", prodVal.value);
        window.top.location.href = `/${pageURL}`;
    }

}

function storeHSValue(element, importCountry, exportCountry) {
    const impHSN = document.getElementById('imp_hscode'),
        expHSN = document.getElementById('exp_hscode');

    if (impHSN || element) {
        element ? localStorage.setItem("hscode", element) : localStorage.setItem("hscode", impHSN.value);
        localStorage.setItem("imp", getCountryId(importCountry, "label"));
        localStorage.setItem("exp", getCountryId(exportCountry, "label"));
    }
    else if (expHSN) {
        localStorage.setItem("hscode", expHSN.value);
        localStorage.setItem("exp", getCountryId(importCountry, "label"));
        localStorage.setItem("imp", getCountryId(exportCountry, "label"));
    }

    window.top.location.href = "/dutycalculator";
}

function enableBtn(impHSMap, expHSMap, element) {
    let impHSN = document.getElementById("imp_hscode"),
        expHSN = document.getElementById("exp_hscode");
    if (impHSMap && impHSN.checked && (!expHSMap || expHSMap && expHSN.checked) || expHSMap && expHSN.checked && (!impHSMap || (impHSMap && impHSN.checked))) {
        document.getElementById(element).disabled = false;
    }
}

function displayHSTable(hscodesDisplay, HSMap, importCountry, exportCountry) {
    let hscodeHTML = "", imp_hsn, exp_hsn;
    if (HSMap && HSMap.import && HSMap.import.length) {
        hscodeHTML = "<div class='row hstable-row'><div class='col-sm-6 hstable'>";
        hscodeHTML += `<div class="hstable-body"><div class="hstable-title"> <span>HS Codes of ${getCountryId(importCountry, "label")} </span></div>`;
        hscodeHTML += `<table class="hstable-data"><tr> <th> HS Code </th> <th colspan='2'> Product Description </th> </tr>`
        HSMap.import.forEach(d => {
            hscodeHTML += `<tr> <td> ${d.value} </td> <td> ${d.label} </td><td><input type="radio" value="${d.value}" name="impHSCode" id="imp_hscode" onchange="enableBtn('${HSMap}', '${HSMap}','store_val')"></td></tr>`;
        });
        hscodeHTML += "</table></div></div>";
        imp_hsn = document.getElementById('imp_hscode');
    }
    if (HSMap && HSMap.export && HSMap.export.length) {
        hscodeHTML += "<div class='col-sm-6 hstable'>";
        hscodeHTML += `<div class="hstable-body"><div class="hstable-title"> <span>HS Codes of ${getCountryId(exportCountry, "label")} </span></div>`;
        hscodeHTML += `<table class="hstable-data"><tr> <th> HS Code </th> <th colspan='2'> Product Description </th> </tr>`
        HSMap.export.forEach(d => {
            hscodeHTML += `<tr> <td> ${d.value} </td> <td> ${d.label} </td><td><input type="radio" value="${d.value}" name="expHSCode" id="exp_hscode" onchange="enableBtn('${HSMap}', '${HSMap}','store_val')"></td></tr>`;
        });
        hscodeHTML += "</table></div></div>";
        exp_hsn = document.getElementById('exp_hscode');
    }
    hscodeHTML += `</div><div class="row hstable-row"><button id="store_val" class="btn btn-outline-primary btn-icon-text hstable-btn" onclick=storeHSValue(${imp_hsn},"${importCountry}","${exportCountry}") disabled> Proceed to Duty Calculator</button></div>`;
    hscodesDisplay.innerHTML += hscodeHTML;
}

function gotoForm(element1, element2) {
    let formReset = document.getElementById(element2),
        formDisplay = document.getElementById(element1);
    formReset.innerHTML = '';
    formDisplay.style.visibility = 'visible';
    formDisplay.style.display = 'flex';

    document.getElementById("points-popup-box").style.visibility = "hidden";
    document.getElementById("points-popup-box").style.opacity = "0";
    document.getElementById("points-popup-box").style.display = "none";
}

async function fetchCountryHSN(hscode, importCountry, ele) {
    const countryHSUrl = `${hostname}/api/getProductFromCountryCode?hs=${hscode}&imp=${importCountry}`;
    impcountryHSResponse = await fetch(countryHSUrl);
    if (!impcountryHSResponse.ok) {
        const msg = `Error in fetch ${impcountryHSResponse.status}`;
        throw new Error(msg);
    }
    const impHSMap = impcountryHSResponse.status != 204 ? await impcountryHSResponse.json() : [];
    displayHSTable(ele, impHSMap, "", importCountry, "");
}



async function getHSNSearch(importCountry, searchHSFormEle) {
    let hscode = document.getElementById('search-hscode').value;
    importCountry = getCountryId(importCountry);
    getCountryHSSearch(hscode, importCountry, searchHSFormEle);
}

function openPopup(ele) {
    document.getElementById('popup-box').style.visibility = "visible";
    document.getElementById('popup-box').style.opacity = "1";
    document.getElementById('popup-box').style.display = "flex";
    let htmlEle = document.getElementById(ele);
    htmlEle.innerHTML = `<div>Select Import Country and HS Code</div>`;
}

async function getCountryHSCode(hscode = hsnVal, importCountry = impCountryVal, exportCountry = expCountryVal) {
    if (!getCountryId(importCountry)) {
        openPopup('searchHSN');
    }
    else {
        setHeaders();
        closeModal('points-popup-box');
        let hscodeForm = document.getElementById("hscode_form"),
            hsFreeTextTable = document.getElementById("hs_freetext_search"),
            hscodesDisplay = document.getElementById("show_hscodes");
        hscodeForm.style.visibility = hsFreeTextTable.style.visibility = 'hidden';
        hscodeForm.style.display = hsFreeTextTable.style.display = 'none';
        let formDetails = "";
        formDetails += `<div class='row hstable-form'><div class='col-sm-4'><span class='col-hs col-form-label'>Product Name/HS Code</span><input type='text' class='form-control form-control-lg' value='${hscode}' disabled></div>`;
        formDetails += `<div class='col-sm-3'><span class='col-hs col-form-label'>Importing Country</span><input type='text' class='form-control form-control-lg' value='${importCountry}' disabled> </div>`;
        formDetails += `<div class='col-sm-3'><span class='col-hs col-form-label'>Exporting Country</span><input type='text' class='form-control form-control-lg' value='${exportCountry}' disabled> </div>`;
        formDetails += `<div class='col-sm-1'><button class='btn btn-outline-primary btn-icon-text' id='modifyHS' type='button' onclick='gotoForm("hscode_form", "show_hscodes")'>Modify</button></div>`
        hscodesDisplay.innerHTML = formDetails;
        // hscode = hscode.split(" ")[0];
        importCountry = importCountry && getCountryId(importCountry);
        exportCountry = exportCountry && getCountryId(exportCountry);

        const countryHSUrl = `${hostname}/api/getProductFromCountryCode?hs=${hscode}&imp=${importCountry}&exp=${exportCountry}`;

        HSCodeResponse = await fetch(countryHSUrl, { headers: authHeaders }).catch(function (error) {
            console.log("Error in fetching hscodes", error);
        });

        if (!HSCodeResponse.ok) {
            const msg = `Error in fetch ${HSCodeResponse.status}`;
            const data = await HSCodeResponse.json();
            hscodesDisplay.innerHTML += `<div class="hsn-error">${data.message}</div>`;
            throw new Error(data.message);
        }

        const HSMap = HSCodeResponse.status != 204 ? await HSCodeResponse.json() : [];

        displayHSTable(hscodesDisplay, HSMap, importCountry, exportCountry);
    }
}

function fillHSNSearch(hscode) {
    document.getElementById('hscode').value = hscode;
    document.getElementById('popup-box').style.visibility = "hidden";
    document.getElementById('popup-box').style.opacity = "0";
    document.getElementById('popup-box').style.display = "none";
    getUserInput();

}

async function getCountryHSSearch(hscode, imp, formEle) {
    let hscodesDisplay = document.getElementById(formEle);
    const countryHSUrl = `${hostname}/api/search/countryHSCode?hs=${hscode}&imp=${imp}`;
    impcountryHSResponse = await fetch(countryHSUrl);
    if (!impcountryHSResponse.ok) {
        const msg = `Error in fetch ${impcountryHSResponse.status}`;
        throw new Error(msg);
    }
    const impHSMap = impcountryHSResponse.status != 204 ? await impcountryHSResponse.json() : [];
    let hscodeHTML = "", imp_hsn;
    if (impHSMap && impHSMap.length) {
        hscodeHTML = "<div class='row hstable-row'><div class='col-sm-12 hstable'>";
        hscodeHTML += `<div class="hstable-body"><div class="hstable-title"> <span>HS Codes for ${getCountryId(imp, "label")} </span></div>`;
        hscodeHTML += `<table class="hstable-data hstable-hsn-search hsn-browse"><tr> <th> HSN </th> <th colspan='2'> Product Description </th> </tr>`
        impHSMap.forEach(d => {
            hscodeHTML += `<tr> <td> ${d.value} </td> <td> ${d.label} </td><td><button type="button" class="btn btn-outline-primary btn-icon-text btn-center-align btn-select-hsn" value="${d.value}" name="impHSCode" id="imp_hscode" onclick="fillHSNSearch(this.value)">Select</button></td></tr>`;
        });
        hscodeHTML += "</table></div></div>";
        imp_hsn = document.getElementById('imp_hscode');
        hscodesDisplay.innerHTML = hscodeHTML;
    }
}

function setSelectHSN(hsn, imp, exp) {
    hsnVal = hsn;
    impCountryVal = imp;
    expCountryVal = exp;
    showPointsDeductScreen();
}

function displayFreeHSSearch(hs_codes, importCountry, exportCountry, formEle = "hs_freetext_search") {
    let string = '';
    let hsFreeTextTable = document.getElementById(formEle);
    hsFreeTextTable.innerHTML = "";
    if (hs_codes) {
        string = "<div class='row hstable-row'><div class='col-sm-12 hstable'>";
        string += `<div class="hsfree-text-body">`;
        string += `<table class="hstable-data hstable-hsn-search"><tr> <th> HS Codes </th><th colspan="2"> Product Description </th> </tr>`;
        hs_codes.forEach(h => {
            let [value, des] = h.hs6.split(" -");
            string += `<tr> <td> ${value} </td> <td> ${des} </td> <td><button class='btn btn-outline-primary btn-icon-text btn-center-align btn-select-hsn' type='button' onclick='setSelectHSN("${value}","${importCountry}","${exportCountry}")' name="HSCode" id="hscode_select">Select</td></tr>`;
        });
        string += "</table></div></div></div>";
        hsFreeTextTable.innerHTML = string;
        hsFreeTextTable.style.visibility = 'visible';
        hsFreeTextTable.style.display = 'flex';
    }
}

async function loadHsCodes(event) {
    event.preventDefault();
    window.localStorage.removeItem("hscode");
    window.localStorage.removeItem("imp");
    window.localStorage.removeItem("exp");
    let importCountry = document.getElementById("import_country"),
        exportCountry = document.getElementById("export_country"),
        hscode = document.getElementById("hscode");

    if (importCountry && importCountry.value && hscode && hscode.value) {
        if (hscode.value && (hscode.value.match(/^([a-zA-Z]+)/g)) || (hscode.value.match(/^([0-9]+$)/g) && hscode.value.length < 7)) {
            hsDetailsResponse = await findHSCode(hscode);
            if (hsDetailsResponse) {
                document.getElementById('errorMsg').innerHTML = '';
                displayFreeHSSearch(hsDetailsResponse, importCountry.value, exportCountry.value);
            }
            else {
                let ele = document.getElementById('errorMsg');
                ele.innerHTML = '<div class="hstable-nodata">No data found.</div>';
            }
        }
        else {
            hsnVal = hscode.value.split(" ")[0];
            impCountryVal = importCountry.value;
            expCountryVal = exportCountry.value
            showPointsDeductScreen();
            // getCountryHSCode(hsn, , );
        }
    }
    else {
        document.getElementById('popup-box').style.visibility = "visible";
        document.getElementById('popup-box').style.opacity = "1";
        document.getElementById('popup-box').style.display = "flex";
        let searchHSForm = document.getElementById("searchHSN");
        searchHSForm.innerHTML = `<div>Select Import Country and HS Code</div>`;
    }

}

function formPrefilledData() {
    let hscode = window.localStorage.getItem("hscode"),
        impCountry = window.localStorage.getItem("imp"),
        expCountry = window.localStorage.getItem("exp"),
        prodVal = window.localStorage.getItem("val");
    let hscodeElement = document.getElementById("hscode"),
        impCountryElement = document.getElementById("import_country"),
        expCountryElement = document.getElementById("export_country"),
        cynElement = document.getElementById("cyn"),
        prodValElement = document.getElementById("productValue");

    if (impCountry && impCountryElement && countryListResponse) {
        impCountryElement.value = impCountry;
        loadData();

        if (hscode && hscodeElement) {
            hscodeElement.value = hscode;
            getUserInput();
        }
    }

    if (expCountry && expCountryElement) {
        expCountryElement.value = expCountry;
    }

    if (prodVal && prodValElement) {
        prodValElement.value = prodVal;
    }

} 
