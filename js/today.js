const clock = document.querySelector(".chat__timestamp");

function getToday() {
    const today = new Date(); //new Date()는 Date 객체를 불러옴, 이 함수를 인수 없이 호출하면 현재 날짜 및 시간이 저장된 date 객체가 반환된다.

    const week = ['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'];
    const months =['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];

    const day = week[today.getDay()];
    const month = months[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();
    
    clock.innerText = `${day}day, ${month} ${date}, ${year}`; 
    //Date 객체의 여러 메소드를 활용해, 현재 시간 값을 얻어올 수 있음. 이를 innerText로 화면에 표시한다.
}
getToday();