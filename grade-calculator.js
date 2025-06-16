let user_marks = parseInt(prompt("please enter your marks out of 100: "));

if (user_marks >= 90 && user_marks < 100) {
    console.log("your grade is: ", "Grade A");
}   
else if (user_marks >= 80 && user_marks < 89) {
    console.log("your grade is: ",  "Grade B");
}
else if (user_marks >= 70 && user_marks < 79) {
    console.log("your grade is: ", "Grade C");
    
}
else if (user_marks >= 60 && user_marks < 69) {
    console.log("your grade is: ", "Grade D");
}
else {
    console.log("fail");
}


