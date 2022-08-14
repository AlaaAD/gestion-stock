import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageArticlesComponent} from "./pages/articles/page-articles/page-articles.component";
import {NouveauArticleComponent} from "./pages/articles/nouveau-article/nouveau-article.component";
import {PageMouvementStockComponent} from "./pages/mouvement-stock/page-mouvement-stock/page-mouvement-stock.component";
import {PageClientsComponent} from "./pages/clients/page-clients/page-clients.component";
import {PageFournisseursComponent} from "./pages/fournisseurs/page-fournisseurs/page-fournisseurs.component";
import {NouveauClientComponent} from "./pages/clients/nouveau-client/nouveau-client.component";
import {NouveauClientFournisseurComponent} from "./composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component";
import {NouveauFournisseurComponent} from "./pages/fournisseurs/nouveau-fournisseur/nouveau-fournisseur.component";
import {CommandesFournisseursComponent} from "./pages/fournisseurs/commandes-fournisseurs/commandes-fournisseurs.component";
import {CommandesClientsComponent} from "./pages/clients/commandes-clients/commandes-clients.component";
import {NouvelleCommandeClientFournisseurComponent} from "./composants/nouvelle-commande-client-fournisseur/nouvelle-commande-client-fournisseur.component";
import {PageCategoriesComponent} from "./pages/categories/page-categories/page-categories.component";
import {NouvelleCategorieComponent} from "./pages/categories/nouvelle-categorie/nouvelle-categorie.component";
import {PageUtilisateursComponent} from "./pages/utilisateurs/page-utilisateurs/page-utilisateurs.component";
import {NouveauUtilisateurComponent} from "./pages/utilisateurs/nouveau-utilisateur/nouveau-utilisateur.component";
import {PageProfilComponent} from "./pages/profil/page-profil/page-profil.component";
import {ChangerMotDePasseComponent} from "./pages/profil/changer-mot-de-passe/changer-mot-de-passe.component";

const routes: Routes = [
  {
    path : 'login',
    component : PageLoginComponent
  },
  {
    path : 'inscription',
    component : PageInscriptionComponent
  },
  {
    path : '',
    component : PageDashboardComponent,
    children : [
      {
        path : 'statistiques',
        component : PageStatistiquesComponent
      },
      {
        path : 'articles',
        component : PageArticlesComponent
      },
      {
        path : 'addArticle',
        component : NouveauArticleComponent
      },
      {
        path : 'mouvementStock',
        component : PageMouvementStockComponent
      },
      {
        path : 'clients',
        component : PageClientsComponent
      },
      {
        path : 'nouveauClient',
        component : NouveauClientComponent
      },
      {
        path : 'commandesClients',
        component : CommandesClientsComponent
      },
      {
        path : 'nouvelleCommandeClient',
        component : NouvelleCommandeClientFournisseurComponent
      },
      {
        path : 'fournisseurs',
        component : PageFournisseursComponent
      },
      {
        path : 'nouveauFournisseur',
        component : NouveauFournisseurComponent
      }
      ,
      {
        path : 'commandesFournisseurs',
        component : CommandesFournisseursComponent
      },
      {
        path : 'nouvelleCommandeFournisseur',
        component : NouvelleCommandeClientFournisseurComponent
      },
      {
        path : 'categories',
        component : PageCategoriesComponent
      },
      {
        path : 'nouvelleCategorie',
        component : NouvelleCategorieComponent
      },
      {
        path : 'utilisateurs',
        component : PageUtilisateursComponent
      },
      {
        path : 'nouveauUtilisateur',
        component : NouveauUtilisateurComponent
      },
      {
        path : 'profil',
        component : PageProfilComponent
      },
      {
        path : 'changepwd',
        component : ChangerMotDePasseComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
