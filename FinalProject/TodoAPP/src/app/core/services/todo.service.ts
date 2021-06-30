import { Injectable } from '@angular/core';
import { TodoList, TodoObj } from 'src/app/models/todo.model';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {  Observable } from 'rxjs';
import { TodoItemObj,TodoItem } from 'src/app/models/todoItem.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private serverUrl:string ='';
 
  getTodoLists(): Observable<TodoObj>{
    const result =this.httpClient.get<TodoObj>(`${this.serverUrl}todos`);
    return result;
  }

  getTodoList(groupId: string): Observable<TodoList>{
    const result =this.httpClient.get<TodoList>(`${this.serverUrl}todos/TodoGroup/${groupId}`);
    result.subscribe(val => console.log(val));
    return result;
  }

  getTodoItems(groupId: string): Observable<TodoItemObj>{
    const result =this.httpClient.get<TodoItemObj>(`${this.serverUrl}todos/TodoGroup/${groupId}/Items`);
    return result;
  }

  getTodoItem(groupId: string,itemId:string): Observable<TodoItem>{
    const result =this.httpClient.get<TodoItem>(`${this.serverUrl}todos/TodoGroup/${groupId}/Items/${itemId}`);
    return result;
  }

  deleteTodoList(groupId:string): Observable<any>{
    return this.httpClient.delete<any>(`${this.serverUrl}todos/TodoGroup/${groupId}`);
  }

  addNewTodoList(todoList: TodoList){
    return this.httpClient.post<TodoList>(`${this.serverUrl}todos`,todoList);
  }

  addNewTodoItem(todoItem: TodoItem){
    return this.httpClient.post<TodoItem>(`${this.serverUrl}todos/TodoGroup/{todoItem.currentListId}/Items`,todoItem);
  }

  save(todoList :TodoList): Observable<TodoList>{
    console.log(todoList);
    return this.httpClient.put<TodoList>(`${this.serverUrl}todos`,todoList);
  }

  constructor(private httpClient : HttpClient) {
    this.serverUrl=environment.serverUrl;
   }
}
