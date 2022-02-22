import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Airline } from 'src/app/interfaces/airline.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listview-row',
  templateUrl: './listview-row.component.html',
  styleUrls: ['./listview-row.component.scss']
})
export class ListviewRowComponent implements OnInit {
  @Input() listDataItems!: Airline[];
  @Output() itemSelectedEmitter = new EventEmitter<Airline>();

  cdnUrlPath = environment.CDN_IMG_URL;
  placeholderImg = 'https://via.placeholder.com/90/fff/808080';
  dummyPlaceHolders: number[] = [];
  dummyCount = 500;

  constructor() {}

  ngOnInit(): void {
    this.dummyPlaceHolders = [...this.createDummyElements(this.dummyCount)];
  }
  imageNotFound(item: Airline) {
    console.log('imageNotFound(item) ', item.name);
    return this.placeholderImg;
  }

  onItemSelected(item: Airline) {
    this.itemSelectedEmitter.emit(item);
  }
  createDummyElements(len: number): number[] {
    const idx = [];
    for (let i = 0; i < len; i++) {
      idx.push(i);
    }
    return idx;
  }
}
