import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoList, TodoObj } from 'src/app/models/todo.model';
import { TodoItem, TodoItemObj } from 'src/app/models/todoItem.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReactiveTodoService {
  private itemListSubject=new BehaviorSubject<TodoList[]>([]);
  private itemsListSubject=new BehaviorSubject<TodoItem[]>([]);

  private serverUrl: string;

  get todoLists$():Observable<TodoList[]>{
    return this.itemListSubject.asObservable();
  }

  get todoListsItemsTotal$():Promise<String>{
    var counterItems= this.httpClient.get<String>(`${this.serverUrl}todos/TodoGroup/ItemsNumber`).toPromise();
    console.log(counterItems);
    return counterItems;
  }

  get todoListsActiveItemsTotal$():Promise<String>{
    var counterItems= this.httpClient.get<String>(`${this.serverUrl}todos/TodoGroup/ActiveItemsNumber`).toPromise();
    return counterItems;
  }

  
  async loadTodoLists():Promise<TodoObj>{
    const todoOObj = await this.httpClient.get<TodoObj>(`${this.serverUrl}todos`).toPromise();
    this.itemListSubject.next(todoOObj.$values);
    return todoOObj;
  }
  
  getTodoList(groupId: string): Observable<TodoList>{
    const result =this.httpClient.get<TodoList>(`${this.serverUrl}todos/TodoGroup/${groupId}`);
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

  async deleteTodoList(groupId:string){
    await this.httpClient.delete<any>(`${this.serverUrl}todos/TodoGroup/${groupId}`).toPromise();
    await this.loadTodoLists();
  }

  async addNewTodoList(todoList: TodoList){
    await this.httpClient.post<TodoList>(`${this.serverUrl}todos`,todoList).toPromise();
    await this.loadTodoLists();
  }

  async addNewTodoItem(todoItem: TodoItem){
    await this.httpClient.post<TodoItem>(`${this.serverUrl}todos/TodoGroup/${todoItem.currentListId}/Items`,todoItem).toPromise();
    await this.loadTodoLists();
  }

  async save(todoList :TodoList): Promise<TodoList>{
    const t= await this.httpClient.put<TodoList>(`${this.serverUrl}todos`,todoList).toPromise();
    await this.loadTodoLists();
    return t;
  }

  constructor(private httpClient : HttpClient) {
    this.serverUrl=environment.serverUrl;
   }
}
