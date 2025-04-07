switch (expression) {
    case value1:
        //statement
        break;
    case value2:
        //statement
        break;
    case value3:
        //statement
        break;
    default:

}

let day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    default:
        console.log("Today is a weekday");
        break;
}

// let grade = "Z";

// switch (grade) {
//     case "A":
//         console.log("Excellent!");
//         break;
//     case "B":
//         console.log("Good job!");
//         break;
//     case "C":
//         console.log("Well done!");
//         break;
//     case "D":
//         console.log("You passed!");
//         break;
//     case "F":
//         console.log("Better try again!");
//         break;
//     default:
//         console.log("Invalid grade");
// }

// let num = 1;

// switch (num) {
//     case 1:
//         console.log("Number is 1");
//         break;
//     case 2:
//         console.log("Number is 2");
//         break;
//     case 3:
//         console.log("Number is 3");
//         break;
//     case 4:
//         console.log("Number is 4");
//         break;
//     default:
//         console.log("Number is not recognized");
// }

// let role = "User";
// let permission = "write";

// switch (role) {
//     case "admin":
//        console.log("Role: Admin");
//        switch (permission) {
//         case "Read":
//            console.log("Admin can read data");
//            break;
//         case "write":
//             console.log("Admin can write data");
//             break;
//         case "Delete":
//             console.log("Admin can delete data");
//             break;
//         default:
//             console.log("Invalid permission")
//        }
//        break;
//     case "User":
//         console.log("Role: User");
//         switch (permission) {
//             case "Read":
//                 console.log("User can read data");
//                 break;
//             default:
//                 console.log("Limited access for user")
//         }
//         break;
//     default:
//         console.log("Unknown Role")
// }

let category = "Cars";
let item = "Trouser";

switch (category) {
    case "Electronics":
      console.log("Category: Electronics");

        switch (item) {
            case "Laptop":
                console.log("laptop selected")
                break;
            case "Phone":
                console.log("Phone selected")
                break;
            default:
                console.log("Item not available")
        }
      break;
    case "Clothing":
        console.log("Category: Clothing");

        switch (item) {
            case "Shirt":
                console.log("Shirt selected")
                break;
            case "Trouser":
                console.log("Trouser selected")
                break;
            default:
                console.log("Item not available")
        }
        break;
    default:
        console.log("Invalid category");
        
}