import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../models/annonce';


@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  private annonces: Annonce[] = [];

  constructor(private http:HttpClient) {}

  getAnnonces(){
    return this.http.get('http://127.0.0.1:3000/api/annonce/');
  }
  getalluser(){
    return this.http.get('http://localhost:3000/api/users/')
  }
  deleteProduct(id:any){
    return this.http.delete('http://localhost:3000/api/annonce/'+id)
  }

  addannonce(body:any){
    return this.http.post('http://127.0.0.1:3000/api/annonce/add',body)
  }
 
 
  register(body:any){
    return this.http.post('http://localhost:3000/api/auth/register',body)
  }

  login(body:any){
    return this.http.post('http://localhost:3000/api/auth/login',body)
  }
  saveToken(token:any){

    localStorage.setItem('token',token)

  }
  updateannonce(id:string,newan:any){
    return this.http.put('http://127.0.0.1:3000/api/annonce/update/'+id,newan)
  }
}
