import {AfterViewInit, Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  toggle: any;
  menu: any ;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.menu = document.querySelector('.menu');
    this.toggle = document.querySelector('.toggle');
    this.toggle.addEventListener('click', this.toggleMenu(), false);
  }

  toggleMenu() {
    if(this.menu.classList.length == 1) {
      this.menu.classList.add('active');

      this.toggle.querySelector('a').innerHTML = '<i class="fas fa-times"></i>';
    } else {
      this.menu.classList.remove('active');

      this.toggle.querySelector('a').innerHTML = '<i class="fas fa-bars"></i>';
    }
  }
}
