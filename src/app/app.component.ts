import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'mobifly-app';
  dt:any;

  handleFile1Upload(data) {
    const reader = new FileReader();
    reader.onload = function () {
      reader.result.toString().split('\n')[0];
      console.log(reader.result.toString().split('\n')[0] )
    }
    reader.readAsText(data.target.files[0]);
  this.dt = reader.result.toString().split('\n')[0];
  console.log('this.dt')
  console.log(this.dt);
  }
}
