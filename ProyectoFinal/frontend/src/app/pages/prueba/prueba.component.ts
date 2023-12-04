import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {
  userAnswers: any = {
    question_1: {},
    question_2: {},
    question_3: {}
  };

  correctAnswers: any = {
    question_1: { 1: 'C', 2: 'B', 3: 'B', 4: 'B', 5: 'C', 6: 'A', 7: 'C', 8: 'B', 9: 'B', 10: 'A' },
    question_2: { 1: 'C', 2: 'B', 3: 'C', 4: 'B', 5: 'A', 6: 'C', 7: 'C', 8: 'B', 9: 'A', 10: 'A' },
    question_3: { 1: 'A', 2: 'C', 3: 'B', 4: 'A', 5: 'B', 6: 'C', 7: 'B', 8: 'B', 9: 'A', 10: 'C' }
  };

  results: any = {
    question_1: '',
    question_2: '',
    question_3: ''
  };

  evaluateAnswers(question: string) {
    const userAnswers = this.userAnswers[question];
    const correctAnswers = this.correctAnswers[question];

    const result = Object.keys(userAnswers).reduce((acc, key) => {
      if (userAnswers[key] === correctAnswers[key]) {
        acc.correct++;
      } else {
        acc.incorrect++;
      }
      return acc;
    }, { correct: 0, incorrect: 0 });

    this.results[question] = `Preguntas correctas: ${result.correct}`;
  }

  resetQuiz(question: string) {
    this.userAnswers[question] = {};
    this.results[question] = ''; 
  }
}
