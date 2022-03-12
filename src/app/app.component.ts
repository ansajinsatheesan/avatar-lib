import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pic-avatar';
  config = {
    customClass: 'my-custom-class',
    name: 'Sajin Satheesan',
    defaultImage: 'assets/images/user.svg',
    editIcon: 'assets/images/pen.svg'
  }

  imageEventData(event: any) {
    console.log(event);
  }
}
