import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { AreaComponent } from './widgets/area/area.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    MaterialModule,
    FlexLayoutModule,
    HighchartsChartModule,
  ],
  exports: [
    // Components
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,

    // Modules
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    HighchartsChartModule,
  ]
})
export class SharedModule { }
