import { NoteService } from './../../providers/note-service';
import { IonicPage, NavParams } from 'ionic-angular';
import { ViewNotePage } from './../view-note/view-note';
import { AddNotePage } from '../add-note/add-note';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Note} from '../../providers/note.model';
@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {
  private notes:Promise<Note[]>;
  private note:Note;
  constructor(private noteService:NoteService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.notes=this.getAllNotes();

    }
    addNote(){
      this.navCtrl.push(AddNotePage);
    }
    getNote(createDate: number){
    this.noteService.getNote(createDate).then((n) =>{
      this.note=n;
    this.navCtrl.push(ViewNotePage,{note:this.note})

    })
    }
    getAllNotes(){

      return this.noteService.getAllNotes();
    }
}
