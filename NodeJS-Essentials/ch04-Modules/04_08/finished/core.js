const path = require("path");

// const util= require("util");
// util.log(path.basename(__filename));
// util.log(" ^ The name of the current file.");

// Destructurring. Using only one [log] of the several functions available in  [util] module. 
const { log } = require("util"); 
const { getHeapStatistics } = require("v8");

log(getHeapStatistics());
