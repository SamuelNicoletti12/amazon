import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { Prodotto } from '../../models/prodotto';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css'
})
export class ProdottiVetrinaComponent implements OnInit {

  prodotti: Prodotto[] = [];

  // dependency injection , inniettare le dipendenze meccanismo di angular per dare a chi ha bisogno la stessa istanza condivisa per tutto il progetto
  constructor(private ps: ProdottiService) {

  }
  ngOnInit(): void {
    this.prodotti = this.ps.getProdotti()
    console.log(this.prodotti);
  }
}
