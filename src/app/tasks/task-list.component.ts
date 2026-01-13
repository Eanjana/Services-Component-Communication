import { Component, OnInit, EventEmitter, Input, inject } from '@angular/core';
import { TaskService } from '../core/services/task.service';
import { Task } from '../core/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl : './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

  private readonly taskService = inject(TaskService);

  @Input() isLoggedIn = false;

  tasks: Task[] = [];


  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  markComplete(taskId: number): void {
    this.taskService.completeTask(taskId);
  }
}