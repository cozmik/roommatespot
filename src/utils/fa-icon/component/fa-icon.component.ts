import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'fa-icon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.scss']
})
export class FaIconComponent implements OnInit {

  public icon: String;
  public  attr: any;

  @ViewChild('myTag') myTag;
  constructor(el: ElementRef) {
    this.attr = el.nativeElement.attributes.item(1);
    this.attr = this.attr.name.toString();
    console.log(this.attr);
  }
  ngOnInit() {
    this.setClass();
  }

  setClass() {
    this.myTag.nativeElement.setAttribute('class', 'fa fa-'+ this.attr);
  }
}
