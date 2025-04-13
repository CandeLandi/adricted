import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="particles-container">
      <div *ngFor="let particle of particles"
           class="particle"
           [style.left.%]="particle.x"
           [style.top.%]="particle.y"
           [style.animation-delay.ms]="particle.delay"
           [style.width.px]="particle.size"
           [style.height.px]="particle.size"
           [style.opacity]="particle.opacity">
      </div>
    </div>
  `,
  styles: [`
    .particles-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      background: white;
      border-radius: 50%;
      opacity: 0;
      animation: twinkle 4s infinite;
      will-change: transform, opacity;
    }

    @keyframes twinkle {
      0% { opacity: 0; }
      50% { opacity: 1; }
      100% { opacity: 0; }
    }
  `]
})
export class ParticlesComponent implements OnInit, OnDestroy {
  particles: any[] = [];
  private particleCount = 150;
  private animationFrame: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.createParticles();
    if (this.isBrowser) {
      this.animateParticles();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  private createParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4000,
        speed: Math.random() * 0.3 + 0.2,
        opacity: Math.random() * 0.5 + 0.5
      });
    }
  }

  private animateParticles() {
    if (!this.isBrowser) return;

    this.particles.forEach(particle => {
      particle.y += particle.speed * 0.1;
      if (particle.y > 100) {
        particle.y = 0;
        particle.x = Math.random() * 100;
      }
    });

    this.animationFrame = requestAnimationFrame(() => this.animateParticles());
  }
}
