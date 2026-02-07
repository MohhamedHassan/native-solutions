import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menu = [
    {text1:'"From the first call to the final handoff, everything was seamless."',text2:"Nebula's chatbot is an absolute game-changer for our customer service, absolutely amazing!"},
      {text1:'" solutions development has increased our productivity by 54%"',text2:"Can't recommend Nebula enough, they absolutely transformed us into a productive machine!"},
        {text1:'"We re delighted with our development subscription from Native Solutions"',text2:"Their flexible subscription based model is so innovative, we can just pause it whenever we want!"}

]
  responsive = [
            {
                breakpoint: '1199px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ]
}
