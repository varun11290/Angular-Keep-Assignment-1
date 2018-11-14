import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotesService {
private noteURL= 'http://localhost:3000/notes';
constructor(private http: HttpClient) {}
  getNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(this.noteURL);
  }

  // addNote(note: Note): Observable<Note> {

  // }

}
