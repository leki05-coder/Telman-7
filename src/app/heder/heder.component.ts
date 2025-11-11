import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet,} from '@angular/router';


const marell = (text : string) => text;
const text : string = ('о компании ');


const newPages : number [] = [5,4,3,2,1] ;


@Component({
    selector: 'heder',
    templateUrl: './heder.component.html',
    styleUrl: './heder.component.scss',
    standalone: true,
    imports: [ NgIf , NgFor, RouterOutlet, RouterLink ]
})

export class HederComponent  { 
 
readonly server = inject(HttpClient);
  heder : any  = [];

constructor() {
this.server.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(

   ( icloud:any) => {
        this.heder = icloud ;
   }
)
}


  aboutCompany : string = text
 
  openCatalog = true ;
  isShowPhoto = true ; 
  headeritem1 = 'главная';
  headeritem2 ='о компании';
  headeritem3 = 'каталог ';
 
  heder1 ='Каталог'
  heder2 ='Стройматериалы'
  heder3 ='Инструменты'
  heder4 ='Электрика'
  heder5='Интерьер и одежда'

  newPages : number[]= newPages;
 
}

