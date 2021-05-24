import { Question } from "./Question";

export class Exam{
        private questions : Question[]=[];

    addQuestion(ques: Question): void{
        this.questions.push(ques);
    }

    print() : void{
        
        this.questions.forEach((element,index) => {
            console.log(`${index}. ${element.capation} : `)
            element.answers.forEach((elementans,index)=>{
                console.log(`${index}. ${elementans} `);
            }); 
        });
    }

    grade(answers : number[]) : number{
        let g: number = 0;
        this.questions.forEach((value, index) =>{
            if(value.correctindex== answers[index]) g++;
        });
        return g /this.questions.length*100;
    }
}