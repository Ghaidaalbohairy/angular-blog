import { Injectable } from '@angular/core';
import {Observable, observable, of} from 'rxjs'
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]>{
    const tasks = of (TASKS);
    return tasks;
  }
}