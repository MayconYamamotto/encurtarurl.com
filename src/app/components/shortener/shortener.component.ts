import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss']
})
export class ShortenerComponent {
  /* FIXME: Arrumar nome das variaveis após fazer backend */
  @ViewChild('shortenedUrl') shortenedUrl!: any;
  qrcodeForm!: FormGroup;
  url!: string;
  showComponent!: Boolean;

  constructor(private fb: FormBuilder) {
    this.qrcodeForm = this.fb.group({
      url: [null, Validators.required],
    });
  }

  /* TODO: Fazer comunicação com backend */
  onSubmit(): void {
    const newQrcode = this.qrcodeForm.getRawValue();
    this.url = newQrcode.url;
    this.showComponent = true;
  }

}
