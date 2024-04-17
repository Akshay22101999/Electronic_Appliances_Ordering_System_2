import { Component } from '@angular/core';
import { Owner } from '../owner';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
ownerForm: any;
  

  constructor(private http:HttpClient, private app:AppComponent){}

  
  owner:Owner=new Owner();
  owners:Owner[]=[];


 
  
url="http://localhost:8080/";
//url="http://3.110.49.122:8080/olxSpring/";

  load()
  {
    this.http.get(this.url+'load').subscribe(
      (data:any)=>
      {
        this.owners=data;
      }
    );
  }

  add()
  {
    let url2=this.url+'add';
    this.http.post(url2,this.owner).subscribe(
      (data:any)=>
      {
         this.owners.push(this.owner);
         window.alert("Data Added Successfully !!!");
         this.owner=new Owner();
         
      }
        
      
    ); 

  }

  delete(obj:any)
  {
  console.log(obj);
  
    this.http.get(this.url+'delete'+obj.id).subscribe(
      (data:any)=>
      {
        if(data==true)
        {
          let index=this.owners.indexOf(this.owner);
          this.owners.splice(index,1)
          window.alert("Are you sure you want to delete ?")
        }
        else{
          window.alert("Something went wrong");
        }
      }
    );
  }

  logout()
  {
    console.log("in logout");
    
     this.app.isLogin=0;
     
  }



}
 


