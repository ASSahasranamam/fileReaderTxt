import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {TxtReaderService} from 'src/app/txt-reader.service';
import {Dexie} from 'dexie'

import{DexieTestComponent} from './dexie-test/dexie-test.component'
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


 db = new DexieTestComponent();



ngOnInit(){

  let reqObj = {
    'userId': '1203'
  };





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

   let url = "https://dev2.interwork.io/highMessage/listForMeetings"
   return this.http.post(url, reqObj).subscribe(
     res => { console.log(res)
       alert(typeof res)


       var meetingsArray = Object.keys(res).map(function(personNamedIndex){
         let person = res[personNamedIndex];
         // do something with person
         return person;
       });


       for (let obj of meetingsArray){
         alert((res[0]))
         alert(obj)
                  this.db.friends.add(({name: obj.title, age: 21,
                    meetingId: obj.meeting_id,
                    status: obj.status,
                    mid: obj.id,
                    title: obj.status,
                    updatedBy: obj.updatedBy,
                    updatedDate: obj.updatedDate,
                    createdBy: obj.createdBy,
                    startDate: obj.plannedStartDate,
                    endDate: obj.plannedEndDate,
                    parentId: obj.parentID
                  })).then(()=>{
             return this.db.friends.where("age").below(25).toArray();
         }).then(youngFriends => {
             alert ("My young friends: " + JSON.stringify(youngFriends));
         }).catch(e => {
             alert("error: " + e.stack || e);
         });

       }



     });



}

}
