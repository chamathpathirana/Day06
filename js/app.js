// class Customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// let customer1 = new Customer("Sharadha", 20, "Bangalore");
// console.log(customer1);

// ---------------------------------------------

// let customer2 = {
//     name: "John",
//     age: 25,
//     address: "New York",
//     salary: 5000,
//     items: ["item1", "item2", "item3"],
//     item: [
//         {
//             id: 12,
//             name: "chamath",
//             price: 4500,
//             variants: [
//                 {
//                     id: 1,
//                     name: "ovindu",
//                     price: 300
//                 }
//             ]
//         }
//     ],

//     father: {
//         name: "kumara",
//         age: 53,
//         address: "matara"
//     }
// };
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items[2]);
// console.log(customer2.father.name);
// console.log(customer2.item[0].variants[0].price); 

// document.write("<h1>hellow chamath</h1>");

// document.log(document.title);
// console.log(document);


//  let heading = document.getElementById("heading");

//  console.log(heading);

//  let title = document.getElementById("title");
//  console.log(title);
let title = document.getElementById("title");
//   console.log(heading);

//   title.innerText = "Chamath";

//  function Changetitle(){
//     console.log(title);
//      title.innerText ="chamath";
//     console.log("Click"); 

// let number = 0;
// function increment() {
//     title.innerText = "Chamath" + number++;
//     console.log("Clicked");


// function decrement () {
//         title.innerText = "Chamath" + number--;

//         console.log("Clicked");
// }
 

// function Changetitle() {

//     let txtInput = document.getElementById("inputText");

//     let userInput = txtInput.value; 

//     console.log(userInput);
    
//     let title = document.getElementById("title");

//     title.innerText=userInput;

    
// }

// function btnSumOnAction() {
//     let input01 = document.getElementById("txtInput01").value;
//     let input02 = document.getElementById("txtInput02").value;

//     let sum = parseInt(input01)+parseInt(input02);
//     let sum = Number(input01)+Number(input02);

//     document.getElementById("title").innerText="SUM : "+sum

    

//     console.log(input01);
//     console.log(input02);
//     console.log(sum);

// }


let customerList = [];

function btnAddCustomerOnAction(){
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value; 

    let customer={ 
        name:txtName,
        address:txtAddress,
        age:txtAge,
        email:txtEmail,
        salary:txtSalary
    }

    customerList.push(customer);

    console.log(customerList);
      
}




    



// }
