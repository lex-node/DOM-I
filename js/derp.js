function findUnknowNumber(x,y,z) {
    let counter = 0;

    while (counter % 3 !== x) {
        counter++;
    }

    console.log(counter);
    while (counter % 5 !== y) {
        counter++;
    }
    console.log(counter);
    while (counter % 7 !== z) {
        counter++;
    }
    console.log(counter);
    return counter;

}


console.log(findUnknowNumber(2, 3, 2));