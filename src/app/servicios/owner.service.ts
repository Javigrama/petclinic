import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  url = "http://localhost/serviciosWeb/petclinic/servicios.php";
  constructor( private http: HttpClient) { }

  listar(){

    let data = {
      accion: "ListarOwners"
    }

    return this.http.post<any[]>(this.url, JSON.stringify(data));
  }
}
