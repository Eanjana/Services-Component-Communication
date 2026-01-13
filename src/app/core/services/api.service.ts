import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly tasks: Task[] = [
    { id: 1, title: 'Learn Angular DI', completed: false },
    { id: 2, title: 'Refactor service using inject()', completed: false }
  ];

  public title = 'Task Management';


  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }


  getRandomTask(): Observable<Task> {
    const randomIndex = Math.floor(Math.random() * this.tasks.length);
    return of(this.tasks[randomIndex]);
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
    }
  }
}