import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import {HttpClientService} from "../http-client.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

users: User[] = [];

  constructor(private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.getUsers();
  }

    getUsers() {
    this.httpClient.getUsers().subscribe(users => this.users = users);
    }

    removeUser(userId: number) {
    this.httpClient.removeUser(userId).subscribe(r => {this.getUsers()})

    }
}
