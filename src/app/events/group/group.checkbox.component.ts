import { Component, Output, EventEmitter} from "@angular/core";


@Component({
selector: 'check-box',
template: `
<input id = "groupcolumns" type="checkbox" (change)="isGroupSelected($event)"> Is Group?
`
})

export class GroupCheckBox {
@Output() checkBoxChecked = new EventEmitter();

isGroupSelected(event){
    this.checkBoxChecked.emit(event);
}
}