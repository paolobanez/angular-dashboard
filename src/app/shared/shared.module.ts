import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,

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
  ]
})
export class SharedModule { }
