import { Component, OnInit } from '@angular/core';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  instagramIcon = faInstagram;
  linkedinIcon = faLinkedin;
  whatsIcon = faWhatsapp;
  foneIcon = faPhone;
  copyIcon = faCopyright;
  constructor() { }

  ngOnInit(): void {
  }

}
