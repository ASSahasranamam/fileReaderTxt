import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {TxtReaderService} from 'src/app/txt-reader.service';


// import {TxtServiceService} from 'txt-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'textFormBuilder';
constructor(private http: HttpClient, private tservice: TxtReaderService){}

urlEncoded = '/Test.txt'

formSpecifications= []

ngOnInit(){
  this.tservice.getText().subscribe(data =>
    {
     console.log(data);
     console.log(typeof data);

     var splitLines = data.split("\n");
     console.log(splitLines);

     for(let i of splitLines){
       this.formSpecifications.push(i.split(" "));
       console.log('Value pushed', i);
     }

     this.formSpecifications.pop()

     console.log(this.formSpecifications)

    }
   )

}

}
