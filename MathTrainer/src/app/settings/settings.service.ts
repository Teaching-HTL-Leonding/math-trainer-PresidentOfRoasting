import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public numberOfDigits:number = 1;
  public numberOfQuestions:number=10;
  public operators:boolean[]=[true,true,true,true];
  public operatorsString:string[]=['+','-','*','/'];
  public questions?:string[];
  public answers?:string[];
  constructor() { }

  public calculateSubstractionQuestion(operator:string){
    let firstNumber:Number=0;
    let secondNumber:Number=1;
    do {
      firstNumber=Math.random()*9999;
    } while (secondNumber<firstNumber&&firstNumber.toString.length<=this.numberOfDigits&&secondNumber.toString.length<=this.numberOfDigits);

    this.questions?.push(firstNumber.toString+operator+secondNumber.toString)
  }

  public calculateDivisionQuestion(operator:String){

  }

  public calculateAdditionQuestion(operator:string){
    let firstNumber:Number=0;
    let secondNumber:Number=1;
    do {
      firstNumber=Math.random()*9999;
    } while (firstNumber.toString.length<=this.numberOfDigits&&secondNumber.toString.length<=this.numberOfDigits);

    this.questions?.push(firstNumber.toString+operator+secondNumber.toString)

  }

  public calculateMultiplicationQuestion(operator:string){
    let firstNumber:Number=0;
    let secondNumber:Number=1;
    do {
      firstNumber=Math.random()*9999;
    } while (firstNumber.toString.length<=this.numberOfDigits&&secondNumber.toString.length<=this.numberOfDigits);

    this.questions?.push(firstNumber.toString+operator+secondNumber.toString)
  }

  public calculateQuestions(){
    let allowedOperators=[];
    for (let i = 0; i < 4; i++) {
      if(this.operators[i]){
        allowedOperators[i]=this.operatorsString[i];
      }
      let operator = allowedOperators[Math.random()*4];
      switch (operator) {
        case '+':

          break;

        case '-':

          break;

        case'*':

          break;

        case '/':

          break;
        default:
          break;
      }
    }
    for (let i = 0; i < this.numberOfQuestions; i++) {
      let random:number=Math.random()*4;

    }
  }
}
