import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';


import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registeruserdata= {}
constructor(private auth:AuthService,private router:Router) {
    
   }

  ngOnInit() {}
 registeruser(){
      
    
    this.auth.registeruser(this.registeruserdata)
     .subscribe(
       res=> {
         console.log(res)
         this.auth.userDataEvent.emit(res);
         localStorage.setItem('token',res.token)
         this.router.navigate(['/login'])
       },
       err=>console.log(err)
       
     )
  }
}
