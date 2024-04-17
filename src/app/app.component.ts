import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Registerpage } from './registerpage';
import { userRegisterPage } from './userregiserpage';

 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EAOS';

 constructor(private http:HttpClient){}
 username:string='admin';
 password:string='admin';
 
 isLogin:number=0;
 selectedOption: string = "";

 

 

  url="http://localhost:8080/";
  //url="http://3.110.49.122:8080/olxSpring/";

  login()
  {
    console.log(this.selectedOption);
    if(this.selectedOption=='Admin'){
  
    let url2=this.url+'login'+this.username+'and'+this.password;
    this.http.get(url2).subscribe(
      (data:any)=>
      {
        if(data==0)
        {
         window.alert("incorrect username !!!") ;
        }
        else if(data==1)
        {
          window.alert("incorrect password !!!");
        }
        else if(data==2)
        {
          window.alert("account not active wait for activation");
        }
        else if(data==3)
        {
          window.alert(" Admin login Successfull !!!");
          this.isLogin=1;
        }
        
        else{
          window.alert("something went wrong !!!");
        }  
      }
    );
    
    
  }
  

  else if(this.selectedOption=='User')
  {
  console.log("in user");
  let url2=this.url+'loginUser'+this.username+'and'+this.password;
  this.http.get(url2).subscribe(
    (data:any)=>
    {
      if(data==0)
      {
       window.alert("incorrect username !!!") ;
      }
      else if(data==1)
      {
        window.alert("incorrect password !!!");
      }
      else if(data==2)
      {
        window.alert("account not active wait for activation");
      }
      
      else if(data==3)
      {
        window.alert("User login Successfull !!!");
        this.isLogin=4;
      }
      
      else{
        window.alert("something went wrong !!!");
      }  
    }
  );
  
    
    
  }
  

}


  
  registerdata:Registerpage=new Registerpage(); 
  
 
  registerAdmin()
  {
    console.log("in register");
    
    console.log(this.registerdata);
 
    
    this.http.post(this.url+'register',this.registerdata).subscribe(
      (data:any)=>
      {
        if(data)
        {
          alert("registration successfull !!!");
          this.registerdata=new Registerpage();
          this.isLogin=0;
        }
        else
        {
          window.alert("something went wrong");
        }
      }
    );
  }

 userdata:userRegisterPage=new userRegisterPage();
  registerUser()
  {

    console.log(this.userdata);
    
    this.http.post(this.url+'userregister',this.userdata).subscribe(
      (data:any)=>
      {
        if(data)
        {
          alert("registration successfull !!!");
          this.userdata=new userRegisterPage();
          this.isLogin=0;
        }
        else
        {
          window.alert("something went wrong");
        }
      }
    );
  }

 
  userRegisterPage()
  {
    this.isLogin=3;
  }

  registerPage()
  {
    this.isLogin=2;
  }
  backToLogin()
  {
    this.isLogin=0;
  }

}
