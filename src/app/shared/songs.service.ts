import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Song} from '../model/Song';


@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songsUrl = '/api/songs/';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  getListSongs() {
    return this.http.get<any[]>(this.songsUrl);
  }

  addSong(song): Observable<any> {
    return this.http.post(this.songsUrl, song, this.httpOptions);
  }
  deleteSong(songId): Observable<any> {
    return this.http.delete(this.songsUrl + songId);
  }
  getSongById(id: number){
    return this.http.get<Song>(this.songsUrl + '/' + id);
  }
  updateSong(id: number, myObject: Song): Observable<any>{
    return this.http.put<any>(this.songsUrl + '/' + id, myObject, this.httpOptions);
  }
}
