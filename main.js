let arr=[5,10,45,-5,0,255,89];

let arrMin=arr.reduce(arrFuncMin)
function arrFuncMin(prev,next){
    return Math.min(prev,next);
}

let arrMax=arr.reduce(arrFuncMax)
function arrFuncMax(prev,next){
    return Math.max(prev,next)
}
console.log ("bu arrayda max deyer>>>>"+arrMax+"   "+"min deyer>>>>"+arrMin)