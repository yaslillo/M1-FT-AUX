function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
     // OPCIÓN CON EXTRA CREDIT!!!!!
     console.log(time)
  if (
    time.slice(-2) === "AM" &&
    parseInt(time.slice(0, 2),10) < 13 && //revisamos horas
    parseInt(time.slice(3, 5), 10) < 60 &&//revisamos minutos 
    parseInt(time.slice(6, 8), 10) < 60  //revisamos segundos
                          //  convierte a numeros para revisarlos
                          //parseint recibe el sitema decimal
  ) {
    if (time.slice(0, 2) === "12") {
      return "00" + time.slice(2, 8);
    } else {
      return time.slice(0, 8);
    }
  } else {
    if (
        time.slice(-2) === "PM" &&
      parseInt(time.slice(0, 2), 10) < 13 &&
      parseInt(time.slice(3, 5), 10) < 60 &&
      parseInt(time.slice(6, 8), 10) < 60
    ) {
      let hora = parseInt(time.slice(0, 2), 10) + 12;
      if (hora === 24) {
        hora = "12";
      }
      return hora + time.slice(2, 8);//minutos y segundos.
    }
    return false;
  }


}

module.exports = {
    timeConversion
}

// console.log(timeConversion("03:15:00PM"))//("15:15:00");
// console.log(timeConversion("01:12:31AM"))//("01:12:31")
// console.log(timeConversion("12:15:00PM"))//("12:15:00");
// console.log(timeConversion("12:12:31AM"))//("00:12:31")
// console.log(timeConversion("35:15:00PM"))//(false);
// console.log(timeConversion("12:78:31AM"))//(false);
// console.log(timeConversion("12:15:78AM"))//(false);
// console.log(timeConversion(""))//(false);
// console.log(timeConversion("15:15AM"))//(false)
    