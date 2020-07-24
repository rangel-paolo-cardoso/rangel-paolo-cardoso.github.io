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

// Retorna valor com base na posição da chave.
const valueByPos = (obj, num) => `Output: ${obj[Object.keys(obj)[num]]}`;

console.log(valueByPos(lesson1, 0));
