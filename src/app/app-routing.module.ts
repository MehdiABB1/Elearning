import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JavaDetailComponent } from './java-detail/java-detail.component';
import { JavaVarComponent } from './java-var/java-var.component';
import { JavaComponent } from './java/java.component';
import { QuizJavaUnComponent } from './quiz-java-un/quiz-java-un.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'java', component:JavaComponent},
  {path:'var', component:JavaVarComponent},
  {path:'detail', component:JavaDetailComponent},
  {path:'quiz', component:QuizJavaUnComponent},
  {path:'' ,redirectTo :'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
