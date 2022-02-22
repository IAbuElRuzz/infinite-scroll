import { Component, OnInit } from '@angular/core';

import { ShareDataService } from 'src/app/services/share.service';
import { Airline } from 'src/app/interfaces/airline.model';
import { environment } from 'src/environments/environment';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
  cdnUrlPath = environment.CDN_IMG_URL;
  kayakTrackerURL = environment.KAYAK_TRACKER_URL;
  searchForm!: FormGroup;

  airlineDetails!: Airline;
  constructor(
    private shareService: ShareDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.shareService.rowDetails$.subscribe((item: Airline) => {
      this.airlineDetails = { ...item };
    });

    this.initForm();
  }

  initForm() {
    this.searchForm = this.fb.group({
      searchFlight: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  get searchFlight() {
    return this.searchForm.controls['searchFlight'];
  }
  openKayakUrl() {
    window.open(this.kayakTrackerURL, '_blank');
  }

  validateUrl(url: string) {
    console.log('url', url);
    let validUrl = /^((http|https):\/\/)/;
    if (!validUrl.test(url)) {
      url = 'https://' + url;
    }
    return url;
  }

  removeUrlPrefix(url: string) {
    let hostname = '';
    try {
      if (url && url.length) {
        const validatedURL = this.validateUrl(url);
        hostname = new URL(validatedURL).hostname;
      }
    } catch (err) {
      console.log('err', err);
    }
    return hostname;
  }
}
