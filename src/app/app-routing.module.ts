import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSongComponent } from './add-song/add-song.component';
import { SongsComponent } from './songs/songs.component';
const routes: Routes = [
  { path: 'list', component: SongsComponent },
  { path: 'add', component: AddSongComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
