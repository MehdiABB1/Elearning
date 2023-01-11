import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JavaComponent } from './java/java.component';
import { JavaVarComponent } from './java-var/java-var.component';
import { JavaDetailComponent } from './java-detail/java-detail.component';
import { QuizJavaUnComponent } from './quiz-java-un/quiz-java-un.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { JavaObjectOrComponent } from './java-object-or/java-object-or.component';
import { JavaConditionalsComponent } from './java-conditionals/java-conditionals.component';
import { JavaArraysComponent } from './java-arrays/java-arrays.component';
import { JavaLoopsComponent } from './java-loops/java-loops.component';
import { ChangeBgDirective } from './change-bg.directive';
import { CertificatJavaComponent } from './certificat-java/certificat-java.component';


@NgModule({
  declarations: [
  
    AppComponent,
    HomeComponent,
    JavaComponent,
    JavaVarComponent,
    JavaDetailComponent,
    QuizJavaUnComponent,
    QuestionsComponent,
    JavaObjectOrComponent,
    JavaConditionalsComponent,
    JavaArraysComponent,
    JavaLoopsComponent,
    ChangeBgDirective,
    CertificatJavaComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
