import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currencies-exchange';

  currentPage:string ="";
  constructor( private _route: Router) { }

  ngOnInit(): void {
   
  }

  moveBetweenPage(name:string):void  {
   
    if(this.currentPage!==name)
    {
     this._route.navigate([`/${name}`])
  
    this.currentPage=name;
    }
   
  }
}
