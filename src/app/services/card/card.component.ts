import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  myData: any=[];
  mySingleData: any=[];

  constructor(private MyDataService: MyDataService) {};

  ngOnInit(): void {

    this.MyDataService.getData().subscribe((data:any) => {
      this.myData = data.array;
    });

    this.MyDataService.getSingleData().subscribe((response:any) => {
      this.mySingleData = response.array;
    });

  };

}
