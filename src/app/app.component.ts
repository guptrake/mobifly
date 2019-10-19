import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms'


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
  // selectedItems = [];
  dropdownSettings = {};
  singledropdownSettings = {};
  fileArray: any[] = [];
  keyColumnsFile1: any[] = [];
  keyColumnsFile2: any[] = [];
  isGroup: any = false;
  isNonKeyChecked:any= false;
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



  nestedForm: FormGroup;



  handleFile1Upload(file1) {
    let _this = this;
    const reader = new FileReader();
    reader.onload = function () {
      _this.fileArray.push(file1.target.files[0].name)
      _this.colFile1 = reader.result.toString().split('\n')[0].split(',');
      console.log('yui', _this.colFile1)
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
      allowSearchFilter: true
    };
    this.singledropdownSettings = {
      singleSelection: true,
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    }

    this.nestedForm = this._fb.group({
      file1: [],
      file2: [],
      keyColFile1: [],
      keyColFile2: [],
      isGroupCol: [],
      groupColFile1: [],
      groupColFile2: [],
      nonKeyValueCol: this._fb.array([this.addNonKeyValueCol()]),
      isNonKey:[],
      nonKeyNonValueCol: this._fb.array([this.addNonKeyNonValueCol()]),
      email:[],
      outputFileName:[]

    })
  }
  addNonKeyValueCol() {
    return this._fb.group({
      nonKeyvalueColFile1: [],
      nonKeyvalueColFile2: [],
      negativetolrence: [],
      positiveTolrence: [],
      outputColHeading: []
    })
  }
  addNonKeyNonValueCol() {
    return this._fb.group({
      nonKeyNonvalueColFile1: [],
      nonKeyNonvalueColFile2: [],
      outputColHeadingNonValue: []
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
  }
  removeNonKeyValueCol(index) {
    console.log('indexis', index)
    this.addNonKeyValueColArray.removeAt(index);
  }
  addMoreNonKeyNonValueCol() {
    this.addNonKeyNonValueColArray.push(this.addNonKeyNonValueCol())
  }
  removeNonKeyNonValueCol(index) {
    console.log('indexis', index)
    this.addNonKeyNonValueColArray.removeAt(index);
  }
  isGroupSelected(data) {
    console.log("grp selection", data)
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
  isNonKeyDDChecked(){
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
  printJSON() {
    console.log('file array', this.nestedForm.value);


  }

}
