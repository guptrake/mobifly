import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UploadCsvComponentFile1} from './events/uploadFile/upload-csv1.component';

import { AppComponent } from './app.component';
import {UploadCsvComponentFile2} from './events/uploadFile/upload-csv2.component'
import {GroupCheckBox} from './events/group/group.checkbox.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UploadCsvComponentFile1,
    UploadCsvComponentFile2,
    GroupCheckBox
   
    
  ],
  imports: [
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
