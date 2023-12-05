// hiragana.component.ts
import { Component } from '@angular/core';
import { AuthService } from './hiragana.service';
import { Hiragana } from './hiragana';

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.component.html',
  styleUrls: ['./hiragana.component.scss']
})
export class HiraganaComponent {
  isModalOpen = false;
  hiraganaData: Hiragana[] = [];

  constructor(private authService: AuthService) {}

  openModal() {
    this.authService.vizualizar().subscribe((data: Hiragana[]) => {
      this.hiraganaData = data;
      this.isModalOpen = true;
    });
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
