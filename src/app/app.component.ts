import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  num1 = 2;
  num2= 4;
  obj= ['neha','jay']
  obj1= {
    1:'neha1',
    2:'jay1'
  }
  userName = '';
  displayUsername ='';
  transformedObj1 (){
    return Object.keys(this.obj1);
  }

  getInput(data){
    this.userName = data.target.value;
   }
  // displayInput(){
  //   this.displayUsername = this.userName;
  // }
  // userName = '';
  displayInput(){
    this.userName = "yo" //input value gets changed
  }

}
