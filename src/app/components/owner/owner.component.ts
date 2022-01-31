import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/servicios/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  public lista_owners: any[] =[];
  constructor(private http: OwnerService) { }

  ngOnInit(): void {

    this.http.listar().subscribe({
      next: (owners: any[])=> {
        this.lista_owners = owners
        console.log(this.lista_owners);
      },
      error: (err: Error)=> console.log(err)
    })
  }

}
