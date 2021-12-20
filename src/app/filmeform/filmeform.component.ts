import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-filmeform',
  templateUrl: './filmeform.component.html',
  styleUrls: ['./filmeform.component.css']
})

export class FilmeformComponent implements OnInit {

  constructor (
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        console.log(params['id'])
      }
    });
  }

}
