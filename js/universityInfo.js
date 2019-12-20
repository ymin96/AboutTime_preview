
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
        plugins: ['dayGrid'],
        header: {
            left: "",
            center: "title",
            //    right: "month,basicWeek,basicDay"
            right: "today prev,next"
        },
        editable: true,
        titleFormat: {
            month: "long",
            week: "long",
            day: "numeric"
        },
        locale: 'kr'
    });
    calendar.render();
}