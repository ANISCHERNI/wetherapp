import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase , AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})





export class AddSkillsComponent implements OnInit {

  data={
    name:'',
    lastname:'',
    age:'',
    skill:'',
    comments:''
  }
itemlist:AngularFireList<any>
  constructor( public db:AngularFireDatabase , public router:Router) {
    this.itemlist=db.list('skills')
   }

  ngOnInit() {
  }

  instert(){
this.itemlist.push({
name:this.data.name,
age:this.data.age,
lastname:this.data.lastname,
comments:this.data.comments,
skill:this.data.skill,

})
alert('add success')
this.router.navigate(['/login'])
  }
}
