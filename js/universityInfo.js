
$(document).ready(function () {
    calendarEvent();
});

function calendarEvent(eventData) {
    var calendarEl = document.getElementById('calendar');
    $("#calender").html("");
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction','dayGrid'],
        header: {
            left: "",
            center: "title",
            //    right: "month,basicWeek,basicDay"
            right: "today prev,next"
        },
        selectable: true,
        editable: true,
        locale: 'kr'
    });
    calendar.render();
}