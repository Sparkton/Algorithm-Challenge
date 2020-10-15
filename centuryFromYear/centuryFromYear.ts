function centuryFromYear(year: number): number {
    if(year < 101){
        return 1;
    }else if(year % 100 == 0){
        return year/100;
    }else{
        return (Math.floor(year/100) + 1);
    }
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));