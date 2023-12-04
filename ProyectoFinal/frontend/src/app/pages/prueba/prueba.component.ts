import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {
  preguntas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  respuestasHiragana: string[] = ["C","B","B","B","C","A","C","B","B","A"];
  respuestasKatakana: string[] = ["C","B","C","B","A","C","C","B","A","A"];
  respuestasKanji: string[] = ["A","C","B","A","B","C","B","B","A","C"];

  respuestasUsuarioHiragana: string[] = Array(10).fill('');
  respuestasUsuarioKatakana: string[] = Array(10).fill('');
  respuestasUsuarioKanji: string[] = Array(10).fill('');

  seleccionarRespuestaHiragana(pregunta: number, respuesta: string) {
    console.log(`Pregunta ${pregunta} (Hiragana): Respuesta seleccionada - ${respuesta}`);
    // Almacena la respuesta del usuario
    this.respuestasUsuarioHiragana[pregunta - 1] = respuesta;
  }

  evaluarHiragana() {
    console.log('Evaluar respuestas de Hiragana');
    // Lógica para evaluar respuestas de Hiragana
    console.log('Respuestas de Hiragana del usuario:', this.respuestasUsuarioHiragana);
    // Comparar con respuestas correctas (this.respuestasHiragana) y realizar la lógica de evaluación
    // Por ejemplo, contar respuestas correctas, calcular puntajes, etc.
  }

  seleccionarRespuestaKatakana(pregunta: number, respuesta: string) {
    console.log(`Pregunta ${pregunta} (Katakana): Respuesta seleccionada - ${respuesta}`);
    // Almacena la respuesta del usuario
    this.respuestasUsuarioKatakana[pregunta - 1] = respuesta;
  }

  evaluarKatakana() {
    console.log('Evaluar respuestas de Katakana');
    // Lógica para evaluar respuestas de Katakana
    console.log('Respuestas de Katakana del usuario:', this.respuestasUsuarioKatakana);
    // Comparar con respuestas correctas (this.respuestasKatakana) y realizar la lógica de evaluación
  }

  seleccionarRespuestaKanji(pregunta: number, respuesta: string) {
    console.log(`Pregunta ${pregunta} (Kanji): Respuesta seleccionada - ${respuesta}`);
    // Almacena la respuesta del usuario
    this.respuestasUsuarioKanji[pregunta - 1] = respuesta;
  }

  evaluarKanji() {
    console.log('Evaluar respuestas de Kanji');
    // Lógica para evaluar respuestas de Kanji
    console.log('Respuestas de Kanji del usuario:', this.respuestasUsuarioKanji);
    // Comparar con respuestas correctas (this.respuestasKanji) y realizar la lógica de evaluación
  }
}
