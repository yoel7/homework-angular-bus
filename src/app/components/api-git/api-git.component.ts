import { Component, OnInit } from '@angular/core';
import { GitApiService } from 'src/app/Services/git-api.service';

@Component({
  selector: 'app-api-git',
  templateUrl: './api-git.component.html',
  styleUrls: ['./api-git.component.css']
})
export class ApiGitComponent implements OnInit {

  constructor( private htt: GitApiService) { }
  usergit: any;
  _user:any;
  ngOnInit(): void {
  }
gutGitUser(userName:HTMLInputElement):void{
 
  
  this.htt.getU(userName.value).subscribe((a: any) => {
    // this._user = a;
    // console.log(typeof this._user.updated_at);
    this.usergit = a;
    
    // this._user.created_at=new Date(this._user.created_at)
    // this._user.updated_at=new Date(this._user.updated_at)
    // console.log(typeof this._user.updated_at);
    // this.usergit = this._user;
    // this._user.created_at=new Date(this._user.created_at)
  })
}
}
