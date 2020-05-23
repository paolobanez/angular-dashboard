import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    // Components
    HeaderComponent,
    SidebarComponent,
    FooterComponent,

    // Modules
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
  ]
})
export class SharedModule { }
