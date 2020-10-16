import { Component, OnInit } from "@angular/core";
import { katalogProduk } from "../produk";

@Component({
  selector: "app-daftar-produk",
  templateUrl: "./daftar-produk.component.html",
  styleUrls: ["./daftar-produk.component.css"]
})
export class DaftarProdukComponent implements OnInit {
  katProduk = katalogProduk;

  constructor() {}

  ngOnInit() {}

  keranjang() {
    window.alert("Produk ini telah masuk ke keranjang");
  }
}
