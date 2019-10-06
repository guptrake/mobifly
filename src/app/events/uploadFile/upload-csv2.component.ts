import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'upload-csv2',
    templateUrl: './upload-csv2.html',
    styles: [`
    
    `]
})
export class UploadCsvComponentFile2 {
    @Output() returnFile2Data = new EventEmitter();

    getFile2Data(eventFile2Upload) {
        this.returnFile2Data.emit(eventFile2Upload);
    }

}