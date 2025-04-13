import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events = [
    {
      id: 1,
      name: 'Noche de Vinilos',
      date: '15/03/2024',
      image: 'assets/images/flyers/WhatsApp Image 2025-03-22 at 17.10.03.jpeg',
      venue: 'Club XYZ'
    },
    {
      id: 2,
      name: 'Sesión Especial',
      date: '22/02/2024',
      image: 'assets/images/flyers/WhatsApp Image 2025-03-22 at 17.09.50.jpeg',
      venue: 'Bar ABC'
    },
    {
      id: 3,
      name: 'After Hours',
      date: '10/01/2024',
      image: 'assets/images/flyers/WhatsApp Image 2025-03-22 at 17.08.47 (1).jpeg',
      venue: 'Lounge 123'
    },
    {
      id: 4,
      name: 'DJ Set',
      date: '05/01/2024',
      image: 'assets/images/flyers/WhatsApp Image 2025-03-22 at 17.08.47.jpeg',
      venue: 'Club 456'
    },
    {
      id: 5,
      name: 'Live Session',
      date: '20/12/2023',
      image: 'assets/images/flyers/WhatsApp Image 2025-03-22 at 17.08.46 (2).jpeg',
      venue: 'Studio 789'
    },
    {
      id: 6,
      name: 'Special Guest',
      date: '15/12/2023',
      image: 'assets/images/flyers/WhatsApp Image 2025-03-22 at 17.08.46.jpeg',
      venue: 'Venue XYZ'
    },
    {
      id: 7,
      name: 'Night Session',
      date: '10/12/2023',
      image: 'assets/images/flyers/WhatsApp Image 2025-03-22 at 17.08.45 (1).jpeg',
      venue: 'Club ABC'
    },
    {
      id: 8,
      name: 'Closing Party',
      date: '05/12/2023',
      image: 'assets/images/flyers/WhatsApp Image 2025-03-22 at 17.08.45.jpeg',
      venue: 'Final Venue'
    }
  ];

  currentIndex = 0;
  visibleCards = 3;

  next() {
    if (this.currentIndex < this.events.length - this.visibleCards) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  get visibleEvents() {
    return this.events.slice(this.currentIndex, this.currentIndex + this.visibleCards);
  }
}
