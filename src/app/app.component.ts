import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { iRecociliation, fileData, keyColumns, nonKeyColumn, nonKeyNonValueColumn, match } from './events/model.data'


@Component({
  selector: 'app-root',
  templateUrl: './reactiveForm.app.component.html',
  styles: [`
  .locked {pointer-events:none;}
  
  `]
})
export class AppComponent implements OnInit {

  constructor(private _fb: FormBuilder) {

  }

  title = 'mobifly-app';
  colFile1: string[];
  colFile2: string[];

  dropdownSettings = {};
  singledropdownSettings = {};
  fileArray: any[] = [];
  keyColumnsFile1: any[] = [];
  keyColumnsFile2: any[] = [];
  isGroup: any = false;
  isNonKeyChecked: any = false;
  groupColumnFile1: any[] = [];
  groupColumnFile2: any[] = [];
  nonKeyValueColumnsFile1: any
  nonKeyValueColumnsFile2: any
  negTolrence: any;
  posTolrence: any;
  outputHeading: any;
  nonKeyNonValueColumnsFile1: any;
  nonKeyNonValueColumnsFile2: any;
  outputHeadingNonvalue: any;
  email: any;
  outputFileName: any;
  nonKeyCounter = 1;

  nestedForm: FormGroup;

  handleFile1Upload(file1) {
    let _this = this;
    const reader = new FileReader();
    reader.onload = function () {
      _this.fileArray.push(file1.target.files[0].name)
      _this.colFile1 = reader.result.toString().split('\n')[0].split(',');
    }

    reader.readAsText(file1.target.files[0]);
  }

  handleFile2Upload(file2) {
    let _this = this;
    const reader = new FileReader();
    reader.onload = function () {
      _this.fileArray.push(file2.target.files[0].name)
      _this.colFile2 = reader.result.toString().split('\n')[0].split(',')
    }
    reader.readAsText(file2.target.files[0]);
  }

  ngOnInit() {

    this.dropdownSettings = {
      singleSelection: false,
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
      defaultOpen: false
    };
    this.singledropdownSettings = {
      singleSelection: true,
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
      defaultOpen: false
    }

    this.nestedForm = this._fb.group({
      file1: ['', [Validators.required]],
      file2: ['', [Validators.required]],
      keyColFile1: ['', [Validators.required]],
      keyColFile2: [],
      isGroupCol: [],
      groupColFile1: [],
      groupColFile2: [],
      nonKeyValueCol: this._fb.array([this.addNonKeyValueCol()]),
      isNonKey: [],
      nonKeyNonValueCol: this._fb.array([this.addNonKeyNonValueCol()]),
      email: [],
      outputFileName: []

    })

  }

  addNonKeyValueCol() {
    return this._fb.group({
      file1_column_no: [],
      file2_column_no: [],
      neg_tolerance_limit: [],
      pos_tolerance_limit: [],
      output_column_heading: []
    })
  }
  addNonKeyNonValueCol() {
    return this._fb.group({
      file1_column_no: [],
      file2_column_no: [],
      output_column_heading: []
    })
  }
  get addNonKeyValueColArray() {
    return <FormArray>this.nestedForm.get('nonKeyValueCol');
  }

  get addNonKeyNonValueColArray() {
    return <FormArray>this.nestedForm.get('nonKeyNonValueCol');
  }
  addMoreNonKeyValueCol() {
    this.addNonKeyValueColArray.push(this.addNonKeyValueCol())
    console.log('total added rows', this.addNonKeyValueColArray.length)
  }
  removeNonKeyValueCol(index) {
    this.addNonKeyValueColArray.removeAt(index);
  }
  addMoreNonKeyNonValueCol() {
    this.addNonKeyNonValueColArray.push(this.addNonKeyNonValueCol())
  }
  removeNonKeyNonValueCol(index) {
    this.addNonKeyNonValueColArray.removeAt(index);
  }
  isGroupSelected(data) {
    this.isGroup = true

  }


