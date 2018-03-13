import {Component} from '@angular/core';

@Component({
    selector: 'app-fecha',
    templateUrl: './fecha.component.html',   //Enlazamos el archivo html con el archivo ts
    styleUrls: ['./fecha.component.css']
})

export class FechaComponent {
    hoy:object = new Date();
}