/**
 *  File Name: jkfacade.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-03-09 : Created
 */

function initializeAddForm() {
    $("#txtBusinessNameAdd").val("");
    $("#txtReviewerCommentsAdd").val("");
    $("#txtReviewDateAdd").val("");
    $("#chkRatingsAdd").prop("checked", false).checkboxradio("refresh");

    updateTypesDropdownAdd();
    updateReviewerEmailAdd();
    hideAndShowRatingsAdd();
}

function hideAndShowRatingsAdd() {
    if ($("#chkRatingsAdd").prop("checked")){
        $("#ratingBoxesAdd").show();
        $("#numFoodQualityAdd").val("0");
        $("#numServiceAdd").val("0");
        $("#numValueAdd").val("0");
        $("#txtOverallRatingAdd").val("0");
    } else {
        $("#ratingBoxesAdd").hide();
    }
}

function showCalculatedRatingAdd() {
    var quality = parseInt($("#numFoodQualityAdd").val());
    var service = parseInt($("#numServiceAdd").val());
    var value = parseInt($("#numValueAdd").val());

    $("#txtOverallRatingAdd").val(getOverallRating(quality, service, value) + "%");
}

function addFeedback() {
    if (doValidate_frmAdd()) {
        console.log("Add Form is valid");
        var businessName = $("#txtBusinessNameAdd").val();
        var typeId = $("#cmbTypeAdd").val();
        var reviewerEmail = $("#txtReviewerEmailAdd").val();
        var reviewerComments = $("#txtReviewerCommentsAdd").val();
        var reviewDate = $("#txtReviewDateAdd").val();
        var hasRating = $("#chkRatingsAdd").prop("checked");

        var rating1 = $("#numFoodQualityAdd").val();
        var rating2 = $("#numServiceAdd").val();
        var rating3 = $("#numValueAdd").val();

        if (!hasRating) {
            rating1 = 0;
            rating2 = 0;
            rating3 = 0;
        }
        var options = [businessName, typeId, reviewerEmail, reviewerComments, reviewDate, hasRating, rating1, rating2, rating3];

        function callback() {
            console.info(`${businessName} ${typeId} ${reviewerEmail} ${reviewerComments} ${reviewDate} ${hasRating} ${rating1} ${rating2} ${rating3}`);
            console.info("Success: Record inserted successfully");
            alert("New Feedback Added");
        }

        Review.insert(options, callback);
    } else {
        console.log("Add Form is invalid");
    }
}

function getReviews() {
    var options = [];

    function callback(tx, results) {
        console.info("Selecting all Feedback");

        var htmlCode = "";

        if (results.rows.length === 0) {
            htmlCode = "<h1>No record found</h1>";
        }

        for(var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            var businessName = row['businessName'];
            var reviewerEmail = row['reviewerEmail'];
            var reviewerComments = row['reviewerComments'];
            var overallRatings = getOverallRating(row['rating1'], row['rating2'], row['rating3']) + "%";

            htmlCode += `
                <li>
                    <a data-role="button" data-row-id=${row['id']} href="#">
                        <h1>Business Name: ${businessName}</h1>
                        <p>
                            Reviewer Email: ${reviewerEmail}<br />
                            Comments: ${reviewerComments}<br />
                            Overall Rating: ${overallRatings}
                        </p>
                    </a>
                </li>
            `;
        }

        var listView = $("#listViewFeedback");
        listView = listView.html(htmlCode);
        listView.listview("refresh");

        function clickHandler() {
            console.info("Selecting a Feedback")
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop("href", "#JKModifyFeedbackPage");
        }

        $("#listViewFeedback a").on("click", clickHandler);
    }

    Review.selectAll(options, callback);
}

function showCurrentReview() {
    var id = localStorage.getItem("id");
    var options = [id];

    function callback(tx, results) {
        var row = results.rows[0];
        var businessName = row['businessName'];
        var typeId = row['typeId'];
        var reviewerEmail = row['reviewerEmail'];
        var reviewerComments = row['reviewerComments'];
        var reviewDate = row['reviewDate'];
        var hasRating = row['hasRating'];
        var rating1 = row['rating1'];
        var rating2 = row['rating2'];
        var rating3 = row['rating3'];

        $("#txtBusinessNameModify").val(businessName);
        updateTypesDropdownModify(typeId);
        $("#txtReviewerEmailModify").val(reviewerEmail);
        $("#txtReviewerCommentsModify").val(reviewerComments);
        $("#txtReviewDateModify").val(reviewDate);

        if (hasRating === "true") {
            $("#chkRatingsModify").prop("checked", true).checkboxradio("refresh");
            hideAndShowRatingsModify();
            $("#numFoodQualityModify").val(rating1);
            $("#numServiceModify").val(rating2);
            $("#numValueModify").val(rating3);
            showCalculatedRatingModify();
        } else {
            $("#chkRatingsModify").prop("checked", false).checkboxradio("refresh");
            hideAndShowRatingsModify();
        }
    }

    Review.select(options, callback);
}

