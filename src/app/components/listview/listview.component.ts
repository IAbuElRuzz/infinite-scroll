import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Airline } from 'src/app/interfaces/airline.model';

import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share.service';
import { StoreDataService } from 'src/app/services/store.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
/*
https://www.kayak.com/h/mobileapis/directory/airlines/homework
*/
export class ListviewComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;

  listViewData: Airline[] = [];
  storeViewData: Airline[] = [];

  constructor(
    private router: Router,
    private storeService: StoreDataService,
    private shareService: ShareDataService
  ) {
    this.storeService.dataService$.subscribe({
      next: (data: Airline[]) => {
        // console.log('data', data);
        this.listViewData = [...data];
        this.storeViewData = [...data];
      },
      error: (err: any) => {
        console.log('Error err ', err);
      }
    });
  }

  ngOnInit(): void {}

  selectedItem(item: Airline) {
    this.shareService.setRowDetails(item);
    this.router.navigate(['detail/', item.name]);
  }

  onBackspace(event: KeyboardEvent) {
    if (event.key === 'Backspace') {
      this.listViewData = [...this.storeViewData];
    }
  }
  onSearchClear() {
    this.listViewData = [...this.storeViewData];
    this.searchInput.nativeElement.value = '';
  }

  onSearchFilter(searchString: string) {
    if (searchString.length > 0) {
      this.listViewData = [...this.listViewData].filter((item: Airline) => {
        return item.name?.toLowerCase().includes(searchString.toLowerCase());
      });
    }
  }
}
