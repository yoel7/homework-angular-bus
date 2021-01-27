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
  ngOnInit(): void {
  }
gutGitUser(userName:HTMLInputElement):void{
  this.htt.getU(userName.value).subscribe((a: any) => {
    this.usergit = a;
  })
}
}
