import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.css'
})
export class JobListingComponent {

}
