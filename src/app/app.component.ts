import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  errMessage: string;
  notesDataSource: Note[];
  constructor(private notesService: NotesService) {


  }
  ngOnInit(): void {
    this.notesService.getNotes().subscribe(notes => { this.notesDataSource = notes; }, error => {
      this.errMessage = error;
    });
  }

}
