import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";


@Injectable()
export class HttpService{
  constructor(private http: HttpClient) {
  }

  productUrl :string = 'http://localhost:3000/api/products'

  getData(){
    return this.http.get(this.productUrl)
  }
}
