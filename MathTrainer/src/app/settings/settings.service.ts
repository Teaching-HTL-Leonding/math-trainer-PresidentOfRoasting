import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public numberOfDigits:number = 1;
  public numberOfQuestions:number=15;
  public operators:boolean[]=[true,true,true,true];
  public operatorsString:string[]=['+','-','*','/'];
  public questions?:string[];
  public answers?:string[];
  constructor() { }

  public calculateSubstractionQuestion(operator:string){
    let firstNumber=0;
    let secondNumber=1;
    do {
      firstNumber=Math.random()*9999;
      secondNumber=Math.random()*9999;
    } while (secondNumber<firstNumber&&firstNumber.toString.length<=this.numberOfDigits&&secondNumber.toString.length<=this.numberOfDigits);
    let answer = firstNumber-secondNumber;
    this.answers?.push(answer.toString());
    this.questions?.push(firstNumber.toString()+operator+secondNumber.toString())
  }

  public calculateDivisionQuestion(operator:String){
    let firstNumber=0;
    let secondNumber=1;
    let test=0;
    do {
      firstNumber=Math.random()*9999;
      secondNumber=Math.random()*9999;
      test=(firstNumber/secondNumber)*10
    } while (test%10===0&&secondNumber<firstNumber&&firstNumber.toString.length<=this.numberOfDigits&&secondNumber.toString.length<=this.numberOfDigits);
    let answer = firstNumber/secondNumber;
    this.answers?.push(answer.toString());
    this.questions?.push(firstNumber.toString()+operator+secondNumber.toString())
  }

  public calculateAdditionQuestion(operator:string){
    let firstNumber=0;
    let secondNumber=1;
    do {
      firstNumber=Math.random()*9999;
      secondNumber=Math.random()*9999;
    } while (firstNumber.toString().length<=this.numberOfDigits&&secondNumber.toString().length<=this.numberOfDigits);
    let answer = firstNumber+secondNumber;
    this.answers?.push(answer.toString());
    this.questions?.push(firstNumber.toString()+operator+secondNumber.toString())

  }

  public calculateMultiplicationQuestion(operator:string){
    let firstNumber=0;
    let secondNumber=1;
    do {
      firstNumber=Math.random()*9999;
      secondNumber=Math.random()*9999;
    } while (firstNumber.toString().length<=this.numberOfDigits&&secondNumber.toString().length<=this.numberOfDigits);
    let answer = firstNumber*secondNumber;
    this.answers?.push(answer.toString());
    this.questions?.push(firstNumber.toString()+operator+secondNumber.toString())
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
          this.calculateAdditionQuestion(operator);
          break;

        case '-':
          this.calculateSubstractionQuestion(operator);
          break;

        case'*':
          this.calculateMultiplicationQuestion(operator);
          break;

        case '/':
          this.calculateDivisionQuestion(operator);
          break;
        default:
          break;
      }
      console.log(this.questions)
    }
  }

  public checkValues():Boolean{
    if(this.numberOfDigits<1||this.numberOfDigits>4){
      return false;
    }
    if(this.numberOfQuestions<15||this.numberOfQuestions>20){
      return false
    }
    let test = false;
    this.operators.forEach(operator => {
      if(operator){
        test=true;
      }
    });
    return test;
  }
}
