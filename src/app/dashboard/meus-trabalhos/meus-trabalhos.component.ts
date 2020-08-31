import { Component, OnInit } from '@angular/core';
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTerminal} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-meus-trabalhos',
  templateUrl: './meus-trabalhos.component.html',
  styleUrls: ['./meus-trabalhos.component.scss']
})
export class MeusTrabalhosComponent implements OnInit {

  faFileWord = faCheck;
  faTerminal = faTerminal;
  slideIndex = 1;
  constructor() { }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }
  showSlides(index: number) {
    // const slides = document.getElementsByClassName('slide');
    const slides = document.querySelectorAll('.slide');
    const dots = document.getElementsByClassName('dot');
    if(index > slides.length) {
      this.slideIndex = 1;
    }
    if(index < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'display: none');
    }
    for (let i = 0; i < dots.length; i++ ) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].setAttribute('style', 'display: block');
    dots[this.slideIndex - 1].className += ' active';
  }
  currentSlide(index: number) {
    this.slideIndex = index;
    this.showSlides(this.slideIndex);
  }
  plusSlides(index: number) {
    this.slideIndex += index;
    this.showSlides(this.slideIndex);
  }
}
