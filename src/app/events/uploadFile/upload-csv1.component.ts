import { Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'upload-csv1',
  templateUrl: './upload-csv1.html',
  styles: [`
  
    `]
})
export class UploadCsvComponentFile1 {
@Output() columnNamesFile1 = new EventEmitter();


  getCSVColumns(event) {
    //this.handleFileSelect(event)
    this.columnNamesFile1.emit(event);
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