import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IConverter } from 'src/app/models/converter.model';
import { ConverterService } from 'src/app/services/converters.service';


@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: [ './converter.component.scss']
})
export class ConverterComponent implements OnInit {

    myControl = new FormControl();
    currencies!: string[];
    from!: string;
    to!: string;
    amount!: string;
    result!: string;
    showResult: number = 0;
    mssError!: string;
  
    constructor(private _converterService: ConverterService) { }
  
    ngOnInit(): void {
      this._converterService.currencyList().subscribe((data: any) =>
        {
          this.currencies = 
          Object.keys(data.symbols);
        }, (err: any) => alert(err));
    }
    
  
    onChange(){
      if(this.amount != undefined && this.from != undefined && this.to != undefined){
        this.showResult=1;
        this._converterService.convertCurrency(new IConverter(this.from, this.to, this.amount.toString())).subscribe((data: any) =>
        {
          this.result = data.result;
          this._converterService.AddResultsToHistory(new IConverter(this.from, this.to, this.amount, this.result));
          this.showResult = 2;
        }, (err: any) => alert(err));
      }
      else this.showResult = 0;
    }
  
   

 
 

 

 
}

