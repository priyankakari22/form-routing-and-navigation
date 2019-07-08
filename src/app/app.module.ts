import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { FormtService } from './form-t.service';

import { FormsModule }   from '@angular/forms';
import { EmittersComponent } from './emitters/emitters.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailstComponent } from './detailst/detailst.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'template', component: TemplateComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    EmittersComponent,
    DetailstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [FormtService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
