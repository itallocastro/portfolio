import { Component, OnInit } from '@angular/core';
import {faRobot} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-body-part-one',
  templateUrl: './body-part-one.component.html',
  styleUrls: ['./body-part-one.component.scss']
})
export class BodyPartOneComponent implements OnInit {

  faRobot = faRobot;
  constructor() { }

  ngOnInit(): void {
  }

}
