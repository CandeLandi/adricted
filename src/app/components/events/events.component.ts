import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  day: string;
  month: string;
  title: string;
  venue: string;
  location: string;
  time: string;
  ticketLink: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events: Event[] = [
    {
      day: '15',
      month: 'JUN',
      title: 'Summer Festival 2024',
      venue: 'Main Stage',
      location: 'Buenos Aires, Argentina',
      time: '22:00 - 04:00',
      ticketLink: 'https://example.com/tickets'
    },
    {
      day: '22',
      month: 'JUL',
      title: 'Club Night',
      venue: 'The Underground',
      location: 'Mendoza, Argentina',
      time: '23:00 - 06:00',
      ticketLink: 'https://example.com/tickets'
    },
    {
      day: '05',
      month: 'AUG',
      title: 'Beach Party',
      venue: 'Ocean Club',
      location: 'Mar del Plata, Argentina',
      time: '21:00 - 05:00',
      ticketLink: 'https://example.com/tickets'
    }
  ];
}
