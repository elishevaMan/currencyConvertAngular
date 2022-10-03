import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { IConverter } from '../../models/converter.model';
import { ConverterService } from '../../services/converters.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss',  '../Converter/converter.component.scss']
})
export class AboutComponent implements OnInit {

  converterHistory: IConverter[] = [];
      
   
  constructor(private _converterService: ConverterService) { 
  
    this.converterHistory= this._converterService.getHistoryResults();
  }


  ngOnInit(): void {
  }

 
 

}
