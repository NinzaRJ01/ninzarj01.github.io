function currentTime() {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Oct','Nov','Dec'];
    let date = new Date(); 
    //for date
    let day = days[date.getDay()];
    let curDate =  date.getDate();
    let month = months[date.getMonth()-1];
    let year = date.getFullYear();

    //for clock
    let hh = date.getHours();
    let mm = date.getMinutes();
    
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;  
    let time = hh + ":" + mm + " " + session;
    let fullDate = `${day}, ${curDate} ${month} ${year}`; 
    document.getElementById("clock").innerText = time; 
    document.getElementById("date").innerText = fullDate; 
    let t = setTimeout(function(){ currentTime() }, 10000);
  }
  currentTime();