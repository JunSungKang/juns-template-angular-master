import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}
  private options = null;
  private param: HttpParams = new HttpParams();

  private setOptions(requestMapping: string, url: string){
    let mHeaders = new HttpHeaders();
    mHeaders.append('cache-control', 'no-cache, no-store, must-revalidate');
    mHeaders.append('content-encoding', 'gzip');
    mHeaders.append('Content-Type', 'text/html; charset=UTF-8');
    mHeaders.append('referrer-policy', 'unsafe-url');

    mHeaders.append('accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');
    mHeaders.append('accept-encoding', 'gzip, deflate, br');
    mHeaders.append('accept-language', 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7');
    mHeaders.append('upgrade-insecure-requests', '1');
    mHeaders.append('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.220 Whale/1.3.53.4 Safari/537.36');
    if(this.param == null){
      this.param = new HttpParams();
    }

    this.options = this.http.options(url,{
      headers: mHeaders,
      params: this.param
    });
  }

  public setParam(mParam){
    this.param = new HttpParams();
    for(let key in mParam){
      this.param.append(key, mParam[key]);
    }
    
  }
  
  public Get(url: string, success, fail){
    this.setOptions("GET", url);
    this.http.get(url, this.options).subscribe(
      (data) => {
        success(data);
      },
      (error) => {
        fail(error);
      }
    );
  }

  public Post(url: string, success, fail){
    this.setOptions("POST", url);
    this.http.post(url, this.options).subscribe(
      (data) => {
        success(data);
      },
      (error) => {
        fail(error);
      }
    );
  }

  public Put(url: string, success, fail){
    this.setOptions("PUT", url);
    this.http.put(url, this.options).subscribe(
      (data) => {
        success(data);
      },
      (error) => {
        fail(error);
      }
    );
  }

  public Delete(url: string, success, fail){
    this.setOptions("DELETE", url);
    this.http.put(url, this.options).subscribe(
      (data) => {
        success(data);
      },
      (error) => {
        fail(error);
      }
    );
  }
}
