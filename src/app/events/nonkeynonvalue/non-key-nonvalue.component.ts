import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'non-key-non-value-column',
  templateUrl: './non-key-non-value-column.html'
})
export class NonKeyNonValueColumn implements OnInit {
  selectedItemsfile1 = [];
  selectedItemsfile2 = [];
  arrayObject: {}
  nonkey_truefalse_columns = [

  ]

  dropdownSettings = {};
  @Input() colfile1
  @Input() colfile2;

  @Output() nonkeynonvaluecolfile1 = new EventEmitter();
  @Output() nonkeynonvaluecolfile2 = new EventEmitter();
  @Output() outputHeadingnonValue = new EventEmitter();



  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: true,
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
    this.arrayObject = {
      file1_column_no:'',
      file2_column_no:'',
      neg_tolerance_limit: -5,
      pos_tolerance_limit: 5,
      output_column_heading: "Taxable Value"
    }
  }

  onNonValueColSelectFile1(data) {
    let arrayCount = this.getArrayLength();

    this.nonkeynonvaluecolfile1.emit(data)
  }

  onNonValueColSelectFile2(data) {
    this.nonkeynonvaluecolfile2.emit(data)
  }

  outputHeadingNonValue(data) {
    this.outputHeadingnonValue.emit(data)
  }

  getArrayLength() {
    return this.nonkey_truefalse_columns.length;
  }
}