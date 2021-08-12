import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListsComponent } from './components/todo-lists/todo-lists.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { AddNewTodoListComponent } from './components/add-new-todo-list/add-new-todo-list.component';
import { AddNewTodoItemComponent } from './components/add-new-todo-item/add-new-todo-item.component';
import { EditTodoItemComponent } from './components/edit-todo-item/edit-todo-item.component';
import { EditTodoListComponent } from './components/edit-todo-list/edit-todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './home/components/header/header.component';
import { NavBarComponent } from './home/components/nav-bar/nav-bar.component';
import { TitleComponent } from './home/components/title/title.component';
import { HomeComponent } from './home/components/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoListsComponent,
    TodoItemsComponent,
    AddNewTodoListComponent,
    AddNewTodoItemComponent,
    EditTodoItemComponent,
    EditTodoListComponent,
    HeaderComponent,
    NavBarComponent,
    TitleComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatGridListModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
