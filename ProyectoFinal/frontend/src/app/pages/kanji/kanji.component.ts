import { Component } from '@angular/core';
import { Kanji } from './kanji';
import { KanjiService } from './kanji.service';

@Component({
  selector: 'app-kanji',
  templateUrl: './kanji.component.html',
  styleUrls: ['./kanji.component.scss']
})
export class KanjiComponent {
  isModalOpen = false;
  kanjiData: Kanji[] = [];

  constructor(private KanjiService: KanjiService) {}

  openModal(kana: string) {
    this.isModalOpen = true;
    this.KanjiService.vizualizarByKana(kana).subscribe(data => {
        this.kanjiData = data;
        console.log('Modal opened with data:', this.kanjiData);
    });
}


  closeModal() {
    this.isModalOpen = false;
  }
}
　