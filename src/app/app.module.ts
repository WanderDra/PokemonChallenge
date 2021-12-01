import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AMModule } from './libs/ammodule.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PokemonSelectedComponent } from './pokemon-selected/pokemon-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ConfirmDialogComponent,
    PokemonSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AMModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
