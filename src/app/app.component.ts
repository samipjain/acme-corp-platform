import { Component } from '@angular/core';
import { CreateTaskService } from './services/create-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Acme Corp Platform';

  constructor(private createTaskService: CreateTaskService) {}

  task = {
    'name': '',
    'person': '',
    'team': ''
  }
  pageId: any;

  taskList = [
    {
        "title": "How to source water?",
        "person": "Ajie",
        "team": "Food Services",
        "description": "We need to source water for drinking and growing food."
    },
    {
        "title": "How to grow food?",
        "person": "Nick",
        "team": "Food Services",
        "description": "We need to apply vertical farming techniques to grow food. Additionally, aquaponics is a good idea to save water."
    },
    {
        "title": "How to generate Oxygen?",
        "person": "Eric",
        "team": "Living Spaces"
    },
    {
        "title": "How many people will live in a co-living space?",
        "person": "Vik",
        "team": "Living Spaces"
    },
    {
        "title": "What are the sources of energy?",
        "person": "Michael",
        "team": "Energy"
    },
    {
        "title": "Protection from radiation and mars dust",
        "person": "Antonella",
        "team": "Safety"
    },
    {
        "title": "3D Printers to build Mars dome",
        "person": "Siyang",
        "team": "Robotics & Construction"
    },
    {
        "title": "Design space suits",
        "person": "Bowen",
        "team": "Space Operations"
    },
    {
        "title": "How to get supplies to Mars",
        "person": "Jessica",
        "team": "Finance & Purchasing"
    },
    {
        "title": "Possibilities of generating nuclear power",
        "person": "Diarny",
        "team": "Energy"
    }
  ]

  onSubmit(): void {
    console.log(this.task);

    let params = {title: this.task.name, person: this.task.person, team: this.task.team};

    this.createTaskService.createTaskPage(params).subscribe((data: any) => {
      console.log(data);
      this.pageId = data.id;
    });
  }
}
