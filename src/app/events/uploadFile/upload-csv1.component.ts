import { Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'upload-csv1',
  templateUrl: './upload-csv1.html',
  styles: [`
  
    `]
})
export class UploadCsvComponentFile1 {
@Output() returnFile1Data = new EventEmitter();


getFile1Data(eventFile1Upload) {
    //this.handleFileSelect(event)
    this.returnFile1Data.emit(eventFile1Upload);
  }

  // handleFileSelect(event) {
  //   const reader = new FileReader();
  //   reader.onload = function(){
  //     reader.result.toString().split('\n')[0];
  //     console.log('l23')
  //   }
  //     reader.readAsText(event.target.files[0]);
  //     this.columnNamesFile1.emit(reader.result.toString().split('\n')[0])
  //     console.log('l27');
  //   }

   
   

  
}