function hideAndShowRatingsModify() {
    if ($("#chkRatingsModify").prop("checked")){
        $("#ratingBoxesModify").show();
        $("#numFoodQualityModify").val("0");
        $("#numServiceModify").val("0");
        $("#numValueModify").val("0");
        $("#txtOverallRatingModify").val("0");
    } else {
        $("#ratingBoxesModify").hide();
    }
}

function showCalculatedRatingModify() {
    var quality = parseInt($("#numFoodQualityModify").val());
    var service = parseInt($("#numServiceModify").val());
    var value = parseInt($("#numValueModify").val());

    $("#txtOverallRatingModify").val(getOverallRating(quality, service, value) + "%");
}

function updateFeedback() {
    if (doValidate_frmModify()) {
        console.log("Modify Form is valid");

        var id = localStorage.getItem("id");
        var businessName = $("#txtBusinessNameModify").val();
        var typeId = $("#cmbTypeModify").val();
        var reviewerEmail = $("#txtReviewerEmailModify").val();
        var reviewerComments = $("#txtReviewerCommentsModify").val();
        var reviewDate = $("#txtReviewDateModify").val();
        var hasRating = $("#chkRatingsModify").prop("checked");
        var rating1 = $("#numFoodQualityModify").val();
        var rating2 = $("#numServiceModify").val();
        var rating3 = $("#numValueModify").val();

        if (!hasRating) {
            rating1 = 0;
            rating2 = 0;
            rating3 = 0;
        }

        var options = [businessName, typeId, reviewerEmail, reviewerComments, reviewDate, hasRating, rating1, rating2, rating3, id];

        function callback() {
            console.info(`${businessName} ${typeId} ${reviewerEmail} ${reviewerComments} ${reviewDate} ${hasRating} ${rating1} ${rating2} ${rating3}`);
            console.info("Success: Record updated successfully");
            alert("Feedback Updated successfully");
        }

        Review.update(options, callback);
    } else {
        console.log("Modify Form is invalid");
    }
}

function deleteFeedback() {
    var id = localStorage.getItem("id");
    var options = [id];

    function callback() {
        console.info("Success: Record deleted successfully");
        alert("Feedback Deleted successfully");
        $(location).prop("href", "#JKViewFeedbackPage");
    }

    Review.delete(options, callback);
}

function showDefaultReviewerEmail() {
    $("#txtDefaultReviewerEmail").val("jkim3240@conestogac.on.ca");
}

function saveDefaultReviewerEmail() {
    if (doValidate_frmSettings()) {
        localStorage.setItem("DefaultEmail", $("#txtDefaultReviewerEmail").val());
        alert("Default reviewer email saved.");
    }
}

function clearDatabase() {
    var result = confirm("Really want to clear database?");
    if (result) {
        try {
            DB.dropTables();
            alert("Database cleared: All tables dropped");
        } catch (e) {
            alert(e);
        }
    }
}

function updateReviewerEmailAdd() {
    $("#txtReviewerEmailAdd").val(localStorage.getItem("DefaultEmail"));
}

function updateTypesDropdownAdd() {
    var options = [];

    function callback(tx, results) {
        console.info("Selecting types")

        var htmlCode = "";

        for(var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlCode += `
                <option value="${row['id']}">${row['name']}</option>
            `;
        }

        var typeSelect = $("#cmbTypeAdd");
        typeSelect = typeSelect.html(htmlCode);
        $("#cmbTypeAdd option[value='1']").attr("selected", "selected");
        typeSelect.selectmenu("refresh");
    }

    Type.selectAll(options, callback)
}

function updateTypesDropdownModify(typeId) {
    var options = [];

    function callback(tx, results) {
        console.info("Selecting types")

        var htmlCode = "";

        for(var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlCode += `
                <option value="${row['id']}">${row['name']}</option>
            `;
        }

        var typeSelect = $("#cmbTypeModify");
        typeSelect = typeSelect.html(htmlCode);
        $("#cmbTypeModify option[value=" + typeId + "]").attr("selected", "selected");
        typeSelect.selectmenu("refresh");
    }

    Type.selectAll(options, callback)
}