function positiveOrNegative(x){
    let checker = false;
    if(x >= 0){
        checker = true;
    }
    return checker;
}

if(positiveOrNegative(0)){
    console.log("positive number");
}
else{
    console.log("Negative number");
}