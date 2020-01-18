// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (string ="go to the office") {
    return `This Monday, I will ${string}.`;
}

function wrapAdjective(adjective='*') {
//innrerfunction
    return function (thing ="special") {

        return `You are ${adjective}${thing}${adjective}!`;
}
}
wrapAdjective("%")("a dedicated programmer");

let Calculator = {

  add:function() {

    return 1+ 3;
  }};
