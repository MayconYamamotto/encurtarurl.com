import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss']
})
export class ShortenerComponent implements OnInit {
  /* FIXME: Arrumar nome das variaveis após fazer backend */
  qrcodeForm!: FormGroup;
  url!: string;
  @ViewChild('shortenedUrl') shortenedUrl!: any;

  constructor(private fb: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.qrcodeForm = this.fb.group({
      url: [null, Validators.required],
    });
  }

  /* TODO: Fazer comunicação com backend */
  onSubmit(): void {
    const newQrcode = this.qrcodeForm.getRawValue();
    this.url = newQrcode.url;
  }

}
