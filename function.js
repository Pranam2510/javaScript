// function sayMyName()
// {
//     console.log("P");
//     console.log("R");
//     console.log("A");
//     console.log("T");
//     console.log("I");
//     console.log("K");
// }
// sayMyName();

// function addTwoNum(num1,num2)//parameter
// {
//     let c=num1+num2;
//     console.log(c);
    
// }

// function addTwoNum(num1,num2)
// {
//     const result=num1+num2;
//     return result;
// }
// result=addTwoNum(3,4);//argument
// console.log(result);


function loginMessage(username="Pratik")
{
    if(username===undefined)
        {
            console.log("please enter username");
            return;
        }
    return `${username} just login`
}

console.log(loginMessage());