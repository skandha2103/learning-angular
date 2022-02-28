import { Component, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/models/album';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor(private dataService: DataService) { }
  albums:IAlbum[] = [];

  ngOnInit(): void {
    this.dataService.getAllAlbums()
        .subscribe({
          next: (albums)=>{
            this.albums = albums;
          }
        })
  }

}
