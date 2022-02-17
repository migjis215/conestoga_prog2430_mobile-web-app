/**
 *  File Name: jkglobal.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-02-17 : Created
 */

function chkRatingsAdd_change() {
    if ($("#chkRatingsAdd").prop("checked")){
        $("#ratingBoxesAdd").show();
        $("#numFoodQualityAdd").val("0");
        $("#numServiceAdd").val("0");
        $("#numValueAdd").val("0");
    } else {
        $("#ratingBoxesAdd").hide();
    }
}

function numFoodQualityAdd_change() {
    showCalculatedRatingAdd();
}

function numServiceAdd_change() {
    showCalculatedRatingAdd();
}

function numValueAdd_change() {
    showCalculatedRatingAdd();
}

function chkRatingsModify_change() {
    if ($("#chkRatingsModify").prop("checked")){
        $("#ratingBoxesModify").show();
        $("#numFoodQualityModify").val("0");
        $("#numServiceModify").val("0");
        $("#numValueModify").val("0");
    } else {
        $("#ratingBoxesModify").hide();
    }
}

function numFoodQualityModify_change() {
    showCalculatedRatingModify();
}

function numServiceModify_change() {
    showCalculatedRatingModify();
}

function numValueModify_change() {
    showCalculatedRatingModify();
}

function init() {
    $("#chkRatingsAdd").on("change", chkRatingsAdd_change);
    $("#numFoodQualityAdd").on("change", numFoodQualityAdd_change);
    $("#numServiceAdd").on("change", numServiceAdd_change);
    $("#numValueAdd").on("change", numValueAdd_change);

    $("#chkRatingsModify").on("change", chkRatingsModify_change);
    $("#numFoodQualityModify").on("change", numFoodQualityModify_change);
    $("#numServiceModify").on("change", numServiceModify_change);
    $("#numValueModify").on("change", numValueModify_change);
}

$(document).ready(function () {
    init();
    initDB();
});