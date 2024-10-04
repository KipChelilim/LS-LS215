"use strict";

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  return {
    studentGrades: Object.values(scores).map(getStudentGrade),
    exams: getExamStatistics(scores),
  };
}

function getStudentGrade(student) {
  let averageExamScore = getAverage(student.scores.exams);
  let totalExerciseScore = getTotal(student.scores.exercises)
  let numericGrade = getNumericGrade(averageExamScore, totalExerciseScore);
  let letterGrade = getLetterGrade(numericGrade)

  return `${numericGrade} (${letterGrade})`;
}

function getAverage(array) {
  return array.reduce((sum, value) => sum + value) / array.length;
}

function getTotal(array) {
  return array.reduce((sum, value) => sum + value);
}

function getNumericGrade(examScore, exerciseScore) {
  const WEIGHTS = { exam: .65, exercise: .35, };
  let grade = (examScore * WEIGHTS.exam) + (exerciseScore  * WEIGHTS.exercise);
  return Math.round(grade);
}

function getLetterGrade(grade) {
  switch (true) {
    case grade >= 93:
      return 'A';
      break;
    case grade >= 85:
      return 'B';
      break;
    case grade >= 77:
      return 'C'
      break;
    case grade >= 69:
      return 'D';
      break;
    case grade >= 60:
      return 'E';
      break;
    default:
      return 'F'
  }
}

function getExamStatistics(scores) {
  let scoresForEachExam = groupScoresByExam(scores)

  return scoresForEachExam.map((examScores) => {
    return {
      average: roundTo(getAverage(examScores), 2),
      minimum: Math.min(...examScores),
      maximum: Math.max(...examScores),
    }
  });
}

function groupScoresByExam(scores) {
  let groupedScores = []

  Object.values(scores).forEach((student) => {
    student.scores.exams.forEach((grade, exam) => {
      if (groupedScores[exam]) {
        groupedScores[exam].push(grade)
      } else {
        groupedScores[exam] = [grade]
      }
    });
  });

  return groupedScores;
}

function roundTo(num, precision) {
  const factor = Math.pow(10, precision)
  return Math.round(num * factor) / factor
}


console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 }
//   ]
// }

/**
  * for each student,
  *   calculate final grade
  *     calculate average exam score
  *       get exam scores
  *       calculate flat average
  *     calculate total exercise score
  *       sum exercise scores
  *   figure out letter grade
  * get array of all exam scores
  * transpose exams by index
  * transform each exam into object containing stat
*/