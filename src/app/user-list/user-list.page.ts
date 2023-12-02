import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss']
})

export class UserListPage implements OnInit {
  characters:any = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.llamarAPI();
  }

  llamarAPI() {
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe((data) => {
      // console.log('Datos de la API:', data.results);
      this.characters = data.results
      // Aquí puedes manipular los datos de la API como desees
    }, (error) => {
      console.error('Error al llamar a la API:', error);
    });
  }
}
