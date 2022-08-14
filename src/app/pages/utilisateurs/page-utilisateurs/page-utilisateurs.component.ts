import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-utilisateurs',
  templateUrl: './page-utilisateurs.component.html',
  styleUrls: ['./page-utilisateurs.component.scss']
})
export class PageUtilisateursComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  ajouterUtilisateur() {
    this.router.navigate(['nouveauUtilisateur'])
  }
}
