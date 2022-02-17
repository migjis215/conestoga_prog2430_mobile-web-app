/**
 *  File Name: jkfacade.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-02-17 : Created
 */

function showCalculatedRatingAdd(){
    var quality = parseInt($("#numFoodQualityAdd").val());
    var service = parseInt($("#numServiceAdd").val());
    var value = parseInt($("#numValueAdd").val());

    $("#txtOverallRatingAdd").val(getOverallRating(quality, service, value) + "%");
}

function showCalculatedRatingModify(){
    var quality = parseInt($("#numFoodQualityModify").val());
    var service = parseInt($("#numServiceModify").val());
    var value = parseInt($("#numValueModify").val());

    $("#txtOverallRatingModify").val(getOverallRating(quality, service, value) + "%");
}

function addFeedback(){
    if (doValidate_frmAdd()){
        console.log("Add Form is valid");
    } else {
        console.log("Add Form is invalid");
    }
}

function modifyFeedback(){
    if (doValidate_frmModify()){
        console.log("Modify Form is valid");
    } else {
        console.log("Modify Form is invalid");
    }
}