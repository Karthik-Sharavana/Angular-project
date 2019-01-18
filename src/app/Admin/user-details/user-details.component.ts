import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  displayedColumns: string[] = ['empid','empname','empemail','rnumber','floor','npersons'];
  userdetails = new MatTableDataSource<InterfaceUserDetails>(USER_DETAILS);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit()
  {
    this.userdetails.paginator = this.paginator;
  }

  applyFilter(filterValue: string)
  {
    this.userdetails.filter = filterValue.trim().toLocaleLowerCase();
  }

}

export interface InterfaceUserDetails
{
  empid: number;
  empname: string;
  empemail: string;
  rnumber: number;
  floor: number;
  npersons: number;
}

const USER_DETAILS: InterfaceUserDetails[] = [
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 },
  { empid: 1, empname: 'happy', empemail: 'happy@gamil.com', rnumber: 2, floor: 3, npersons: 15 }
];