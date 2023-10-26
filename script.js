// Add your script below this line, but above the next comment!

let timeDiv = document.getElementById('time');

// 1. Current Date & Time
function getBtnAndShow() {
    function displayDateAndTime() {


        timeDiv.innerHTML = Date();
    };

    let timeCheckBtn = document.getElementById('timeCheckBtn');

    timeCheckBtn.addEventListener('click', displayDateAndTime);
};

// 2. Clears Date & Time
function clearDateAndTime() {
    timeDiv.innerHTML = '';
}

// 3. Display Date & Time Function
getBtnAndShow();

setInterval(clearDateAndTime, 5000);



// This export is to enable testing of your two testable primary functions.
// PLEASE DO NOT EDIT below this line!!!

module.exports.getBtnAndShow = getBtnAndShow;
module.exports.clearDateAndTime = clearDateAndTime;


