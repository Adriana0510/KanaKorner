import { Component } from '@angular/core';
import { Katakana } from './katakana';
import { KatakanaService } from './katakana.service';

@Component({
  selector: 'app-katakana',
  templateUrl: './katakana.component.html',
  styleUrls: ['./katakana.component.scss']
})
export class KatakanaComponent {
  isModalOpen = false;
  katakanaData: Katakana[] = [];

  constructor(private katakanaService: KatakanaService) {}

  openModal(kana: string) {
    this.isModalOpen = true;
    this.katakanaService.vizualizarByKana(kana).subscribe(data => {
        this.katakanaData = data;
        console.log('Modal opened with data:', this.katakanaData);
    });
}


  closeModal() {
    this.isModalOpen = false;
  }
}
　