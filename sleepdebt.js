const getSleepHours = day => {
    day.toLowerCase();

    switch (day) {
        case 'monday':
          return 10;
        case 'tuesday':
          return 8;
        case 'wednesday':
          return 8;
        case 'thursday':
          return 8;
        case 'friday':
          return 8;
        case 'saturday':
          return 8;
        case 'sunday':
          return 8;
    }
};

//console.log(getSleepHours('wednesday'));
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 

const getIdealSleepHours = () => {
  const idealHours = 8;
    return idealHours * 7;
};
//console.log(getIdealSleepHours());
const calculateSleepDebts = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
      console.log(`The user got the perfect amount of sleep, ${actualSleepHours} hours.`); 
   } else if (actualSleepHours > idealSleepHours) {
     console.log(`The user got more sleep than needed ${actualSleepHours - idealSleepHours}`);
   } else { 
    console.log(`The use should get some rest. only ${idealSleepHours - actualSleepHours}`);
 
    } 
};

calculateSleepDebts();
