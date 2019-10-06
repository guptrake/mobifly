import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[ `
  .locked {pointer-events:none;}
  `]
})
export class AppComponent implements OnInit {
  title = 'mobifly-app';
  colFile1: string[];
  colFile2: string[];
  selectedItems = [];
  dropdownSettings = {};
  fileArray: any[]=[];
  keyColumnsFile1: any[]=[];
  keyColumnsFile2: any[]=[];
  isGroup:any=false;
  groupColumnFile1: any[]=[];
  groupColumnFile2: any[]=[];





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
    this.keyColumnsFile1.push(this.colFile1.indexOf(keyCol));
  }
  onColSelectFile2(keyCol: any) {
    this.keyColumnsFile2.push(this.colFile2.indexOf(keyCol));
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onColSelectFile1Group(groupCol:any){
    this.groupColumnFile1.push(this.colFile1.indexOf(groupCol));
  }
  onColSelectFile2Group(groupCol:any){
    this.groupColumnFile2.push(this.colFile2.indexOf(groupCol));
  }
  checkBoxEvent(data){
    this.isGroup = data.target.checked;
    this.dropdownAction();
  }
  dropdownAction(){
    return {locked:!this.isGroup}
  }

}
