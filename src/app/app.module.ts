import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AddSongComponent } from './add-song/add-song.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { UpdateSongComponent } from './update-song/update-song.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SafePipe,
    AddSongComponent,
    UpdateSongComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [HttpClient, DecimalPipe, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
