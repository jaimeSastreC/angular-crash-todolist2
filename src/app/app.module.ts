// import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// add HttpClientModule to get Json file; and add to imports (down) - add { FormsModule }
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// App components! TS files app.component
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';

// Entry point angular for components !!!

// root app module:
@NgModule({
  // added here
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent
  ],
  // add import modules here
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  // services
  providers: [],
  // main app components here
  bootstrap: [AppComponent]
})
export class AppModule { }

