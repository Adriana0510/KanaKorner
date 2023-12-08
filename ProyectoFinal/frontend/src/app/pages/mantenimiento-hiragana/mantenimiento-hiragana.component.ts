import { Component } from '@angular/core';
import { HiraganaService } from './mantenimientoHiragana.service'; 

@Component({
  selector: 'app-mantenimiento-hiragana',
  templateUrl: './mantenimiento-hiragana.component.html',
  styleUrls: ['./mantenimiento-hiragana.component.scss']
})
export class MantenimientoHiraganaComponent {
  hiraganas: any[] = [];
  nuevoHiragana: any = {
    kana: '',
    romanji: '',
    palabraJapones: '',
    palabraEspanol: ''
  };

  constructor(private hiraganaService: HiraganaService) {
    this.obtenerHiraganas();
  }

  obtenerHiraganas(): void {
    this.hiraganaService.obtenerHiraganas()
        .subscribe(
            response => {
                if (response && response.Hiraganas) {
                    this.hiraganas = response.Hiraganas;
                }
            },
            error => {
                console.error('Error al obtener hiraganas:', error);
               
            }
        );
}

crearHiraganas(): void {
    this.hiraganaService.crearHiraganas(this.nuevoHiragana)
      .subscribe(() => {
        this.obtenerHiraganas();
      });
  }
}
