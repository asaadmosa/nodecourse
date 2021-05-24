"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exam_1 = require("./Exam");
var Question_1 = require("./Question");
var quesion1 = new Question_1.Question("what is the black gold ", ['oil', 'water', 'milk'], 1);
var quesion2 = new Question_1.Question("what is the white gold ", ['oil', 'cotton', 'milk'], 2);
var quesions = [];
var exam = new Exam_1.Exam(quesions);
exam.addQuestion(quesion1);
exam.addQuestion(quesion2);
exam.print();
console.log("your grade : " + exam.grade([1, 2]));
console.log("your grade : " + exam.grade([0, 2]));
//# sourceMappingURL=Main.js.map