import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PickEtherListComponent } from "./pick-ether-list/pick-ether-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";


const routes: Routes =[
    {path: 'pick2gether', component: PickEtherListComponent},
    { path: '', component: LandingPageComponent }
];

@NgModule(
    {
        imports:[
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class AppRoutingModule {}