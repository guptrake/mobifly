import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styles: [`
  .locked {pointer-events:none;}
  `]
})
export class AppComponent implements OnInit {
  title = 'mobifly-app';
  colFile1: string[];
  colFile2: string[];
  selectedItems = [];
  dropdownSettings = {};
  fileArray: any[] = [];
  keyColumnsFile1: any[] = [];
  keyColumnsFile2: any[] = [];
  isGroup: any = false;
  groupColumnFile1: any[] = [];
  groupColumnFile2: any[] = [];
  nonKeyValueColumnsFile1:any
  nonKeyValueColumnsFile2:any
  negTolrence: any;
  posTolrence: any;
  outputHeading: any;
  nonKeyNonValueColumnsFile1:any;
  nonKeyNonValueColumnsFile2:any;
  outputHeadingNonvalue:any;
  email:any;
  outputFileName:any;






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

  getNonKeyNonValueColFile1(data){
    this.nonKeyNonValueColumnsFile1=data
  }
  getNonKeyNonValueColFile2(data){
    this.nonKeyNonValueColumnsFile2=data
  }
  getOutputHeadingNonVal(data){
    this.outputHeadingNonvalue=data
  }
  getEmail(data){
    this.email = data;
  }
  getFileName(data){
    this.outputHeading = data;
  }
  printJSON() {
    console.log('file array', this.fileArray);
    console.log('keyColumnsFile1', this.keyColumnsFile1);
    console.log('keyColumnsFile2', this.keyColumnsFile2);
    console.log('is group', this.isGroup);
    console.log('groupColumnFile1', this.groupColumnFile1);
    console.log('groupColumnFile2', this.groupColumnFile2);

console.log('===STEP3====')
    console.log('nonKeyValueColumnsFile1', this.nonKeyValueColumnsFile1);
    console.log('nonKeyValueColumnsFile2', this.nonKeyValueColumnsFile2);
    console.log('negTolrence', this.negTolrence);
    console.log('posTolrence', this.posTolrence);
    console.log('outputHeading', this.outputHeading);

    console.log('===STEP4====')
    console.log('nonKeyNonValueColumnsFile1', this.nonKeyNonValueColumnsFile1);
    console.log('nonKeyNonValueColumnsFile2', this.nonKeyNonValueColumnsFile2);
    console.log('outputHeadingNonvalue', this.outputHeadingNonvalue);

    console.log('===STEP5====')
    console.log('email', this.email);
    console.log('outputHeading', this.outputHeading);
    

  }

}
