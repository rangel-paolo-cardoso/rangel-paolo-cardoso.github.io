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

const countWatch = (obj) => { // Conta quantidade alunos viram aulas matemática.
  let alunos = 0;
  for (let lesson in obj) {
    if (obj[lesson]['materia'] === 'Matemática')
      alunos += obj[lesson]['numeroEstudantes'];
  }
  return `Temos ${alunos} alunos que assistiram as aulas de matemática.`;
};

console.log(countWatch(allLesson));
