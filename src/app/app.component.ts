import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular - Picture tag';
  smallRes = '640px';
  mediumRes = '1024px';
  largeRes = '1280px';
}
