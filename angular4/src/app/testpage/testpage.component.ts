import { Component, OnInit } from '@angular/core';
import { questions } from '../Questions';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
 

  constructor() { }
  QuestionsId = 0;
  Questions: any = questions[this.QuestionsId]
  isNext = true;
  correctAnswers = 0;
  wrongAnswers = 0;


  next(){

    let driversDiv = document.querySelector('.drivers') as HTMLDivElement
    driversDiv.style.pointerEvents ='all'
    this.QuestionsId++;
    if(this.QuestionsId < questions.length){
      this.Questions = questions[this.QuestionsId]


    }
    this.isNext = true;


  }
  checkAnswer(event: any){
    let divfail = document.querySelector('.fail') as HTMLDivElement
    if(this.wrongAnswers > 2){
      divfail.style.display = 'block'
      



    }
    let driversDiv = document.querySelector('.drivers') as HTMLDivElement
    driversDiv.style.pointerEvents = 'none'
    this.isNext = false;
    let corretAnswer = document.querySelector('.correct')
    let isCorrect = event.target.classList.contains('correct')
    if(isCorrect){
      event.target.classList.replace('bg-white', 'bg-success')
      this.correctAnswers++;
      
    }
    else{
      event.target.classList.replace('bg-white', 'bg-danger')
      corretAnswer?.classList.replace('bg-white','bg-success')
      this.wrongAnswers++;

    }

    

  }
  reload(){
    window.location.reload()


  }

  ngOnInit(): void {
    

    
  }

}
