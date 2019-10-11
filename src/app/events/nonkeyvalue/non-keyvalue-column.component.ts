import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'non-keyvaluecolumn',
  templateUrl: './non-keyvalue-column.html'
})
export class NonKeyValueColumn implements OnInit {
  selectedItemsfile1 = [];
  selectedItemsfile2 = [];

  dropdownSettings = {};
  @Input() nonkeycolfile1
  @Input() nonkeycolfile2;

  @Output() nonkeyvaluecolfile1 = new EventEmitter();
  @Output() nonkeyvaluecolfile2 = new EventEmitter();
  @Output() negativeTolrenceVal = new EventEmitter();
  @Output() positiveTolrenceVal = new EventEmitter();
  @Output() outputHeadingValue = new EventEmitter();



  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: true,
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }

  onNonKeyColSelectFile1(data) {
   this.nonkeyvaluecolfile1.emit(data)
  }

  onNonKeyColSelectFile2(data) {
    this.nonkeyvaluecolfile2.emit(data)
  }
  negativeTolrence(data) {
    this.negativeTolrenceVal.emit(data);
  }

  positiveTolrence(data) {
    this.positiveTolrenceVal.emit(data)
  }

  updateColListFile1(data) {
    //this.selectedItemsfile1.filter((item) => item !== data);
    //this.nonkeyvaluecolfile1.emit('')
  }
  updateColListFile2(data) {
    //this.selectedItemsfile2.filter((item) => item !== data);
   // this.nonkeyvaluecolfile2.emit('')
  }


  outputHeading(data) {
    this.outputHeadingValue.emit(data)
  }
}