/**
 *  File Name: jkDAL.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-03-09 : Created
 */

var Review = {
    insert: function(options, callback) {
        function txFunction(tx) {
            var sql = "INSERT INTO review(" +
                "businessName, typeId, reviewerEmail, reviewerComments, reviewDate, " +
                "hasRating, rating1, rating2, rating3) " +
                "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: insert transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM review WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: select transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function(options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM review;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: selectAll transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options, callback) {
        function txFunction(tx) {
            var sql = "UPDATE review " +
                "SET businessName=?, typeId=?, reviewerEmail=?, reviewerComments=?, reviewDate=?, " +
                "hasRating=?, rating1=?, rating2=?, rating3=? WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: update transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function(options, callback) {
        function txFunction(tx) {
            var sql = "DELETE FROM review WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: delete transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var Type = {
    selectAll: function(options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM type;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: selectAll transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};