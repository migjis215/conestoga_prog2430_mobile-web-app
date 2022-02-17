/**
 *  File Name: jkglobal.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-02-17 : Created
 */

function chkRatingsAdd_change() {
    if ($("#chkRatingsAdd").prop("checked")){
        $(".ratingBoxes").show();
        $("#numFoodQualityAdd").val("0");
        $("#numServiceAdd").val("0");
        $("#numValueAdd").val("0");
    } else {
        $(".ratingBoxes").hide();
    }
}

function numFoodQualityAdd_change() {
    showCalculatedRating();
}

function numServiceAdd_change() {
    showCalculatedRating();
}

function numValueAdd_change() {
    showCalculatedRating();
}

function init() {
    $("#chkRatingsAdd").on("change", chkRatingsAdd_change);
    $("#numFoodQualityAdd").on("change", numFoodQualityAdd_change);
    $("#numServiceAdd").on("change", numServiceAdd_change);
    $("#numValueAdd").on("change", numValueAdd_change);
}

$(document).ready(function () {
    init();
    initDB();
});