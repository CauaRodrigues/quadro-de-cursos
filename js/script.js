var listCourses = Array()
var listTablesCursos = Array()

function done() {
    var nameCourse, durationCourse, startDateCourse, endDateCourse, teacherCourse;
    
    nameCourse = document.getElementById('name-course').value;
    durationCourse = document.getElementById('hours-course').value;
    startDateCourse = document.getElementById('start-date').value;
    endDateCourse = document.getElementById('end-date').value;
    teacherCourse = document.getElementById('name-teacher').value;

    let course = {
        name: nameCourse,
        duration: durationCourse,
        start: startDateCourse.toLocaleString("pt-BR"),
        end: endDateCourse,
        teacher: teacherCourse
    }

    clearInputs()

    showCourse(course)
}

function clearInputs(){
    document.getElementById('name-course').value = "";
    document.getElementById('hours-course').value = "";
    document.getElementById('start-date').value = "";
    document.getElementById('end-date').value = "";
    document.getElementById('name-teacher').value = "";
}

function showCourse(course){

    listCourses.push(course);
    
    var tableCourse = 
        `
        <table>
            <thead>
                <tr>
                    <th colspan="2" id="name">${course['name']}</th>
                </tr>
            </thead>
            <tr>
                <th>Duração:</th>
                <td id="duration">${course['duration']} Horas</td>
            </tr>
            <tr>
                <th>Data de Início:</th>
                <td id="start">${course['start']}</td>
            </tr>
            <tr>
                <th>Data Final:</th>
                <td id="end">${course['end']}</td>
            </tr>        
            <tr>
                <th class="last">Professor:</th>
                <td id="teacher" class="last">${course['teacher']}</td>
            </tr>
        </table>
        `;

    listTablesCursos.push(tableCourse);

    document.getElementById("showTable").innerHTML = listTablesCursos;

}