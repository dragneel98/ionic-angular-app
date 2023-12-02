// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-character-page',
//   templateUrl: './character-page.page.html',
//   styleUrls: ['./character-page.page.scss'],
// })
// export class CharacterPagePage implements OnInit {
//   character: any = [];
//   characterId: string = "";

//   constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
//     this.llamarAPI();
//   }

//   llamarAPI() {
//     this.http.get<any>(`https://rickandmortyapi.com/api/character/${this.characterId}`)
//       .subscribe((data) => {
//         console.log('Datos de la API:', data);
//         this.character = data; // Asigna los datos del personaje a la variable character
//         // Realiza cualquier otra manipulación necesaria de los datos aquí
//       }, (error) => {
//         console.error('Error al llamar a la API:', error);
//       });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.page.html',
  styleUrls: ['./character-page.page.scss'],
})
export class CharacterPagePage implements OnInit {
  character: any = [];
  characterId: string | null = null; // Inicializamos characterId con un valor por defecto

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.characterId) {
      this.llamarAPI();
    }
  }

  llamarAPI() {
    if (this.characterId) {
      this.http.get<any>(`https://rickandmortyapi.com/api/character/${this.characterId}`)
        .subscribe((data) => {
          console.log('Datos de la API:', data);
          this.character = data;
        }, (error) => {
          console.error('Error al llamar a la API:', error);
        });
    }
  }
}

