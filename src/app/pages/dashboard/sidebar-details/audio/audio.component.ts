import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-audio',
  imports: [TranslatePipe],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.css',
})
export class AudioComponent implements AfterViewInit {
  @ViewChild('audio', { static: false }) audio!: ElementRef<HTMLAudioElement>;

  isPlaying: boolean = false;
  currentTime = 0;
  duration = 0;

  ngAfterViewInit(): void {
    const audioElement = this.audio.nativeElement;

    // Ensure metadata is loaded initially
    this.duration = audioElement.duration || 0;

    // Update currentTime dynamically
    audioElement.addEventListener('timeupdate', () => {
      this.currentTime = audioElement.currentTime;
    });

    // Ensure duration is updated when metadata is loaded
    audioElement.addEventListener('loadedmetadata', () => {
      this.duration = audioElement.duration;
    });
  }

  togglePlay(): void {
    const audioElement = this.audio.nativeElement;

    if (audioElement.paused) {
      audioElement.play();
      this.isPlaying = true;
    } else {
      audioElement.pause();
      this.isPlaying = false;
    }
  }

  seekAudio(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.audio.nativeElement.currentTime = Number(inputElement.value);
    this.currentTime = Number(inputElement.value);
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }
}
