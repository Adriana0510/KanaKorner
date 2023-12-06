import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { HiraganaComponent } from './pages/hiragana/hiragana.component';
import { KatakanaComponent } from './pages/katakana/katakana.component';
import { KanjiComponent } from './pages/kanji/kanji.component';
import { InicioDeSecionComponent } from './pages/inicio-de-secion/inicio-de-secion.component';
import { ModalComponent } from './pages/modal/modal.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HiraganaComponent,
    KatakanaComponent,
    KanjiComponent,
    InicioDeSecionComponent,
    ModalComponent,
    RegistroComponent,
    PruebaComponent,
    MantenimientoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
