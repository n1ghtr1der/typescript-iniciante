enum UserType{
    Admin = 1,
    Moderator = 2,
    User = 3,
}

function checkUser(num: number) {
    switch (num) {
        case UserType.Admin:
            console.log("Is Admin!")
            break;
    
        case UserType.Moderator:
            console.log("Is Moderator!")
            break;
        
        case UserType.User:
            console.log("Is User!");
            break;
    }
}

checkUser(2);