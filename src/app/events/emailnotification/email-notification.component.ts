import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'email-notification',
    templateUrl: './email-notification.html'
})
export class EmailNotification {

    @Output() email = new EventEmitter();
    @Output() outputFileName = new EventEmitter();

    onEmailInput(data) {
        this.email.emit(data)
    }

    onFileNameInput(data) {
        this.outputFileName.emit(data)
    }

}