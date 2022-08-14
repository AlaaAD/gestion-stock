import { Component, OnInit } from '@angular/core';
import {MenuEntity} from "./MenuEntity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties : Array<MenuEntity> =[
    {
      id : "1",
      titre : 'Tableau de board',
      icon : 'fa-solid fa-chart-column',
      url : '',
      sousMenu : [
        {
          id : "11",
          titre : "Vue d'ensemble",
          icon : 'fa-solid fa-chart-simple',
          url : '',
        },
        {
          id : "12",
          titre : "Statistiques",
          icon : 'fa-solid fa-chart-pie',
          url : 'statistiques',
        }
      ]
    },
    {
      id : "2",
      titre : 'Articles',
      icon : 'fa-solid fa-boxes-stacked',
      url : 'articles',
      sousMenu : [
        {
          id : "21",
          titre : "Articles",
          icon : 'fa-solid fa-cubes',
          url : 'articles',
        },
        {
          id : "22",
          titre : "Mouvement du stock",
          icon : 'fab fa-stack-overflow',
          url : 'mouvementStock',
        }
      ]
    },
    {
      id : "3",
      titre : 'Clients',
      icon : 'fa-solid fa-users-line',
      url : 'clients',
      sousMenu : [
        {
          id : "31",
          titre : "Clients",
          icon : 'fa-solid fa-users-rays',
          url : 'clients',
        },
        {
          id : "32",
          titre : "Commandes clients",
          icon : 'fas fa-shopping-basket',
          url : 'commandesClients',
        }
      ]
    },
    {
      id : "4",
      titre : 'Fournisseurs',
      icon : 'fas fa-users',
      url : 'fournisseurs',
      sousMenu : [
        {
          id : "41",
          titre : "Fournisseurs",
          icon : 'fas fa-users',
          url : 'fournisseurs',
        },
        {
          id : "42",
          titre : "Commandes fournisseurs",
          icon : 'fas fa-truck',
          url : 'commandesFournisseurs',
        }
      ]
    },
    {
      id : "5",
      titre : 'Paramètrages',
      icon : 'fa-solid fa-gears',
      url : '',
      sousMenu : [
        {
          id : "51",
          titre : "Catégories",
          icon : 'fa-solid fa-screwdriver-wrench',
          url : 'categories',
        },
        {
          id : "52",
          titre : "Utilisateurs",
          icon : 'fa-solid fa-users-gear',
          url : 'utilisateurs',
        }
      ]
    }
  ];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(url?: string) : void{
    this.router.navigate([url]);
  }
}
