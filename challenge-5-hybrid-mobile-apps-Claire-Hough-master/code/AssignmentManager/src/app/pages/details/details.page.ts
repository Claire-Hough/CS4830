import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/types';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  assignment: Assignment;

  assignmentForm = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.maxLength(40)])],
    class: ['', Validators.compose([Validators.required, Validators.maxLength(40)])],
    dueDate: ['', [Validators.required]],
    details: ['', Validators.compose([Validators.maxLength(200)])],
    archived: ['', [Validators.required]]
    // , Validators.pattern('^[a-zA-Z0-9s-]*$')
    // {value: true, disabled: true}
    // archived: boolean;
  });

  assignmentId = null;

  constructor(private dataService: DataService, private route: ActivatedRoute,
    private loadingController: LoadingController, private nav: NavController, private fb: FormBuilder) { }

  ngOnInit() {
    this.assignmentId = this.route.snapshot.params['id'];
    if (this.assignmentId) {
      this.loadAssignment();
    }
  }

  async loadAssignment() {
    const loading = await this.loadingController.create({
      message: "Loading Assignment..."
    });
    await loading.present();

    this.dataService.getAssignment(this.assignmentId).subscribe(res => {
      loading.dismiss();
      this.assignment = res;
      this.assignmentForm.controls.name.setValue(this.assignment.name);
      this.assignmentForm.controls.class.setValue(this.assignment.class);
      this.assignmentForm.controls.dueDate.setValue(this.assignment.dueDate);
      this.assignmentForm.controls.details.setValue(this.assignment.details);
      this.assignmentForm.controls.archived.setValue(this.assignment.archived);
    });
  }

  async saveAssignment() {
    const loading = await this.loadingController.create({
      message: "Saving Assignment..."
    });
    await loading.present();

    if (this.assignmentId) {
      this.dataService.updateAssignment(this.assignmentForm.value, this.assignmentId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
    else {
      this.dataService.addAssignment(this.assignmentForm.value).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }
}
