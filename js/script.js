var listCourses = Array()

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
    let showNameCourse = document.getElementById('name'); 
    let showDurationCourse = document.getElementById('duration'); 
    let showStartCourse = document.getElementById('start'); 
    let showEndCourse = document.getElementById('end'); 
    let showTeacherCourse = document.getElementById('teacher');

    listCourses.push(course);

    for (let i = 0; i < listCourses.length; i++) {
        showNameCourse.innerText = listCourses[i].name;
        showDurationCourse.innerText = `${listCourses[i].duration} horas`;
        showStartCourse.innerText = listCourses[i].start;
        showEndCourse.innerText = listCourses[i].end;
        showTeacherCourse.innerText = listCourses[i].teacher;
    };
    
    // showNameCourse.innerText = course['name'];
    // showDurationCourse.innerText = `${course['duration']} horas`;
    // showStartCourse.innerText = course['start'];
    // showEndCourse.innerText = course['end'];
    // showTeacherCourse.innerText = course['teacher'];
}