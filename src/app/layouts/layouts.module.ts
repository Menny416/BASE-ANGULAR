import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { TopnavbarComponent } from './common/topnavbar/topnavbar.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AdminComponent,
    TopnavbarComponent,
    NavigationComponent,
    FooterComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class LayoutsModule { }
