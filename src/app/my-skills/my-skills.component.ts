import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent implements OnInit {

itemArray=[]
data={
  name:'',
  lastname:'',
  age:'',
  skill:'',
  comments:''
}

  itemlist:AngularFireList<any>
  user: any;
  constructor(public db:AngularFireDatabase , public router:Router ) {
    this.itemlist=db.list('skills')
    this.itemlist.snapshotChanges()
    .subscribe(actions=>{
      actions.forEach(action=>{
        let y =action.payload.toJSON()
        y['$key']=action.key
        this.itemArray.push(y as ListItemClass)
      })
    
    })
    console.log(this.itemArray)
   }

  ngOnInit() {
   
  }


editForm(i , $key){
this.user=i;
for (let value of this.itemArray ){
if ( value[$key]==$key){
  
  this.data.name=value['name']
  this.data.lastname=value['lastname']
  this.data.age=value['age']
  this.data.skill=value['skill']
  this.data.comments=value['comments']

}
}


}

  onEdit($key){

    this.data.name
    this.data.lastname
    this.data.age
    this.data.skill
    this.data.comments



    this.itemlist.set($key ,{


      name:this.data.name,
     
      lastname:this.data.lastname,
      age:this.data.age,
      skill:this.data.skill,
      comments:this.data.comments
  



    }


    )
   
    console.log("  key :  "+this.user.$key +"   name : "+this.user.name + "   age : " +this.user.age +  "    lastname :  " +this.user.lastname + "   skills :  " +this.user.skill)
  
  }



  onDelete($key){
  console.log("delated")
  }
  

}






export class ListItemClass{
 $key:string;
  name:string;
    lastname:string;
    age:string;
    skill:string;
    comments:string
}