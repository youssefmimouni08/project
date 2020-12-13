import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Song} from '../model/Song';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {SongsService} from '../shared/songs.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.css']
})
export class UpdateSongComponent implements OnInit {
  song: Song = new Song();
  paramId: string;


  // tslint:disable-next-line:variable-name max-line-length
  constructor( private _router: Router, private  ac: ActivatedRoute, private spinner: NgxSpinnerService, private ss: SongsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    this.ac.paramMap.subscribe(res => {this.paramId = res.get('id'); this.ss.getSongById(Number(res.get('id'))).subscribe(res => this.song = res); });
  }
  updateSong(){
   // this.song.date = new Date(`${this.songForm.value.date.month}/${this.songForm.value.date.day}/${this.songForm.value.date.year}`);
    console.log(this.song.date);
    this.ss.updateSong(Number(this.paramId), this.song).subscribe(res => this._router.navigateByUrl('/list'),
      error => { },
      () => {
        this.toastr.success('The Song has been updated!', 'Success !', {
          progressBar: true,
          timeOut: 1500 });
      });
  }

}

