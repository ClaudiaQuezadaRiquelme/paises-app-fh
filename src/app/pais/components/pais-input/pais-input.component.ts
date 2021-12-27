import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Input()
  placeHolder: string = "Buscar país...";

  @Output()
  onEnter: EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject(); // observable

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe( debounceTime(300) )
    .subscribe( valor => {
      console.log('valor debouncer:', valor);
      this.onDebounce.emit( valor );
    });
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  // teclaPresionada( event: any) {
  //   const valor = event.target.value;
  //   console.log('teclaPresionada valor:', valor);
  //   console.log('termino:', this.termino);    
  // }

  teclaPresionada( event: any) {
    this.debouncer.next(this.termino);
  }

}
