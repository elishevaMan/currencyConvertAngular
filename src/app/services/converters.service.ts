import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';

import { IConverter } from '../models/converter.model';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  _http!: HttpClient;
  API_KEY ="3FXMJpnfd76dfXkE1PhnLpOmfpCrTiIr";

  API_CONVERTER_CURRENCY="https://api.apilayer.com/exchangerates_data/"

  constructor(private http: HttpClient) {
    this._http = http;
  }

  

  getHistoryResults = (): IConverter[]=> {
    let arr :IConverter[]= [];
    const previousConverters = localStorage.getItem("previous_converters");

       if (previousConverters) {
        const previousConvertersArr= previousConverters?.split("#");
        console.log(previousConvertersArr)

        previousConvertersArr?.forEach(
            (data:string)=>arr.push(JSON.parse(data) as IConverter));
       }
       return arr;
  }


  AddResultsToHistory = (Converter: IConverter) => {

    let arr= [];
     const previousConverters = localStorage.getItem("previous_converters");

     if(!previousConverters)
     {
         localStorage.setItem("previous_converters",  JSON.stringify(Converter));
     }
     else
      localStorage.setItem("previous_converters", previousConverters+"#"+ JSON.stringify(Converter));
    
 }

  public convertCurrency(convertData: IConverter ): any {
    const reqHeader = new HttpHeaders({ 'apikey': this.API_KEY });
    const prms = new HttpParams().set('to', convertData.to).set('from', convertData.from).set('amount', convertData.amount);
    return this.http.get<any>(this.API_CONVERTER_CURRENCY + "convert", ({ params: prms, headers: reqHeader }));



  }

  public  currencyList(): any{
    const reqHeader = new HttpHeaders({ 'apikey': this.API_KEY });
    return this.http.get<any>(this.API_CONVERTER_CURRENCY + "symbols", ({ headers: reqHeader }));
    
  }

}