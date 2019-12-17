import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {

  todo: Todo;

  parkForm = this.fb.group({
    park: ['', [Validators.required]],
    task: ['', Validators.compose([Validators.required, Validators.maxLength(40)])],
    time: ['', [Validators.required]],
    priority: ['', Validators.compose([Validators.required, Validators.pattern('^[1-5]*$')])]
  });

  todoId = null;

  constructor(private todoService: TodoService, private route: ActivatedRoute,
    private loadingController: LoadingController, private nav: NavController, private fb: FormBuilder) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: "Loading Todo..."
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
      this.parkForm.controls.park.setValue(this.todo.park);
      this.parkForm.controls.task.setValue(this.todo.task);
      this.parkForm.controls.time.setValue(this.todo.time);
      this.parkForm.controls.priority.setValue(this.todo.priority);
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: "Saving Todo..."
    });
    await loading.present();

    if (this.todoId) {
      // this.parkForm.value
      this.todoService.updateTodo(this.parkForm.value, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
    else {
      this.todoService.addTodo(this.parkForm.value).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }

}
