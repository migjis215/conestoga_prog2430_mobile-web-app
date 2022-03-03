/**
 *  File Name: jkglobal.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-02-17 : Created
 */

function chkRatingsAdd_change() {
    hideAndShowRatingsAdd();
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
    hideAndShowRatingsModify();
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

function btnSaveAdd_click() {
    addFeedback();
}

function btnUpdateModify_click() {
    modifyFeedback();
}

function JKSettingsPage_show() {
    showDefaultReviewerEmail();
}

function btnSaveDefaults_click() {
    saveDefaultReviewerEmail();
}

function JKAddFeedbackPage_show() {
    updateReviewerEmailAdd();
}

function init() {
    setReviewerEmail();

    $("#chkRatingsAdd").on("change", chkRatingsAdd_change);
    $("#numFoodQualityAdd").on("change", numFoodQualityAdd_change);
    $("#numServiceAdd").on("change", numServiceAdd_change);
    $("#numValueAdd").on("change", numValueAdd_change);

    $("#chkRatingsModify").on("change", chkRatingsModify_change);
    $("#numFoodQualityModify").on("change", numFoodQualityModify_change);
    $("#numServiceModify").on("change", numServiceModify_change);
    $("#numValueModify").on("change", numValueModify_change);

    $("#btnSaveAdd").on("click", btnSaveAdd_click);
    $("#btnUpdateModify").on("click", btnUpdateModify_click);

    $("#JKSettingsPage").on("pageshow", JKSettingsPage_show);
    $("#btnSaveDefaults").on("click", btnSaveDefaults_click);

    $("#JKAddFeedbackPage").on("pageshow", JKAddFeedbackPage_show);
}

function initDb() {
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating Tables...");
            DB.createTable();
        } else {
            console.error("Error: Cannot create tables: Database does not exists");
        }
    } catch (e) {
        console.error("Error (Fatal): Error in initDB. Cannot proceed");
    }
}

$(document).ready(function () {
    init();
    initDb();
});