import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from './components/particles/particles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { BioComponent } from './components/bio/bio.component';
import { EventsComponent } from './components/events/events.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ParticlesComponent,
    NavbarComponent,
    HeroComponent,
    BioComponent,
    EventsComponent,
    VideosComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'adricted';
}
