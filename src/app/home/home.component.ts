import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // style:string = "text-decoration: line-through;";
  today = Date.now();

  selected!: Date | null;
  tasks = [
    { task:"wake up and go to gym" },
    { task:"eat healthy" },
    { task:"Do some exercise" },
    { task:"run 5 kilometers" },
    { task:"Go to office early" },
    { task:"Debug code and clean up" },
  ]

  click(){
    this.visible = !this.visible
  }

  inverted(){
    this.visible  = false
  }

  visible:boolean = false



}
