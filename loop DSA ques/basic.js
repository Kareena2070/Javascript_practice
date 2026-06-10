for (let i = 1; i<=10; i++){
    console.log(i)
}

for(let i = 1; i<=20; i++){
    if(i%2==0){
        console.log(i)
    }
}

const str = "JavaScript";

for(const s of str){
    console.log(s)
}

const student = {
    name: "Kareena",
    age: 21,
    course: "BCA"
}

for(const key in student){
    console.log(key, student[key])
}

