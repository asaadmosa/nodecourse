import { Injectable } from '@angular/core';
import { ALLQUESTIONS } from '../models/all-questions';
import { question } from '../models/question.model';

//the purpose is to load all data from the model
//also to create some other services that will be used by the components

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  private allQuestions: question[]=[];
  
  constructor() { 
    this.allQuestions = Object.keys(ALLQUESTIONS).map((key,index) => ({
      capation: ALLQUESTIONS[index].capation,
      answers:ALLQUESTIONS[index].answers,
      correctAnswer: ALLQUESTIONS[index].correctAnswer,
      userAnswer: ALLQUESTIONS[index].userAnswer
    }));
    console.log(this.allQuestions);
  }

  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }
  
  async search(key:number) : Promise<question>{
    let res =this.allQuestions[key];
    await this.delay(1000);
    return res;
  }

}
