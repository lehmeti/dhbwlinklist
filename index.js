function openInputLink() {
    let kurs = document.getElementById("linkInput").value;
    if(kurs === '') {
        return;
    } else {
        let prefix = "https://webmail.dhbw-loerrach.de/owa/calendar/kal-";
        let suffix = "@dhbw-loerrach.de/Kalender/calendar.html";
        let link = prefix.concat(kurs, suffix);
        window.open(link, '_blank');
    }
}