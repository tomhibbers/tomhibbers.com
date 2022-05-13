import { Component } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'My Projects', homePath: '/', fragment: 'projects', pagePath: '/projects' },
    { title: 'My Blog', homePath: '/blog', fragment: '', pagePath: '/blog' }
  ];

  constructor(private bioService: BioService, private headerService: HeaderService) { }
  
  download() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = '/assets/tomhibberscv.pdf';
    link.download = 'Tom Hibbers CV.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
}
}