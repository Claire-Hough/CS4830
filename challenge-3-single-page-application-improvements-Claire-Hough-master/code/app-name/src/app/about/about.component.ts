import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  about = {
    "h3":"About Us",
    "p1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at quam vel metus suscipit consequat eu a nisl. Donec nec sapien vitae orci vulputate ornare et ut nulla. Vestibulum sit amet eros mauris. Mauris nisi metus, dictum in blandit sed, egestas ut tellus. Quisque non malesuada tellus. Integer elit libero, venenatis vitae condimentum nec, tristique quis dolor. Nulla dapibus, enim et pulvinar iaculis, nisl leo posuere risus, eu sodales ex velit nec enim. Maecenas auctor sapien vitae arcu consectetur semper. Sed malesuada accumsan pellentesque. Morbi commodo elit sed scelerisque venenatis.",
    "p2":"Quisque hendrerit rutrum nunc, sed interdum eros auctor vitae. Aenean tristique erat velit, at iaculis magna egestas sit amet. Phasellus nec bibendum ex, sit amet congue risus. Integer arcu nulla, tempus vel nulla id, semper rhoncus magna. Cras sapien nisl, pretium eu tristique ac, aliquet suscipit ipsum. Fusce placerat lobortis orci, condimentum vestibulum odio pulvinar mollis. Sed lacinia nisi et consectetur iaculis. Curabitur ex magna, vestibulum at posuere ut, ultrices a nulla. Pellentesque varius mattis metus."
  };


}
