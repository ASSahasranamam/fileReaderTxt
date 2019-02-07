import { Component, OnInit } from '@angular/core';
import Dexie from 'dexie';


@Component({
  selector: 'app-dexie-test',
  templateUrl: './dexie-test.component.html',
  styleUrls: ['./dexie-test.component.css']
})
export class DexieTestComponent  extends Dexie
implements OnInit{

  friends: Dexie.Table<IFriend,number>;

  constructor() {
    super('DexieTestComponent')

    //
    // Define tables and indexes
    // (Here's where the implicit table props are dynamically created)
    //
    this.version(1).stores({
        friends: "++id,name,age"
    });

  }

  ngOnInit() {
  }

}

export interface IFriend {
    id?: number;
    name?: string;
    age?: number;
    mid: string;
    meetingId: String;
    status: String;
    title: String;
    updatedBy: String;
    updatedDate: String;
    createdBy: String;
    startDate: String;
    endDate:String;
    parentId: String;

}
