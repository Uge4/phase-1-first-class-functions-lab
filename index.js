// Code your solution in this file!

// function returnFirstTwoDrivers (drivers) {
//     const firstTwoDrivers = [...drivers].slice(2).pop();
//     console.log(firstTwoDrivers);
// }

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    const firstTwoDrivers = [...drivers].slice(0, 2);
    return firstTwoDrivers;
}

returnFirstTwoDrivers(drivers)

function returnLastTwoDrivers(drivers){
    const lastTwoDrivers = [...drivers].slice(-2);
    return lastTwoDrivers;

}
returnLastTwoDrivers(drivers)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// function createFareMultiplier(fare){
//     // return function fareMultiplier(){fare * 2};
//     return function fareQuintupler(){fare * 5};
// }

let createFareMultiplier = (multiplier) => {
    function fareMultiplier(fare) {        
     return fare * multiplier 
    }
    return fareMultiplier
}


function fareDoubler(fare){
    return fare = fare * 2
    
}

fareDoubler(40);


function fareTripler(fare){
    return fare = fare * 3;
}

fareTripler(4)


function selectDifferentDrivers(drivers, function2){
    
    if(function2 === returnFirstTwoDrivers){
        return returnFirstTwoDrivers([...drivers].slice(0, 2));   
    }
    else if(function2 === returnLastTwoDrivers){
        return returnLastTwoDrivers([...drivers].slice(-2));
    }
}



