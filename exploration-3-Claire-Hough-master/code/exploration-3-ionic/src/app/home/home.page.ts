import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService, private alertController: AlertController) {}

  ngOnInit(){
    // reference: https://stackoverflow.com/questions/48973200/sorting-list-array-from-firebase-database
    this.todoService.getTodos().subscribe(res => {
      this.todos = res.sort((a, b) => a.priority - b.priority);
      // .sort((a, b) => a.priority - b.priority)
    });
  }

  remove(item){
    this.todoService.removeTodo(item.id);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'About',
      subHeader: 'What can I do with this app?',
      message: 'By tapping the "+" button on the bottom right, you can add the attractions you\'d like to experience while on your vacation. Once you have visited them, you can check them off by swiping to the left and tapping "check". Edit entries by tapping on them.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
