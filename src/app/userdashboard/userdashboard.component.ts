import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Owner } from '../owner';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  constructor(private http:HttpClient, private app:AppComponent){}

  url="http://localhost:8080/";
  //url="http://3.110.49.122:8080/olxSpring/";


  owner:Owner=new Owner();
  owners:Owner[]=[];
 // showProduc=this.dashboard.load();


  showAvailableProduct()
  {
   
   this.http.get(this.url+'load').subscribe(
    (data:any)=>
    {
      // console.log(data);
      
      this.owners=data;
    }
  );
    
  }

  logout()
  {
    this.app.isLogin=0;
  }

  

}
