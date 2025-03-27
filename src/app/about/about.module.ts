import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AboutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: AboutComponent }]) // Set the default route
    ]
})
export class AboutModule { }
