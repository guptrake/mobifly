import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'check-box',
    template: `
<input id = "groupcolumns" type="checkbox" (change)="isGroupSelected($event)"
> Is Group?
<img title="By default, output results are grouped at key columns. Select 'Is Group' to add any other column
 in addition to the key column for grouping.For example if invoice no. is a key column then all value columns
  would be clubbed at invoice level.If grouping is required at invoice and rate level, then rate column can be
captured here"
			src="http://pwcnic-2100337383.ap-south-1.elb.amazonaws.com/revreco-app2/assets/images/info2.png"
			style="position:absolute;top:40px;right: 170px;">

`
})

export class GroupCheckBox {
    @Output() checkBoxChecked = new EventEmitter();

    isGroupSelected(event) {
        this.checkBoxChecked.emit(event);
    }
}