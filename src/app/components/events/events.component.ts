import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('galleryTrack') galleryTrack!: ElementRef;

  backgroundImage: string = 'assets/images/background/events-bg.jpg';
  private animationInterval?: number;
  private readonly SLIDE_WIDTH = 18.8;
  private currentPosition = 0;

  eventosPasados = [
    { fecha: "8/03/2025", evento: "Roomie Mar del Plata", flyer: "assets/flyers/roomie-8-3-2025.jpeg" },
    { fecha: "31/12/2024", evento: "Markama", flyer: "assets/flyers/markama-31-12-2024.jpeg" },
    { fecha: "27/10/2024", evento: "Pool Party Halloween", flyer: "assets/flyers/poolparty-27-10-2024.jpeg" },
    { fecha: "26/10/2024", evento: "Acid Lemon", flyer: "assets/flyers/acidlemon-26-10-2024.jpeg" },
    { fecha: "26/07/2024", evento: "Roomie Mar del Plata", flyer: "assets/flyers/roomie-26-7-2024.jpeg" },
    { fecha: "21/07/2024", evento: "Amazonia After", flyer: "assets/flyers/amazonia-21-7-2024.jpeg" },
    { fecha: "19/07/2024", evento: "South Club Necochea", flyer: "assets/flyers/south-19-7-2024.jpeg" },
    { fecha: "07/04/2024", evento: "Amazonia After", flyer: "assets/flyers/amazonia-7-4-2024.jpeg" },
    { fecha: "10/02/2024", evento: "Positive Markama", flyer: "assets/flyers/positive-markama-1002.jpeg" },
    { fecha: "01/01/2024", evento: "Positive Markama", flyer: "assets/flyers/positive-markama-0101.jpeg" }
  ];

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.startCarousel();
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      window.clearInterval(this.animationInterval);
    }
  }

  private startCarousel(): void {
    if (!this.galleryTrack?.nativeElement) return;

    const track = this.galleryTrack.nativeElement;
    const slides = track.querySelectorAll('.gallery-slide');
    const totalSlides = slides.length;

    // Clonar todos los slides al final para crear un loop perfecto
    for (let i = 0; i < totalSlides; i++) {
      const clone = slides[i].cloneNode(true);
      track.appendChild(clone);
    }

    this.updateTrackPosition(0);

    this.ngZone.runOutsideAngular(() => {
      this.animationInterval = window.setInterval(() => {
        this.ngZone.run(() => {
          this.currentPosition -= this.SLIDE_WIDTH;

          // Si llegamos al final de los slides originales
          if (Math.abs(this.currentPosition) >= (totalSlides * this.SLIDE_WIDTH)) {
            // Resetear la posición al inicio sin animación
            this.currentPosition = 0;
            this.updateTrackPosition(this.currentPosition, false);

            // Inmediatamente comenzar la siguiente animación
            requestAnimationFrame(() => {
              this.currentPosition -= this.SLIDE_WIDTH;
              this.updateTrackPosition(this.currentPosition);
            });
          } else {
            this.updateTrackPosition(this.currentPosition);
          }

          // Actualizar la imagen de fondo
          const currentIndex = Math.floor(Math.abs(this.currentPosition) / this.SLIDE_WIDTH) % totalSlides;
          this.backgroundImage = this.eventosPasados[currentIndex].flyer;
        });
      }, 2000); // Reducido de 3000ms a 2000ms
    });
  }

  private updateTrackPosition(position: number, animate: boolean = true): void {
    if (!this.galleryTrack?.nativeElement) return;

    const track = this.galleryTrack.nativeElement;
    track.style.transition = animate ? 'transform 0.5s ease-out' : 'none';
    track.style.transform = `translateX(${position}vw)`;
  }

  onFlyerHover(flyerPath: string): void {
    this.backgroundImage = flyerPath;
  }
}
