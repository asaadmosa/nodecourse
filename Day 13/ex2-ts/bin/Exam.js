"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam(questions) {
        this.questions = questions;
    }
    Exam.prototype.addQuestion = function (ques) {
        this.questions.push(ques);
    };
    Exam.prototype.print = function () {
        this.questions.forEach(function (element, index) {
            console.log(index + ". " + element.capation + " : ");
            element.answers.forEach(function (elementans, index) {
                console.log(index + ". " + elementans + " ");
            });
        });
    };
    Exam.prototype.grade = function (answers) {
        var g = 0;
        this.questions.forEach(function (value, index) {
            if (value.correctindex == answers[index])
                g++;
        });
        return g / this.questions.length * 100;
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=Exam.js.map