document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("provForm");
    const titelInput = document.querySelector(".input_titel");
    const subjectInput = document.querySelector(".input_subject");
    const kursInput = document.querySelector(".input_kurs");
    const dateInput = document.querySelector(".input_date");
    const fileInput = document.getElementById("fileInput");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const provData = {
            titel: titelInput.value,
            ämne: subjectInput.value,
            kurs: kursInput.value,
            datum: dateInput.value,
            filnamn: fileInput.files.length > 0 ? fileInput.files[0].name : "Ingen fil"
        };

        const gamlaProv = JSON.parse(localStorage.getItem("provLista")) || [];

        gamlaProv.push(provData);

        localStorage.setItem("provLista", JSON.stringify(gamlaProv));

        alert("Prov sparat!");
        form.reset();
    });
});
