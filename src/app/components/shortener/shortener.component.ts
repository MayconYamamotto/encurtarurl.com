import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Url } from 'src/app/models/url';
import { ShortenerService } from 'src/app/services/shortener.service';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss']
})
export class ShortenerComponent {
  /* FIXME: Arrumar nome das variaveis após fazer backend */
  @ViewChild('shortenedUrl') shortenedUrl!: any;
  showComponent!: Boolean;
  qrcodeForm!: FormGroup;
  url!: Url;

  constructor(private readonly shortenerService: ShortenerService, private fb: FormBuilder) {
    this.qrcodeForm = this.fb.group({
      url: [null, Validators.required],
    });
  }

  /* TODO: Fazer comunicação com backend */
  onSubmit(): void {
    const newQrcode = this.qrcodeForm.getRawValue();

    this.shortenerService.encurtarUrl(newQrcode).subscribe((it) => {
      this.url = it;
    });

  }

}
