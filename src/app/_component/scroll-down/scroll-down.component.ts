import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.css']
})
export class ScrollDownComponent implements OnInit {

  @Input()
  tolink!:string;

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id:string){
    let el = document.getElementById(id);
    if (el != null){
      el.scrollIntoView();
    }
  }
}
