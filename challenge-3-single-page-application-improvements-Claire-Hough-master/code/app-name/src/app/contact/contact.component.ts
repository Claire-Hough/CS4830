import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contact = {
    "h3":"Send Us a Message",
    "p1":"Etiam porttitor faucibus odio, vitae auctor turpis posuere eget:",
    "ahref":"mailto:loremipsum.xyz",
    "a":"loremipsum.xyz",
    "p2":". Etiam vel risus a nibh malesuada viverra quis non sem. Pellentesque pellentesque nisl non dolor ultricies, nec aliquet ligula sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus, nunc quis rutrum sagittis, nulla dolor vulputate arcu, sit amet vestibulum augue augue et felis. Phasellus eleifend consequat accumsan. Pellentesque at risus elit. Mauris tincidunt nisi vel facilisis laoreet. Fusce eget lobortis sapien."
  }

}
