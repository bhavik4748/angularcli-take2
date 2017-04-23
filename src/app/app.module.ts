import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { PlanWorkComponent } from './portal/plan-work/plan-work.component';
import { ScopeOfWorkComponent } from './portal/scope-of-work/scope-of-work.component';
import { AppStatusComponent } from './portal/app-status/app-status.component';
import { CostAffidavitComponent } from './portal/cost-affidavit/cost-affidavit.component';
import { StatementSignatureComponent } from './portal/statement-signature/statement-signature.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  // { path: 'portal', component: PortalComponent },
  //{ path: 'app', component: AppComponent , outlet:'r1'},
  { path: 'login', component: LoginComponent },
  { path: 'dashBoard', component: DashboardComponent },
  {
    path: 'portal', component: PortalComponent, children: [
      { path: '', redirectTo: 'planWork', pathMatch: 'full' },
      { path: 'planWork', component: PlanWorkComponent },
      { path: 'scopeOfWork', component: ScopeOfWorkComponent },
      { path: 'costAffidavit', component: CostAffidavitComponent },
      { path: 'statementAndSignature', component: StatementSignatureComponent }
    ]
  },
  { path: '', redirectTo: 'portal.planWork', pathMatch: 'full' },
  { path: '**', redirectTo: 'portal.planWork', pathMatch: 'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    PlanWorkComponent,
    ScopeOfWorkComponent,
    AppStatusComponent,
    CostAffidavitComponent,
    StatementSignatureComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
