const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// Objeto com os 3 lessons dentro, atrubuído a allLessons.
const allLesson = Object.assign({}, {lesson1, lesson2, lesson3});

const creatViewClass = (obj, teacher) => { // Gera relatório do Professor.
  let report = {professor: teacher, aulas: [], estudantes: 0};
  for (let lesson in obj) {
    if (obj[lesson]['professor'] === teacher) {
      report.aulas.push(obj[lesson].materia);
      report.estudantes += obj[lesson].numeroEstudantes;
    }
  }
  return report;
};

console.log(creatViewClass(allLesson, 'Maria Clara'));
