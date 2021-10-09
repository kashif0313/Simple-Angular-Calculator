import { Component, Output , EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  constructor() { }
    @Input() dataSend:any;
    @Output() dataSend1 = new EventEmitter();
  ngOnInit(){

  }
  valueChange()
  {
    this.dataSend=this.dataSend1;
  }
}
