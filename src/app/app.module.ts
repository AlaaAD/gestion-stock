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
    DetailMouvementStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
