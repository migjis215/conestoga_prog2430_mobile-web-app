/**
 *  File Name: jkdatabase.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-03-09 : Created
 */

var db;

function errorHandler(error) {
    console.error("SQL error: " + error.message);
}

var DB = {
    createDatabase : function() {
        var shortName = "JKFeedbackDB";
        var version = "1.0";
        var displayName = "DB for JK Feedback app";
        var dbSize = 2 * 1024 * 1024;

        function dbCreateSuccess() {
          console.info("Database created successfully");
        }

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
    },
    createTable : function() {
        function txFunction(tx) {
            var sql = "";
            var options = [];

            function successDropTypeTable() {
                console.info("Success: type table dropped");
            }

            function successDropReviewTable() {
                console.info("Success: review table dropped");
            }

            function successCreateTypeTable() {
                console.info("Success: type table created successfully");
            }

            function successInsertRow() {
                console.info("Success: row inserted successfully to type table");
            }

            function successCreateReviewTable() {
                console.info("Success: review table created successfully");
            }

            sql = "DROP TABLE IF EXISTS type;";
            tx.executeSql(sql, options, successDropTypeTable, errorHandler);

            sql = "DROP TABLE IF EXISTS review;";
            tx.executeSql(sql, options, successDropReviewTable, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS type("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";
            tx.executeSql(sql, options, successCreateTypeTable, errorHandler);

            sql = "INSERT INTO type(name) VALUES(?);";
            options = ['Others'];
            tx.executeSql(sql, options, successInsertRow, errorHandler);

            options = ['Canadian'];
            tx.executeSql(sql, options, successInsertRow, errorHandler);

            options = ['Asian'];
            tx.executeSql(sql, options, successInsertRow, errorHandler);

            options = ['European'];
            tx.executeSql(sql, options, successInsertRow, errorHandler);

            options = ['Australian'];
            tx.executeSql(sql, options, successInsertRow, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS review("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "businessName VARCHAR(30) NOT NULL,"
                + "typeId INTEGER NOT NULL,"
                + "reviewerEmail VARCHAR(30),"
                + "reviewerComments TEXT,"
                + "reviewDate DATE,"
                + "hasRating VARCHAR(1),"
                + "rating1 INTEGER,"
                + "rating2 INTEGER,"
                + "rating3 INTEGER,"
                + "FOREIGN KEY(typeId) REFERENCES type(id));";
            options = [];
            tx.executeSql(sql, options, successCreateReviewTable, errorHandler);
        }

        function successTransaction() {
            console.info("Success transaction: all tables created successfully");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropTables : function() {
        function txFunction(tx) {
            var sql;
            var options = [];

            function successDropTypeTable() {
                console.info("Success: type table dropped");
            }

            function successDropReviewTable() {
                console.info("Success: review table dropped");
            }

            sql = "DROP TABLE IF EXISTS type;";
            tx.executeSql(sql, options, successDropTypeTable, errorHandler);

            sql = "DROP TABLE IF EXISTS review;";
            tx.executeSql(sql, options, successDropReviewTable, errorHandler);
        }

        function successTransaction() {
            console.info("Success transaction: all tables dropped successfully");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};