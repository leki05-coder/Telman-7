
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component ({
selector: 'users-list',
templateUrl: './users-list.component.html',
styleUrl:'./users-list.component.scss',
standalone: true,
imports: [ NgFor,NgIf, RouterOutlet ]

})

export class UsersListComponent {

readonly api = inject(HttpClient);
 users= []

constructor() { 

    this.api.get('https://jsonplaceholder.typicode.com/users').subscribe( 

        (cloud: any) => {
            this.users = cloud ;
           console.log( 'Users:', this.users) 
    }

    )

}

}