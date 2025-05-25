import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { HeroComponent } from './components/hero/hero.component';
import { BioComponent } from './components/bio/bio.component';
import { EventsComponent } from './components/events/events.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ParticlesComponent, HeroComponent, BioComponent, EventsComponent, VideosComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'adricted';
}
