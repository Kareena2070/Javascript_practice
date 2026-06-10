//  // level 1

// // question 1
// const fruits = ["Apple", "Banana"];
// fruits.push("Mongo")
// console.log(fruits)

// // question 2
// const colors = ["Red", "Green", "Blue"];
// colors.pop()
// console.log(colors)

// // question 3
// const nums = [10, 20, 30];
// nums.shift();
// console.log(nums)

// // question 4
// nums.unshift(10)
// console.log(nums)

// // level 2

// // question 1
// const nums = [1, 2, 3, 4];
// const doubleNum = nums.map(num=>num*2)

// console.log(doubleNum)

// // question 2 
// const names = ["kareena", "ravi", "aman"];
// const UppercaseName = names.map(name=>name.toUpperCase())
// console.log(UppercaseName)

// // question 3
// const prices = [100, 200, 300];
// const total = prices.map(price=> ((price/18)*100)+price)
// console.log(total)

// // level 3

// // question 1
// const nums = [1,2,3,4,5,6];
// const evenNum = nums.filter(num=>num%2===0)
// console.log(evenNum)

// // question 2 
// const nums = [20,60,70,10,90];
// const greaterNum = nums.filter(num=>num>50)
// console.log(greaterNum)

// // question 3
// const users = [
//   {name:"Aman", active:true},
//   {name:"Ravi", active:false},
//   {name:"Kareena", active:true}
// ];

// const isActive = users.filter((item, index, arr)=>{
//     return(
//         item.active === true
//     )
// })

// console.log(isActive)



// const nums = [20,60,70,10,90];
// let res1 = nums.map((item, index)=>{
//  return item+index;
// })
// nums.map(nums=>nums*2)
// console.log(res1);

// let res2 = nums.filter((item, index, arr)=>{
//     return index%2==0
// })
// console.log(res2)

// let res3 = nums.reduce((acc, item, index, arr)=>{
//     return item+acc;
// }, 10);
// console.log(res3)


// // level 4 

// // question 1
// const users = [
//   {id:1, name:"A"},
//   {id:2, name:"B"},
//   {id:3, name:"C"}
// ];

// console.log(users.find((item, index, arr)=>{
//     return(
//         item.id===3
//     )
// }))

// // question 2
// const products = [
//   {name:"Laptop", price:50000},
//   {name:"Mouse", price:500},
//   {name:"Phone", price:20000}
// ];

// console.log(products.find((item, index, arr)=>{
//     return(
//         item.price === 500
//     )
// }))


// level 5

// question 1
const nums = [1,3,5,8];
const evenNum = nums.some((item, index, arr)=>{
    return(
        item%2==0
    )
})
console.log(evenNum)

// question 2
const users = [
  {role:"user"},
  {role:"admin"},
  {role:"user"}
];

const isAdmin = users.some((item, index, arr)=>{
    return( item.role === "admin")
})
console.log(isAdmin)