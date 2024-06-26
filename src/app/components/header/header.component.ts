import { Component, inject } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  categorie: string[] = [];

  // ps = inject(ProdottiService);

  constructor(private ps: ProdottiService) {

  }

  ngOnInit(): void {
    this.ps.getCategories().subscribe(cats => {
      this.categorie = cats;
    })
  }
}
