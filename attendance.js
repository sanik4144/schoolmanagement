const classStudents = {
    "one": [
        { id: 1, name: "Student A" },
        { id: 2, name: "Student B" },
        { id: 3, name: "Student C" }
    ],
    "two": [
        { id: 4, name: "Student D" },
        { id: 5, name: "Student E" },
        { id: 6, name: "Student F" }
    ],
    "three": [
        { id: 7, name: "Student G" },
        { id: 8, name: "Student H" },
        { id: 9, name: "Student I" }
    ],
    "four": [
        { id: 10, name: "Student J" },
        { id: 11, name: "Student K" },
        { id: 12, name: "Student L" }
    ],
    "five": [
        { id: 13, name: "Student M" },
        { id: 14, name: "Student N" },
        { id: 15, name: "Student O" }
    ],
    "six": [
        { id: 16, name: "Student P" },
        { id: 17, name: "Student Q" },
        { id: 18, name: "Student R" }
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

            const checkboxCell = document.createElement("td");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = `student-${student.id}`;
            checkboxCell.appendChild(checkbox);
            row.appendChild(checkboxCell);

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
