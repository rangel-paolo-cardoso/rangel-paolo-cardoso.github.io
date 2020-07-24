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

const verifyPair = (obj, chave, valor) => (obj[chave] === valor); // Verify if the key and value downs match.

console.log(verifyPair(lesson3, 'turno', 'noite')); // Retorna true.
console.log(verifyPair(lesson3, 'materia', 'Maria Clara')); // Retorna false.
