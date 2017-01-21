import { Component } from "@angular/core";
import { Http } from '@angular/http';
import { DataService } from './../services/data.service';

@Component({

    template: `
    <form #f="ngForm" (ngSubmit)="onNotesSubmit(f.value)" class="form-control">
    <div class="form-group">
    <textarea rows="5" cols="50" class="form-control" name="notes" ngModel></textarea>
    </div>
    <div class="form-group">
    <button class="btn btn-primary form-control">Submit</button>    
    </div>
    </form>
    `
})
export class NotesComponent {

  constructor(private _http: Http, private dataService: DataService){}  
  onNotesSubmit(notesVal){
      console.log("notesVal.notes " +notesVal.notes);
      var localId = localStorage.getItem('userTotal');
      console.log(localId);
      this.dataService.onNotesSave(notesVal.notes).subscribe(res => {
      console.log(res);
      });
}
}
