import { Exam } from "./Exam";
import { Question } from "./Question";

let quesion1=new Question("what is the black gold ",['oil','water','milk'],1);
let quesion2=new Question("what is the white gold ",['oil','cotton','milk'],2);
let quesions:Question[]=[];
let exam :Exam =new Exam(quesions);
exam.addQuestion(quesion1);
exam.addQuestion(quesion2);
exam.print();
console.log(`your grade : ${exam.grade([1,2])}`);
console.log(`your grade : ${exam.grade([0,2])}`);