import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  public audio!: HTMLAudioElement;
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject("00:00");
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject("-00:00"); 
  public playerStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false); 
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0); 

  callback: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.audio = new Audio;
    this.trackInfo$.subscribe(response => {
      if(response){
        this.setAudio(response);
      }
    })

    this.listAllEvents();
  }

  private listAllEvents(): void{
    this.audio.addEventListener("timeupdate", this.calculateTime, false)
    this.audio.addEventListener("playing", this.setPlayerStatus, false)
    this.audio.addEventListener("play", this.setPlayerStatus, false)
    this.audio.addEventListener("pause", this.setPlayerStatus, false)
    this.audio.addEventListener("ended", this.setPlayerStatus, false)
  }

  private setPercentage(currentTime: number, duration:number): void {
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage);
  }

  private setPlayerStatus = (state: any) => {
    switch(state.type) {
      case "play":
        this.playerStatus$.next(true);
      break;
      case "playing":
        this.playerStatus$.next(true);
      break;
      case "pause":
        this.playerStatus$.next(false);
      break;
      case "ended":
        this.playerStatus$.next(false);
      break;
      default:
        this.playerStatus$.next(false);
        break;
    }
  }

  private calculateTime = () => {
    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setPercentage(currentTime, duration);
    this.setTimeRemaining(currentTime, duration);
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor( currentTime % 60 );
    let minutes = Math.floor ( (currentTime / 60 ) % 60 );

    const displaySeconds = (seconds < 10 ) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10 ) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(displayFormat);
  }

  private setTimeRemaining(currentTime: number, duration:number){
    let timeLeft = duration - currentTime;
    let seconds = Math.floor( timeLeft % 60 );
    let minutes = Math.floor ( (timeLeft / 60 ) % 60 );
    const displaySeconds = (seconds < 10 ) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10 ) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(displayFormat);
  }

  public setAudio(track: TrackModel): void{
    this.audio.src = track.url;
    this.audio.play()
  }

  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause();
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio;
    const percentageToSecond = ( percentage * duration) / 100;
    this.audio.currentTime = percentageToSecond;
  }
}
