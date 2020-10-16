import { Component, OnInit } from "@angular/core";
import { katalogBuku } from "../buku";

@Component({
  selector: "app-daftar-buku",
  templateUrl: "./daftar-buku.component.html",
  styleUrls: ["./daftar-buku.component.css"]
})
export class DaftarBukuComponent implements OnInit {
  katBuku = katalogBuku;
  constructor() {}

  ngOnInit() {}

  keranjang() {
    window.alert("Produk ini telah masuk ke keranjang");
  }
}
