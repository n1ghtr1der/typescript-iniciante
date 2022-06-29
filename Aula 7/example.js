var UserType;
(function (UserType) {
    UserType[UserType["Admin"] = 1] = "Admin";
    UserType[UserType["Moderator"] = 2] = "Moderator";
    UserType[UserType["User"] = 3] = "User";
})(UserType || (UserType = {}));
function checkUser(num) {
    switch (num) {
        case UserType.Admin:
            console.log("Is Admin!");
            break;
        case UserType.Moderator:
            console.log("Is Moderator!");
            break;
        case UserType.User:
            console.log("Is User!");
            break;
    }
}
checkUser(2);
