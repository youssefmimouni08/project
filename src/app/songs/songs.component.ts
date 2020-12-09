import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Song } from '../model/Song';
import { SongsService } from '../shared/songs.service';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs$: Observable<Song[]>;
  SONGS: Song[] = [];
  filter = new FormControl('');

  constructor(pipe: DecimalPipe, private songService: SongsService) {
    this.songService.getListSongs().subscribe(data => {
      this.SONGS = data;
      this.songs$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text, pipe))
      );
    });
  }

  ngOnInit(): void {
  }

  search(text: string, pipe: PipeTransform): Song[] {
    return this.SONGS.filter(song => {
      const term = text.toLowerCase();
      return song.name.toLowerCase().includes(term)
        || song.artist.toLowerCase().includes(term)
        || song.album.toLowerCase().includes(term);
    });
  }

}
