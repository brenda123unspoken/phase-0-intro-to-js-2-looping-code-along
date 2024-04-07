// Code your solutions in this file
const writeCards =(namesArr, eventName)=> {
 const thankYouArr = [];
 for (let i = 0; i < namesArr.length;i++){ 
    thankYouArr.push(
        "Thank you, ${namesArr[i]} for the wonderful ${eventname} gift!");
    }


    return thankYouArr;

 }

const countDown = (number) => {
    while (number >=0) {
        console.log (number);
        number--;

    }
};

