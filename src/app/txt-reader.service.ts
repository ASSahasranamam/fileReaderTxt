import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class TxtReaderService {

  constructor(private http: HttpClient){}

  getText(): Observable<any>{

    return this.http.get("src/app/Test.txt", { responseType: 'text'})
  }


}
