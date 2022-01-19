import { validate } from "./validate.js";
import { preprocessing } from "./preproces.js";
import { ratings } from "./rating.js";
import { checkAlreadyExist } from "./checkexist.js";
function accountCreation(){
    validate();
    checkAlreadyExist();
    preprocessing();
    ratings();
}
accountCreation();