const classStudents = {
    "one": [
        { id: 1, name: "Student A", gpa: 4.45, marks: 74 },
        { id: 2, name: "Student B", gpa: 4.45, marks: 74 },
        { id: 3, name: "Student C", gpa: 4.45, marks: 74 }
    ],
    "two": [
        { id: 4, name: "Student D", gpa: 4.45, marks: 74 },
        { id: 5, name: "Student E", gpa: 4.45, marks: 74 },
        { id: 6, name: "Student F", gpa: 4.45, marks: 74 }
    ],
    "three": [
        { id: 7, name: "Student G", gpa: 4.45, marks: 74 },
        { id: 8, name: "Student H", gpa: 4.45, marks: 74 },
        { id: 9, name: "Student I", gpa: 4.45, marks: 74 }
    ],
    "four": [
        { id: 10, name: "Student J", gpa: 4.45, marks: 74 },
        { id: 11, name: "Student K", gpa: 4.45, marks: 74 },
        { id: 12, name: "Student L", gpa: 4.45, marks: 74 }
    ],
    "five": [
        { id: 13, name: "Student M", gpa: 4.45, marks: 74 },
        { id: 14, name: "Student N", gpa: 4.45, marks: 74 },
        { id: 15, name: "Student O", gpa: 4.45, marks: 74 }
    ],
    "six": [
        { id: 16, name: "Student P", gpa: 4.45, marks: 74 },
        { id: 17, name: "Student Q", gpa: 4.45, marks: 74 },
        { id: 18, name: "Student R", gpa: 4.45, marks: 74 }
    ]
};

document.getElementById("select-class").addEventListener("change", function() {
    const selectedClass = this.value;
    const students = classStudents[selectedClass] || [];

    const tableBody = document.getElementById("student-table").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    if (students.length > 0) {
        students.forEach(student => {
            const row = document.createElement("tr");

            const idCell = document.createElement("td");
            idCell.textContent = student.id;
            row.appendChild(idCell);

            const nameCell = document.createElement("td");
            nameCell.textContent = student.name;
            row.appendChild(nameCell);

            const gpaCell = document.createElement("td");
            gpaCell.textContent = student.gpa;
            row.appendChild(gpaCell);

            const marksCell = document.createElement("td");
            marksCell.textContent = student.marks;
            row.appendChild(marksCell);

            tableBody.appendChild(row);
        });
    } else {
        const noDataRow = document.createElement("tr");
        const noDataCell = document.createElement("td");
        noDataCell.colSpan = 3;
        noDataCell.textContent = "No students available for this class.";
        noDataRow.appendChild(noDataCell);
        tableBody.appendChild(noDataRow);
    }
});

function sub(){
    alert("Submission Successfull");
}
