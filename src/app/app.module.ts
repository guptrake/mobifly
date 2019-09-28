import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UploadCsvComponentFile1} from './events/uploadFile/upload-csv1.component';

import { AppComponent } from './app.component';
import {UploadCsvComponentFile2} from './events/uploadFile/upload-csv2.component'

@NgModule({
  declarations: [
    AppComponent,
    UploadCsvComponentFile1,
    UploadCsvComponentFile2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
