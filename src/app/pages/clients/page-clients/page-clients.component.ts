import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  ajouterClient() {
    this.router.navigate(['nouveauClient']);
  }
}
