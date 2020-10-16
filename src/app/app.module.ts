import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule } from "@angular/router";
import { DaftarProdukComponent } from "./daftar-produk/daftar-produk.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { DaftarBukuComponent } from "./daftar-buku/daftar-buku.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: "about-us", component: AboutUsComponent },
      { path: "phones-list", component: DaftarProdukComponent },
      { path: "books-list", component: DaftarBukuComponent },
      { path: "contact-us", component: ContactUsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DaftarProdukComponent,
    AboutUsComponent,
    ContactUsComponent,
    DaftarBukuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
