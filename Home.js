document.querySelector("#form").addEventListener("submit", GetData);
let StudentData = JSON.parse(localStorage.getItem("Students")) || [];
let count1 = 0;
let count2 = 0;
let count3 = 0;

function GetData() {
    event.preventDefault();

    function Student(name, course, unit, url, batch) {
        this.SName = name;
        this.SCourse = course;
        this.SUnit = unit;
        this.SUrl = url;
        this.SBatch = batch;
    }
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let url = form.imageurl.value;
    let batch = form.batch.value;

    let StudentObj = new Student(name, course, unit, url, batch);

    StudentData.push(StudentObj);
    localStorage.setItem("Students", JSON.stringify(StudentData));
    console.log(StudentData);
    window.location.reload();
    window.location = "List.html";
}

StudentData.forEach(function (elem) {
    console.log(elem.SBatch)

    if (elem.SBatch == 1) {
        count1++;
    }
    else if (elem.SBatch == 2) {
        count2++;
    }
    else if (elem.SBatch == 3) {
        count3++;
    }

});


document.getElementById("batch1").innerText = count1;
document.getElementById("batch2").innerText = count2;
document.getElementById("batch3").innerText = count3;