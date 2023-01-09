import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JavaComponent } from './java/java.component';
import { JavaVarComponent } from './java-var/java-var.component';
import { JavaDetailComponent } from './java-detail/java-detail.component';
import { QuizJavaUnComponent } from './quiz-java-un/quiz-java-un.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JavaComponent,
    JavaVarComponent,
    JavaDetailComponent,
    QuizJavaUnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
