function getWindow(periods , month){
    if (periods === 1 && 1 <= month && month <= 12) {
        return 0;
    } else if (periods === 1 && month > 12) {
        return -1;
    } else if (periods === 2 && 1 <= month && month <= 6){
        return 0;
    }else if (periods === 2 && 7 <= month && month <= 12){
        return 1;
    } else if(periods === 2 && 12 <= month){
        return -1;
    }
    else if(periods === 12 && 1 <= month && month <= 12){
        return month-1;
    }else if(periods === 12 && month >= 12){
        return -1;
    }
    else if(periods === 4 && 1 <= month && month <= 3){
        return 0;
    }else if(periods === 4 && 6 <= month && month <= 8){
        return 2;
    }else{
        return -1;
    }
    
    
    }
    
    for (let m = -5; m <= 15; m++) {
        const noOfPeriods = 12; // possible values -> 1, 2, 4, 12
        const currentMonth = m;
        console.log(
          `currentMonth=${currentMonth} : noOfPeriods=${noOfPeriods} : window=${getWindow(
            noOfPeriods,
            currentMonth
          )}`
        );
      }
    console.log(getWindow(12,12))
    
    
    //pesudo code

