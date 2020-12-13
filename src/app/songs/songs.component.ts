import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Song } from '../model/Song';
import { SongsService } from '../shared/songs.service';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs$: Song[] = [];
  SONGS: Song[] = [];
  filter = new FormControl('');

  constructor(private songService: SongsService, private toastr: ToastrService) {
    this.songService.getListSongs().subscribe(data => {
      this.SONGS = data;
      this.songs$ = data;
    });
  }

  ngOnInit(): void {
    this.filter.valueChanges.subscribe(text => {
      this.songs$ = this.SONGS.filter(song => {
        const term = text.toLowerCase();
        return song.name.toLowerCase().includes(term)
          || song.artist.toLowerCase().includes(term)
          || song.album.toLowerCase().includes(term);
      });
    });
  }
  deleteSong(index, id) {
    this.songs$.splice(index, 1);
    this.SONGS.splice(index, 1);
    this.songService.deleteSong(id).subscribe(success => { },
      error => { },
      () => {
        this.toastr.success('The Song has been deleted!', 'Success !', {
          progressBar: true,
          timeOut: 3500
        });
      });
  }

}
