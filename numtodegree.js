function numberToDegree (num, degree) {
    if (degree == 1) {
      return num; 
    } else {
      return num * numberToDegree (num, degree - 1); 
    }
  }
  
  console.log(numberToDegree(3, 5));