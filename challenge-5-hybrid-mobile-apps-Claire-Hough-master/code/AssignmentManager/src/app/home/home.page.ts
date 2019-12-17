import { Component } from '@angular/core';
import { Assignment } from 'src/types';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  assignments: Assignment[];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.getAssignments().subscribe(res => {
      this.assignments = res.sort((a, b) => a.dueDate - b.dueDate);
    });
  }

  archive(assignment){
    this.dataService.archiveAssignment(assignment, assignment.id);
  }

  refreshPage(event){
    console.log('Begin async operation');
    // this.ngOnInit();
    window.location.reload();
    setTimeout(() => {
      // console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
