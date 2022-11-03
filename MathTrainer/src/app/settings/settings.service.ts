import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public numberOfDigits:number = 1;
  public numberOfQuestions:number=15;
  public operators:boolean[]=[true,true,true,true];
  public operatorsString:string[]=['+','-','*','/'];
  public questions?:string[]=[];
  public answers:string[]=[];
  constructor() { }

  public calculateSubstractionQuestion(operator:string){
    let firstNumber=0;
    let secondNumber=1;
    let randomMax:number[]=[9,99,999,9999]
    do {
      firstNumber=Math.floor(Math.random()*randomMax[this.numberOfDigits-1]);
      secondNumber=Math.floor(Math.random()*randomMax[this.numberOfDigits-1]);
    } while (secondNumber>firstNumber);
    let answer = firstNumber-secondNumber;
    this.answers?.push(answer.toString());
    this.questions?.push(firstNumber.toString()+operator+secondNumber.toString())
  }

  public calculateDivisionQuestion(operator:String){
    let firstNumber=0;
    let secondNumber=1;
    let test=0;
    let randomMax:number[]=[9,99,999,9999]
    do {
      firstNumber=Math.floor(Math.random()*randomMax[this.numberOfDigits-1]);
      secondNumber=Math.floor(Math.random()*randomMax[this.numberOfDigits-1]);
      test=(firstNumber/secondNumber)*10
    } while (test%10!==0&&secondNumber>firstNumber);
    let answer = firstNumber/secondNumber;
    this.answers?.push(answer.toString());
    this.questions?.push(firstNumber.toString()+operator+secondNumber.toString())
  }

  public calculateAdditionQuestion(operator:string){
    let firstNumber=0;
    let secondNumber=1;
    let randomMax:number[]=[9,99,999,9999]

    firstNumber=Math.floor(Math.random()*randomMax[this.numberOfDigits-1]);
    secondNumber=Math.floor(Math.random()*randomMax[this.numberOfDigits-1]);

    let answer = firstNumber+secondNumber;
    this.answers?.push(answer.toString());
    this.questions?.push(firstNumber.toString()+operator+secondNumber.toString())

  }

  public calculateMultiplicationQuestion(operator:string){
    let firstNumber=0;
    let secondNumber=1;
    let randomMax:number[]=[9,99,999,9999]

    firstNumber=Math.floor(Math.random()*randomMax[this.numberOfDigits-1]);
    secondNumber=Math.floor(Math.random()*randomMax[this.numberOfDigits-1]);

    let answer = firstNumber*secondNumber;
    this.answers?.push(answer.toString());
    this.questions?.push(firstNumber.toString()+operator+secondNumber.toString())
  }

  public calculateQuestions(){
    let allowedOperators:string[]=[];
    for (let i = 0; i < 4; i++) {
      if(this.operators[i]){
        allowedOperators[i]=this.operatorsString[i];
      }
    }
    for (let i = 0; i < this.numberOfQuestions; i++) {
      let operator:string = allowedOperators[Math.floor(Math.random()*4)];
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
      console.log(Math.floor(Math.random()*4))
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
