import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsComponent } from './components/charts/charts.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NoticesComponent } from './components/notices/notices.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewNoticeComponent } from './components/view-notice/view-notice.component';
import { MaterialComponent } from './components/material/material.component';
import { NewNoticeComponent } from './components/new-notice/new-notice.component';


export const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'viewNotice',component:ViewNoticeComponent},
{path:'charts',component:ChartsComponent},
{path:'pie-chart',component:PieChartComponent},
{path:'notices',component:NoticesComponent},
{path:'products',component:ProductsComponent},
{path:'material',component:MaterialComponent},
{path:'newNotice',component:NewNoticeComponent},
{path:'**',component:HomeComponent},

];
