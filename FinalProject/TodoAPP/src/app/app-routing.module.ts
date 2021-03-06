import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewTodoListComponent } from './components/add-new-todo-list/add-new-todo-list.component';
import { EditTodoListComponent } from './components/edit-todo-list/edit-todo-list.component';
import { TodoListsComponent } from './components/todo-lists/todo-lists.component';
import { HomeComponent } from './home/components/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';

const appRoutes: Routes = [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'lists', component: TodoListsComponent},
      {path: 'lists/:id/edit',component: EditTodoListComponent},
      {path: 'lists/-1/add',component: AddNewTodoListComponent},
      {path: 'lists/:id',component: TodoListComponent},
      {path: 'items',component: TodoItemsComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
