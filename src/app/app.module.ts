import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfilComponent } from "./profil/profil.component";

import { ProfilService } from "./profil/profil.service";
import { AgePipe } from "./age.pipe";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillComponent } from "./skill/skill.component";
import { SkillClassPipe } from "./skill-class.pipe";
import { FormationComponent } from "./formation/formation.component";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { LOCALE_ID } from "@angular/core";
import { CategoryImagePipe } from './category-image.pipe';
// the second parameter 'fr-FR' is optional
registerLocaleData(localeFr, "fr-FR");
@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    AgePipe,
    ExperienceComponent,
    SkillComponent,
    SkillClassPipe,
    FormationComponent,
    CategoryImagePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [ProfilService, { provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
