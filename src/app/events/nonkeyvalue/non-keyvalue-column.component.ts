import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'non-keyvaluecolumn',
    templateUrl: './non-keyvalue-column.html'
})
export class NonKeyValueColumn implements OnInit{
    selectedItems = [];
    dropdownSettings = {};
    @Input() nonkeycolfile1 
    @Input () nonkeycolfile2 ;

    ngOnInit(){
        this.dropdownSettings = {
            singleSelection: true,
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 10,
            allowSearchFilter: true
          };
    }

    onNonKeyColSelectFile1(keyCol: any) {
        //this.keyColumnsFile1.push(this.colFile1.indexOf(keyCol));
        //this.keyColumnsFile1.push(keyCol);
      }
      onSelectAll(items: any) {
        console.log(items);
      }
      onColSelectFile2Grop(keyCol: any){

      }
}