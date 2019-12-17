import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/types';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.page.html',
  styleUrls: ['./archives.page.scss'],
})
export class ArchivesPage implements OnInit {
  
  assignments: Assignment[];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.getAssignments().subscribe(res => {
      this.assignments = res;
      // .sort((a, b) => a.dueDate - b.dueDate)
    });
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

  remove(item){
    this.dataService.removeAssignment(item.id);
  }
}
