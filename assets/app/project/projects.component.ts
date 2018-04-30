import {Component} from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <div class="container">
    <div class="row">
        <app-project-input></app-project-input>
      </div>
      <hr>
    <div class="row">
      <app-project-list></app-project-list>
    </div>
  </div>
  `
})

export class ProjectsComponent{

}
