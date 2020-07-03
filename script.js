
/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
function buildQueryURL() {
    var queryURL ="https://api.openweathermap.org/data/2.5/weather?";
    var queryparams = { "api-key": "a0aca8a89948154a4182dcecc780b513" };
    queryparams.q = $("#search-city").val().trim();
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryparams));
    return queryURL + $.param(queryparams);

}


























