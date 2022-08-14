import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-articles',
  templateUrl: './page-articles.component.html',
  styleUrls: ['./page-articles.component.scss']
})
export class PageArticlesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  ajouterArticle() {
    this.router.navigate(['addArticle']);
  }
}
