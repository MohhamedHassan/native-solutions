import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  show=false
   activeLink: string = 'home'; // القيمة الإفتراضية
   isScrolled = false; // حالة الـ scroll

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
 
   setActive(link: string) {
    this.activeLink = link;
  }
}
