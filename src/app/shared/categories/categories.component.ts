import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
public categories:string[] = [
'all',
'national',
'business',
'sports',
'world',
'politics',
'technology',
'startup',
'entertainment',
'miscellaneous',
'hatke',
'science',
'automobile',
]
  constructor() { }

  ngOnInit(): void {
  }

}
