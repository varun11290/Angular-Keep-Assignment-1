import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [ AppComponent,
    HeaderComponent],
  imports: [ BrowserModule,
  BrowserAnimationsModule, MaterialModule , HttpClientModule],
  providers: [ NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
