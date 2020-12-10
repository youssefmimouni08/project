import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Song } from '../model/Song';
import { SongsService } from '../shared/songs.service';


@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  songForm: FormGroup;
  spinnerConfirm = 'confirm';
  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, private songService: SongsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.songForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      artist: ['', [Validators.required, Validators.minLength(3)]],
      album: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', Validators.required],
      link: ['', [Validators.required, Validators.pattern(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i)]]
    });
  }

  addSong() {
    this.spinner.show('confirm');
    this.songForm.value.date = `${this.songForm.value.date.month}/${this.songForm.value.date.day}/${this.songForm.value.date.year}`;
    this.songService.addSong(this.songForm.value).subscribe(
      success => { },
      error => { },
      () => {
        setTimeout(() => {
          this.spinner.hide('confirm');
          this.toastr.success('The Song has been Added!', 'Success !', {
            progressBar: true,
            timeOut: 3500
          });
        }
          , 1500);
      }
    );
  }

}
