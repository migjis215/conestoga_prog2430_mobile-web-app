/**
 *  File Name: jkutil.js
 *
 *  Revision History:
 *          Jisung Kim, 2022-02-17 : Created
 */

function getOverallRating(quality, service, value){
    return Math.ceil((quality + service + value) * 100 / 15);
}