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
  note: Note;
  isOpen: bool = false;
  constructor(private notesService: NotesService) {
  }
  ngOnInit(): void {
    this.notesService.getNotes().subscribe(notes => { this.notesDataSource = notes; }, error => {
      this.errMessage = error;
    });
  }

toggelExpantion(): void{
this.isOpen = !this.isOpen;
}
  onSubmit(data): void{
    let id= this.notesDataSource.length + 1;
    this.note=new Note(id, data.title, data.text);
    this.notesDataSource.push(this.note)
    console.log(this.note);

    } 
  }

}