  onColSelectFile1(keyCol: any) {
    //this.keyColumnsFile1.push(this.colFile1.indexOf(keyCol));
    this.keyColumnsFile1.push(keyCol);
  }
  onColSelectFile2(keyCol: any) {
    //this.keyColumnsFile2.push(this.colFile2.indexOf(keyCol));
    this.keyColumnsFile2.push(keyCol)
  }
  removeKeyColFile1(colRemoved) {
    //const colNumberToRemove = this.groupColumnFile1.indexOf(colRemoved) + 1;
    this.keyColumnsFile1 = this.keyColumnsFile1.filter(item => item !== colRemoved)
    //console.log(this.keyColumnsFile1)
  }
  removeKeyColFile2(colRemoved) {
    //const colNumberToRemove = this.groupColumnFile1.indexOf(colRemoved) + 1;
    this.keyColumnsFile2 = this.keyColumnsFile2.filter(item => item !== colRemoved)
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  onColSelectFile1Group(groupCol: any) {
    //this.groupColumnFile1.push(this.colFile1.indexOf(groupCol) + 1);
    this.groupColumnFile1.push(groupCol)
  }
  onColSelectFile2Group(groupCol: any) {
    //this.groupColumnFile2.push(this.colFile2.indexOf(groupCol) + 1);
    this.groupColumnFile2.push(groupCol);
  }
  removeColFile1Group(colRemoved) {
    //const colNumberToRemove = this.groupColumnFile1.indexOf(colRemoved) + 1;
    this.groupColumnFile1 = this.groupColumnFile1.filter(item => item !== colRemoved)
  }
  removeColFile2Group(colRemoved) {
    //const colNumberToRemove = this.colFile2.indexOf(colRemoved) + 1;
    this.groupColumnFile2 = this.groupColumnFile2.filter(item => item !== colRemoved)
  }
  checkBoxEvent(data) {
    this.isGroup = data.target.checked;
    this.dropdownAction();
  }
  dropdownAction() {
    return { locked: !this.isGroup }
  }
  isNonKeyDDChecked() {
    return { locked: !this.isNonKeyChecked }
  }
  nonKeycheckBoxEvent(data) {
    this.isNonKeyChecked = data.target.checked;
    this.isNonKeyDDChecked();
  }

  getNonKeyValueColFile1(data) {
    this.nonKeyValueColumnsFile1 = data
  }
  getNonKeyValueColFile2(data) {
    this.nonKeyValueColumnsFile2 = data
  }
  getNegativeTolrenceVal(data) {
    this.negTolrence = data;
  }
  getPositiveTolrenceVal(data) {
    this.posTolrence = data;
  }
  getOutputHeadingVal(data) {
    this.outputHeading = data;
  }

  getNonKeyNonValueColFile1(data) {
    this.nonKeyNonValueColumnsFile1 = data
  }
  getNonKeyNonValueColFile2(data) {
    this.nonKeyNonValueColumnsFile2 = data
  }
  getOutputHeadingNonVal(data) {
    this.outputHeadingNonvalue = data
  }
  getEmail(data) {
    this.email = data;
  }
  getFileName(data) {
    this.outputHeading = data;
  }

  getColumnNumberFile1(colNames: string[]): number[] {
    let colNumber: number[] = [];
    colNames.forEach((name) => colNumber.push(this.colFile1.indexOf(name)));
    return colNumber;
  }

  getColumnNumberFile2(colNames: string[]): number[] {
    let colNumber: number[] = [];
    colNames.forEach((name) => colNumber.push(this.colFile2.indexOf(name)));
    return colNumber;
  }

  getSingleColumnNumberFile1(colName: string): number {
    return this.colFile1.indexOf(colName);
  }
  getSingleColumnNumberFile2(colName: string): number {
    return this.colFile2.indexOf(colName);
  }

  hideAddNonKeyValueColumnOption(index): boolean {
    if (this.addNonKeyValueColArray.length === 1 && index === 0) {
      return false;
    } else if (this.addNonKeyValueColArray.length > 1 && this.addNonKeyValueColArray.length === index+1) {
      return false
    } else  {
      return true;
    }
  }
  //addNonKeyNonValueColArray
  hideDeleteNonKeyValueColumnOption(index): boolean {
    if (this.addNonKeyValueColArray.length === 1 && index === 0) {
      return true;
    } else if (this.addNonKeyValueColArray.length > 1 && this.addNonKeyValueColArray.length === index+1) {
      return false
    } else  {
      return true;
    }
  }

  hideAddNonKeyNonValueColumnOption(index): boolean {
    if (this.addNonKeyNonValueColArray.length === 1 && index === 0) {
      return false;
    } else if (this.addNonKeyNonValueColArray.length > 1 && this.addNonKeyNonValueColArray.length === index+1) {
      return false
    } else  {
      return true;
    }
  }

  hideDeleteNonKeyNonValueColumnOption(index): boolean {
    if (this.addNonKeyNonValueColArray.length === 1 && index === 0) {
      return true;
    } else if (this.addNonKeyNonValueColArray.length > 1 && this.addNonKeyNonValueColArray.length === index+1) {
      return false
    } else  {
      return true;
    }
  }
  printJSON() {
    const data: fileData = {
      input_file1: this.nestedForm.value.file1.split("\\")[2],
      input_file2: this.nestedForm.value.file2.split("\\")[2],
      output_file: this.nestedForm.value.outputFileName,
      previousrun: false
    }
    const key_columns: keyColumns = {
      file1_key_columns_no: this.getColumnNumberFile1(this.nestedForm.value.keyColFile1),
      file2_key_columns_no: this.getColumnNumberFile2(this.nestedForm.value.keyColFile2),
      file1_group_column_no: this.getColumnNumberFile1(this.nestedForm.value.groupColFile1),
      file2_group_column_no: this.getColumnNumberFile2(this.nestedForm.value.groupColFile2),
      group_flag: this.nestedForm.value.isGroupCol,
      nonkey_truefalse_flag: this.nestedForm.value.isNonKey
    }
    this.nestedForm.value.nonKeyValueCol.forEach(val => {
      val.file1_column_no = this.getSingleColumnNumberFile1(val.file1_column_no[0])
      val.file2_column_no = this.getSingleColumnNumberFile2(val.file2_column_no[0])
      val.neg_tolerance_limit = parseInt(val.neg_tolerance_limit)
      val.pos_tolerance_limit = parseInt(val.pos_tolerance_limit)
    });
    const nonkey_value_columns: nonKeyColumn[] = this.nestedForm.value.nonKeyValueCol;

    this.nestedForm.value.nonKeyNonValueCol.forEach(val => {
      val.file1_column_no = this.getSingleColumnNumberFile1(val.file1_column_no[0])
      val.file2_column_no = this.getSingleColumnNumberFile2(val.file2_column_no[0])
    });

    const nonkey_truefalse_columns: nonKeyNonValueColumn[] = this.nestedForm.value.nonKeyNonValueCol;

    const probable_match = { output_file: this.nestedForm.value.email }

    const reconciliation = [{ data, key_columns, nonkey_value_columns, nonkey_truefalse_columns, probable_match }]


    console.log('file array', reconciliation);

  }

}
