import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'detailer';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){
      this.matIconRegistry.addSvgIcon(
        "icon-instagram",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-instagram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "icon-vk",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-vk.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "icon-tiktok",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-tiktok.svg")
      );
    }
}
