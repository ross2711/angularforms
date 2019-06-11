import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplateformsComponent } from "./templateforms/templateforms.component";
import { ReactiveformsComponent } from "./reactiveforms/reactiveforms.component";

const routes: Routes = [
  { path: "template", component: TemplateformsComponent },
  { path: "reactive", component: ReactiveformsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
  ]
  
})

export class AppRoutingModule {}
