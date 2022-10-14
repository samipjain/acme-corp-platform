import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateTaskService {

  constructor(private http: HttpClient) { }

  taskPageUrl = 'http://localhost:3000/page';

  createTaskPage(params: { title: string; person: string; team: string; }): any {
    return this.http.post(this.taskPageUrl, params);
  }
}
