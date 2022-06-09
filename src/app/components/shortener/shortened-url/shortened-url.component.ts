import { Component, Input, OnInit } from '@angular/core';
import { QRCodeElementType } from 'angularx-qrcode';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-shortened-url',
  templateUrl: './shortened-url.component.html',
  styleUrls: ['./shortened-url.component.scss']
})
export class ShortenedUrlComponent implements OnInit {
  /* FIXME: Arrumar nome das variaveis após fazer backend */
  urlGenerate!: string;
  elementType!: QRCodeElementType;
  @Input() url!: string;

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.urlGenerate = this.url;
  }
  
  copyUrl(text: string): void {
    this.clipboard.copy(text);
  }
}
