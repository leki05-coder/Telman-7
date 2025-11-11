
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';





export interface User {
      
    "id": number,
    "name":string,
    "username": string,
    "email":string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
      }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
}

@Component ({
selector: 'users-list',
templateUrl: './users-list.component.html',
styleUrl:'./users-list.component.scss',
standalone: true,
imports: [ NgFor,NgIf, RouterOutlet,RouterLink ]

})

export class UsersListComponent {

readonly server = inject(HttpClient);
users : User [] = [];

constructor() {
this.server.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(

   ( icloud:any) => {
        this.users = icloud ;
   }
)} 
   deleteUser(id:number){
     this.users = this.users.filter( 
        (item:User) =>{
          if(id === item.id){
            return false;
          }
          else{
            return true;
          }
        })
    }
}
