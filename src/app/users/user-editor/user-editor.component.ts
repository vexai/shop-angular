import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {HttpClientService} from "../../http-client.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {

  user: User = new User();

  constructor(private httpClient: HttpClientService, private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserToEdit();
  }

  saveUser(user: User) {
    this.httpClient.saveUser(user).subscribe(s => {
      this.router.navigate(['/shop/users'])
    });
  }

  getUserToEdit() {
    this.activeRouter.paramMap.subscribe( params => {
      const userId = params.get('userId');
      if (userId) {
        this.httpClient.getUser(Number.parseInt(userId)).subscribe(e => this.user = e);
      }
    })
  }

}
