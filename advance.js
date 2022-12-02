let studentname = {
    firstname : "deepika",
    secondname : "Sm",
    
    
}
let printfullname = function(age){
    console.log(this.firstname + " " + this.secondname + " of age " + age)
}
 let printstudentdetail = printfullname.bind(studentname, 13);
 console.log(printstudentdetail);
 printstudentdetail();
