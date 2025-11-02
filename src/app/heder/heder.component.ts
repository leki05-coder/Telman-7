import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet,} from '@angular/router';


const marell = (text : string) => text;
const text : string = ('о компании ');


const newPages : number [] = [5,4,3,2,1] ;


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


@Component({
    selector: 'heder',
    templateUrl: './heder.component.html',
    styleUrl: './heder.component.scss',
    standalone: true,
    imports: [ NgIf , NgFor, RouterOutlet, RouterLink ]
})

export class HederComponent  { 
 
readonly server = inject(HttpClient);
heder: User [] = [];

constructor() {
this.server.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(

   ( icloud:any) => {
        this.heder = icloud ;
        console.log('klon:', this.heder);
   }
    
)
    }

    deleteHeder(id:number){
     this.heder = this.heder.filter( 
        (item:User) =>{
          if(id === id){
            return false;
          }
          else{
            return true;
          }
        })
    }


  aboutCompany : string = text
 
  openCatalog = true ;
  isShowPhot0 = true ; 
  headeritem1 = 'главная';
  headeritem2 ='о компании';
  headeritem3 = 'каталог ';
 
  hedertoo1 ='Каталог'
  hedertoo2 ='Стройматериалы'
  hedertoo3 ='Инструменты'
  hedertoo4 ='Электрика'
  hedertoo5='Интерьер и одежда'

  newPages : number[]= newPages;
 
}

