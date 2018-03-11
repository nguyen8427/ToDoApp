import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //custom HTML tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
 items =["grocery shopping", "clean the car"];
    newItem = '';
addItem(){
    if (this.newItem != ''){
        this.items.push(this.newItem);
        this.newItem='';
    }
}

removeItem(index){
    this.items.splice(index, 1);
}
}
         
