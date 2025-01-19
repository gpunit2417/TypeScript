//union in TS is implemented using pipe(|) operation. It is used to combine different values
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var user = { name: "Punit", age: 22 };
var myLocation = { city: "Hisar", country: "India" };
var completeDetails = function (usr, loc) {
    return __assign(__assign({}, user), myLocation);
};
var myCompleteDetail = completeDetails(user, myLocation);
console.log(myCompleteDetail);
