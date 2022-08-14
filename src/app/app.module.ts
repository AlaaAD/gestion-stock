import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticlesComponent } from './pages/articles/page-articles/page-articles.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonsActionComponent } from './composants/bouttons-action/bouttons-action.component';
import { NouveauArticleComponent } from './pages/articles/nouveau-article/nouveau-article.component';
import { PageMouvementStockComponent } from './pages/mouvement-stock/page-mouvement-stock/page-mouvement-stock.component';
import { DetailMouvementStockArticleComponent } from './composants/detail-mouvement-stock-article/detail-mouvement-stock-article.component';
import { DetailMouvementStockComponent } from './composants/detail-mouvement-stock/detail-mouvement-stock.component';
import { DetailClientFournisseurComponent } from './composants/detail-client-fournisseur/detail-client-fournisseur.component';
import { PageClientsComponent } from './pages/clients/page-clients/page-clients.component';
import { PageFournisseursComponent } from './pages/fournisseurs/page-fournisseurs/page-fournisseurs.component';
import { NouveauClientFournisseurComponent } from './composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { NouveauClientComponent } from './pages/clients/nouveau-client/nouveau-client.component';
import { NouveauFournisseurComponent } from './pages/fournisseurs/nouveau-fournisseur/nouveau-fournisseur.component';
import { DetailCommandeClientFournisseurComponent } from './composants/detail-commande-client-fournisseur/detail-commande-client-fournisseur.component';
import { CommandesFournisseursComponent } from './pages/fournisseurs/commandes-fournisseurs/commandes-fournisseurs.component';
import { CommandesClientsComponent } from './pages/clients/commandes-clients/commandes-clients.component';
import { DetailCommandeComponent } from './composants/detail-commande/detail-commande.component';
import { NouvelleCommandeClientFournisseurComponent } from './composants/nouvelle-commande-client-fournisseur/nouvelle-commande-client-fournisseur.component';
import { DetailNouvelleCommandeComponent } from './composants/detail-nouvelle-commande/detail-nouvelle-commande.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { DetailCategorieComponent } from './composants/detail-categorie/detail-categorie.component';
import { PageUtilisateursComponent } from './pages/utilisateurs/page-utilisateurs/page-utilisateurs.component';
import { NouveauUtilisateurComponent } from './pages/utilisateurs/nouveau-utilisateur/nouveau-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticlesComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonsActionComponent,
    NouveauArticleComponent,
    PageMouvementStockComponent,
    DetailMouvementStockArticleComponent,
    DetailMouvementStockComponent,
    DetailClientFournisseurComponent,
    PageClientsComponent,
    PageFournisseursComponent,
    NouveauClientFournisseurComponent,
    NouveauClientComponent,
    NouveauFournisseurComponent,
    DetailCommandeClientFournisseurComponent,
    CommandesFournisseursComponent,
    CommandesClientsComponent,
    DetailCommandeComponent,
    NouvelleCommandeClientFournisseurComponent,
    DetailNouvelleCommandeComponent,
    PageCategoriesComponent,
    NouvelleCategorieComponent,
    DetailCategorieComponent,
    PageUtilisateursComponent,
    NouveauUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
