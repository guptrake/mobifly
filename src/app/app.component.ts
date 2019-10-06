import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-root',
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

  printJSON() {
    console.log('file array', this.fileArray);
    console.log('keyColumnsFile1', this.keyColumnsFile1);
    console.log('keyColumnsFile2', this.keyColumnsFile2);
    console.log('is group', this.isGroup);
    console.log('groupColumnFile1', this.groupColumnFile1);
    console.log('groupColumnFile2', this.groupColumnFile2);

  }

}
