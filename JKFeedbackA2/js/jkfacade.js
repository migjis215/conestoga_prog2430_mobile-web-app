/**
 *  File Name: jkfacade.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-02-17 : Created
 */

function showCalculatedRating(){
    var quality = parseInt($("#numFoodQualityAdd").val());
    var service = parseInt($("#numServiceAdd").val());
    var value = parseInt($("#numValueAdd").val());

    $("#txtOverallRatingAdd").val(getOverallRating(quality, service, value) + "%");
}