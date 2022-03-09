/**
 *  File Name: jkglobal.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-03-09 : Created
 */

function JKAddFeedbackPage_show() {
    initializeAddForm();
}
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
function btnSaveAdd_click() {
    addFeedback();
}

function JKViewFeedbackPage_show() {
    getReviews();
}

function JKModifyFeedbackPage_show() {
    showCurrentReview();
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
function btnUpdateModify_click() {
    updateFeedback();
}
function btnDeleteModify_click() {
    deleteFeedback();
}

function JKSettingsPage_show() {
    showDefaultReviewerEmail();
}
function btnSaveDefaults_click() {
    saveDefaultReviewerEmail();
}
function btnClearDatabase_click() {
    clearDatabase();
}

function init() {
    $("#JKAddFeedbackPage").on("pageshow", JKAddFeedbackPage_show);
    $("#chkRatingsAdd").on("change", chkRatingsAdd_change);
    $("#numFoodQualityAdd").on("change", numFoodQualityAdd_change);
    $("#numServiceAdd").on("change", numServiceAdd_change);
    $("#numValueAdd").on("change", numValueAdd_change);
    $("#btnSaveAdd").on("click", btnSaveAdd_click);

    $("#JKViewFeedbackPage").on("pageshow", JKViewFeedbackPage_show);

    $("#JKModifyFeedbackPage").on("pageshow", JKModifyFeedbackPage_show);
    $("#chkRatingsModify").on("change", chkRatingsModify_change);
    $("#numFoodQualityModify").on("change", numFoodQualityModify_change);
    $("#numServiceModify").on("change", numServiceModify_change);
    $("#numValueModify").on("change", numValueModify_change);
    $("#btnUpdateModify").on("click", btnUpdateModify_click);
    $("#btnDeleteModify").on("click", btnDeleteModify_click);

    $("#JKSettingsPage").on("pageshow", JKSettingsPage_show);
    $("#btnSaveDefaults").on("click", btnSaveDefaults_click);
    $("#btnClearDatabase").on("click", btnClearDatabase_click);
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