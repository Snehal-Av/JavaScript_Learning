function name(){
    console.log("-------1st question-------");
    console.log("I am Snehal");
}
name()
function Education(){
    console.log("I am E&TC Engineer.")
}
Education()

function fullName(firstName,LastName){
 console.log(firstName+LastName);
}
console.log("-------2st question-------");
fullName("Snehal","Avatade");

function swap_value(arg1,arg2){
    console.log("-------3st question-------");
    console.log("--------Before Swap--------");
    console.log(arg1,arg2);
    console.log("--------After Swap--------")
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);
}
swap_value("Virat","Anushka");
swap_value("1000","2000");


function add_tree_number(num1,num2,num3){
    console.log( num1+num2+num3);

}
console.log("-------4st question-------");
add_tree_number(10.23,600,40);
add_tree_number("hello","Good","Morning");