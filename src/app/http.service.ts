import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  checkConnection() {
    return console.log('Connected to service.');
  }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
