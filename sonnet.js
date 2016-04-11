// Contents of sonnet
var sonnet = document.getElementById("sonnet");
sonnetText = sonnet.innerHTML;
console.log("sonnet", sonnetText);

//Orphans location
var orphans = sonnetText.indexOf("orphans");
console.log("orphans location", orphans);

//number of characters in sonnet
console.log("sonnet length", sonnetText.length);


//replace first occurance of "winter" with "yuletide"
var yule = sonnetText.replace("winter", "yuletide");
console.log("switch to yuletide", yule);


//replace all occurances of "the" with "a large"
var big = yule.replace(/the /g, "a large ");
var bigger = big.replace(/The /g, "A large ");
console.log("replacing the with a large: ", bigger);


//set the content of the sonnet div with the new string
sonnet.innerHTML = bigger;
