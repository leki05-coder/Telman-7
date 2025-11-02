import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet ,} from '@angular/router';
 

 

const marell = (text : string) => text;
const text : string = ('о компании ');


const newPages : number [] = [5,4,3,2,1] ;



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf , NgFor ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'plow';

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
