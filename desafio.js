var arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


arrayNumbers.forEach(number => {
    if(number%2 != 0){
        console.log(number);
    }
});

arrayNumbers.forEach(number => {
    if(number%2 == 0){
        console.log(number);
    }
});