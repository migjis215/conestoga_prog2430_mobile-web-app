/**
 *  File Name: jkdatabase.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-02-17 : Created
 */

var db;

function errorHandler(error) {
    console.error("SQL error: " + error.message);
}

var DB = {
    createDatabase : function() {
        var shortName = "JKFeedbackDB";
        var version = "1.0";
        var displayName = "DB for JKFeedbackDB app";
        var dbSize = 2 * 1024 * 1024;

        function dbCreateSuccess() {
          console.info("Success: Database create successfully");
        }

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
    },
    createTable : function() {
        function txFunction(tx) {
            var sql = "";
            var options = [];

            function successDropTable() {
                console.info("Success: Drop table successful");
            }

            function successCreateTable() {
                console.info("Success: Create table successful");
            }

            function successInsertRow() {
                console.info("Success: Insert a row successful");
            }

            sql = "DROP TABLE IF EXISTS type;";
            tx.executeSql(sql, options, successDropTable, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS type("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";
            tx.executeSql(sql, options, successCreateTable, errorHandler);

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
            tx.executeSql(sql, options, successCreateTable, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Create tables transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropTables : function() {
        function txFunction(tx) {
            var sql = "DROP TABLE IF EXISTS type;";
            var options = [];

            function successCallback() {
                console.info("Success: Drop table: type successful");
            }

            tx.executeSql(sql, options, successCallback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Drop tables transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};