import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url:string="http://localhost:8000/api/"


  constructor( private http:HttpClient) { }
}
