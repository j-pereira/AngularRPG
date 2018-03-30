import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Our app';

  arrayOfThings: string[] = [
  	"String 1",
  	"String 2",
  	"String 3"
  ];

  fakeBoolean: boolean = true;

  onClick(text: string){
  	console.log(`You clicked this: ${text}!`);
  }
}
