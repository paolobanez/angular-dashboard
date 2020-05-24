import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from 'src/app/modules/dashboard.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    DashboardService
  ],
})
export class DefaultModule { }
