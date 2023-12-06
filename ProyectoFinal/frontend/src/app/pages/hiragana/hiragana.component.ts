import { Component } from '@angular/core';
import { Hiragana } from './hiragana';
import { HiraganaService } from './hiragana.service';

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.component.html',
  styleUrls: ['./hiragana.component.scss']
})
export class HiraganaComponent {
  isModalOpen = false;
  hiraganaData: Hiragana[] = [];

  constructor(private hiraganaService: HiraganaService) {}

  openModal(kana: string) {
    this.isModalOpen = true;
    this.hiraganaService.vizualizarByKana(kana).subscribe(data => {
        this.hiraganaData = data;
        console.log('Modal opened with data:', this.hiraganaData);
    });
}

  closeModal() {
    this.isModalOpen = false;
  }
}
　