import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, Task } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public taskCounter = 0;

  constructor(private readonly apiService: ApiService) { }

  getTasks(): Observable<Task[]> {
    return this.apiService.getTasks();
  }

  completeTask(taskId: number): void {
    this.apiService.completeTask(taskId);
  }
}