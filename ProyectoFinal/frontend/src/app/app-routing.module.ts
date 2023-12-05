import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { HiraganaComponent } from './pages/hiragana/hiragana.component';
import { InicioDeSecionComponent } from './pages/inicio-de-secion/inicio-de-secion.component';
import { KatakanaComponent } from './pages/katakana/katakana.component';
import { KanjiComponent } from './pages/kanji/kanji.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { ModalComponent } from './pages/modal/modal.component';

const routes: Routes = [
  {path: '',component:InicioDeSecionComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'menu',component:StartComponent},
  {path: 'hiragana',component:HiraganaComponent},
  {path: 'katakana',component:KatakanaComponent},
  {path: 'kanji',component:KanjiComponent},
  {path: 'prueba',component:PruebaComponent},
  {path: '' ,component:ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
