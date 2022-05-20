let StudentData = JSON.parse(localStorage.getItem("Students"));
console.log(StudentData);
let count1=0;
let count2=0;
let count3=0;

StudentData.forEach(function (elem, index) {
    let StudentDiv = document.createElement("div");
    StudentDiv.id = "StdDiv"

    let StudentImg = document.createElement("img");
    StudentImg.src = elem.SUrl;

    let StudentName = document.createElement("h2");
    StudentName.innerText = elem.SName;

    let StudentCourse = document.createElement("h4");
    StudentCourse.innerText = "Course : " + elem.SCourse;

    let StudentUnit = document.createElement("h4");
    StudentUnit.innerText = "Unit : " + elem.SUnit;

    let StudentBatch = document.createElement("h4");
    StudentBatch.innerText = "Batch : " + elem.SBatch;

    let StudentRemove = document.createElement("button");
    StudentRemove.innerText = "Remove";
    StudentRemove.id = "remove";
    StudentRemove.addEventListener("click", function () {
        removeStudent(elem, index);
    })

    StudentDiv.append(StudentImg, StudentName, StudentCourse, StudentUnit, StudentBatch, StudentRemove);
    document.querySelector("#container").append(StudentDiv);

    if(elem.SBatch == 1){
        count1++;
    }
    else if(elem.SBatch == 2){
        count2++;
    }
    else if(elem.SBatch == 3){
        count3++;
    }
})

function removeStudent(elem, index) {
    StudentData.splice(index, 1);
    localStorage.setItem("Students", JSON.stringify(StudentData));
    window.location.reload();
}

document.getElementById("batch1").innerText = count1;
document.getElementById("batch2").innerText = count2;
document.getElementById("batch3").innerText = count3;