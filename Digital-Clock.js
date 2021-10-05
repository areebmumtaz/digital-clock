let clock = () => {

  let date = new Date();

  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();


  let period = "AM";

  /* Converting 24 hour time format 'hour' value to AM/PM 'hour' value */
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  /* Adding leading zeros if a value is single digit (less than 10) */
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  /* Putting the time values into a 'template literal string' */
  let time = `${hrs}:${mins}:${secs}:${period}`;

  /* Assigning the time 'string' to the 'element' with the id "clock" */
  document.getElementById("clock").innerText = time;

  /* executes the clock() function again after 1000 milliseconds (1 second) */
  setTimeout(clock, 1000);

};

/* Executes the clock() function the first time */
clock();


/* Note: This is equivalent to 
      removing  setTimeout(clock, 1000)  from inside the clock() function 
      and removing  clock();  outside the clock() function
      
      ...and instead, using   setInterval(clock, 1000) outside the clock() function
*/
