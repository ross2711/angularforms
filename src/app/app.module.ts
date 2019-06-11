import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule
} from "@angular/material";
import { MatMenuModule} from '@angular/material/menu';

import { AppComponent } from "./app.component";
import { ReactiveformsComponent } from "./reactiveforms/reactiveforms.component";
import { TemplateformsComponent } from "./templateforms/templateforms.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent, TemplateformsComponent, ReactiveformsComponent, MainNavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    //reactive form
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
