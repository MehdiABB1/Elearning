import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatJavaComponent } from './certificat-java/certificat-java.component';
import { HomeComponent } from './home/home.component';
import { JavaArraysComponent } from './java-arrays/java-arrays.component';
import { JavaConditionalsComponent } from './java-conditionals/java-conditionals.component';
import { JavaDetailComponent } from './java-detail/java-detail.component';
import { JavaLoopsComponent } from './java-loops/java-loops.component';
import { JavaObjectOrComponent } from './java-object-or/java-object-or.component';
import { JavaVarComponent } from './java-var/java-var.component';
import { JavaComponent } from './java/java.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizJavaUnComponent } from './quiz-java-un/quiz-java-un.component';
import { UmlArchitectureComponent } from './uml-architecture/uml-architecture.component';
import { UmlClassComponent } from './uml-class/uml-class.component';
import { UmlOverviewComponent } from './uml-overview/uml-overview.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'java', component:JavaComponent},
  {path:'var', component:JavaVarComponent},
  {path:'detail', component:JavaDetailComponent},
  {path:'quiz', component:QuizJavaUnComponent},
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'arrays',
    component: JavaArraysComponent,
  },
  {
    path: 'conditionals',
    component: JavaConditionalsComponent,
  },
  {
    path: 'loops',
    component: JavaLoopsComponent,
  },
  {
    path: 'oob',
    component: JavaObjectOrComponent,
  },
  {
    path: 'certif',
    component: CertificatJavaComponent,
  },
  {
    path: 'overview',
    component: UmlOverviewComponent,
  },
  {
    path: 'architecture',
    component: UmlArchitectureComponent,
  },
  {
    path: 'class',
    component: UmlClassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
