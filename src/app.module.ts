import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ngHeader }  from './headers/header.component';
import { ngFooter }  from './headers/footer.component';
import { ngMenu }  from './headers/menu.component';  
import { SingupComponent }  from './singup/singup.component';  
import { DefaultComponent }  from './singup/default.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './content/news.component'; 
import { AssetsComponent } from './content/assets.component'; 
import { InvestComponent } from './content/invest.component'; 


const appRoutes: Routes = [
  { path: 'home', component: DefaultComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'm', component: MainComponent },
  { path: 'p', component: AssetsComponent },
  { path: 'n', component: NewsComponent },
  { path: 's', component: InvestComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule],
    declarations: [ AppComponent , ngHeader, ngFooter, SingupComponent, DefaultComponent, MainComponent, ngMenu,
                  AssetsComponent, NewsComponent, InvestComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule {}

