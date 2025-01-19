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
var userDetail = { name: "Punit Goyal", id: 123, email: "punit@123gmail.com" };
var accountDetail = { accId: 12, accountType: 'saving', balance: 25000 };
var completeAccDetails = function (userDetail, accountDetail) {
    return __assign(__assign({}, userDetail), accountDetail);
};
var completeUserAccountDetails = completeAccDetails(userDetail, accountDetail);
console.log(completeUserAccountDetails);
