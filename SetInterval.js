var id
function showTime(){
    let dateTime=new Date();
    let time=dateTime.toLocaleTimeString();
    console.log(time)
     id=setTimeout(showTime,1000)
}
showTime()
clearTimeout(id)