/**
 *  File Name: jkutil.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-02-17 : Created
 */

function getOverallRating(quality, service, value){
    return Math.round((quality + service + value) * 100 / 15);
}

function doValidate_frmAdd(){
    var form = $("#frmAdd");
    form.validate({
        rules:{
            txtBusinessNameAdd:{
                required: true,
                rangelength: [2, 20]
            },
            txtReviewerEmailAdd:{
                required: true,
                emailcheck: true
            },
            txtReviewDateAdd:{
                required: true
            },
            numFoodQualityAdd:{
                valuecheck: true
            },
            numServiceAdd:{
                valuecheck: true
            },
            numValueAdd:{
                valuecheck: true
            }
        },
        messages:{
            txtBusinessNameAdd:{
                required: "You must enter the business name",
                rangelength: "Name must be between 2 and 20 characters"
            },
            txtReviewerEmailAdd:{
                required: "Email is required",
                emailcheck: "Please enter a valid email form"
            },
            txtReviewDateAdd:{
                required: "Review Date is required"
            }
        }
    });

    return form.valid();
}

function doValidate_frmModify(){
    var form = $("#frmModify");
    form.validate({
        rules:{
            txtBusinessNameModify:{
                required: true,
                rangelength: [2, 20]
            },
            txtReviewerEmailModify:{
                required: true,
                emailcheck: true
            },
            txtReviewDateModify:{
                required: true
            },
            numFoodQualityModify:{
                valuecheck: true
            },
            numServiceModify:{
                valuecheck: true
            },
            numValueModify:{
                valuecheck: true
            }
        },
        messages:{
            txtBusinessNameModify:{
                required: "You must enter the business name",
                rangelength: "Name must be between 2 and 20 characters"
            },
            txtReviewerEmailModify:{
                required: "Email is required",
                emailcheck: "Please enter a valid email form"
            },
            txtReviewDateModify:{
                required: "Review Date is required"
            }
        }
    });

    return form.valid();
}

function doValidate_frmSettings(){
    var form = $("#frmSettings");
    form.validate({
        rules:{
            txtDefaultReviewerEmail:{
                required: true,
                emailcheck: true
            }
        },
        messages:{
            txtDefaultReviewerEmail:{
                required: "Default email is required",
                emailcheck: "Please enter a valid email form"
            }
        }
    });

    return form.valid();
}

jQuery.validator.addMethod(
    "emailcheck",
    function(value, element) {
        var regexp = /^.+\@.+\..+$/;
        return this.optional(element) || regexp.test(value);
    },
    "Please enter a valid email form"
);

jQuery.validator.addMethod(
    "valuecheck",
    function(value, element){
        if (value >= 0 && value <= 5) {
            return true;
        }
        return false;
    },
    "Value must be between 0 and 5"
);