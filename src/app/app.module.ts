import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TodoDataService} from './todo-data.service';
import {TodoNotepadComponent} from './todo-notepad/todo-notepad.component';
import {HeaderComponent} from './header/header.component';
import {NoteComponent} from './note/note.component';
import {ApiService} from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoNotepadComponent,
    HeaderComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [TodoDataService, ApiService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
