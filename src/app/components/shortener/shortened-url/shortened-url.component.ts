import { Component, Input } from '@angular/core';
import { QRCodeElementType } from 'angularx-qrcode';
import { Clipboard } from '@angular/cdk/clipboard';
import { Url } from 'src/app/models/url';

@Component({
  selector: 'app-shortened-url',
  templateUrl: './shortened-url.component.html',
  styleUrls: ['./shortened-url.component.scss']
})
export class ShortenedUrlComponent {
  /* FIXME: Arrumar nome das variaveis após fazer backend */
  elementType!: QRCodeElementType;
  @Input() generatedUrl!: Url;

  constructor(private clipboard: Clipboard) {}
  
  copyUrl(text: Url): void {
    this.clipboard.copy(text.url);
  }
}
