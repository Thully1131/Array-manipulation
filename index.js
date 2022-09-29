var arrStudents = [];

var holder = document.getElementById('studentList');

var showList = function () {
    holder.innerHTML = '';
    for (i = 0; i < arrStudents.length; i++) {
        holder.innerHTML = holder.innerHTML + '<p>' + arrStudents[i] + '</p> <button onclick="removeStudent(' + i + ')">Remove</button> <button onclick="editStudent('+ i +')"> edit</button> <button onclick="saveStudent('+ i +')"> save </button>'
    }
}

showList();

var studentName = document.getElementById('student')

function addToList() {
    arrStudents.push(studentName.value)
    showList()
    console.log(arrStudents)
}
function removeStudent(idx) {
    arrStudents.splice(idx, 1)
    showList()
    console.log(arrStudents)
}

function editStudent(idx) {
    studentName.value = arrStudents[idx]
    selectedIndex = idx
    showList()
}
 
 function saveStudent(idx) {
    arrStudents.splice(selectedIndex, 1, studentName.value );
    showList()
    console.log(arrStudents)
 }

 





