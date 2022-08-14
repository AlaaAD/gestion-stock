import {Component, EventEmitter,OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bouttons-action',
  templateUrl: './bouttons-action.component.html',
  styleUrls: ['./bouttons-action.component.scss']
})
export class BouttonsActionComponent implements OnInit {

  @Output()
  clickEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void{
    this.clickEvent.emit();
  }

}
