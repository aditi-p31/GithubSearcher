import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username = 'aditi-p31';
    private client_id = '80b9ac37df166a05e441';
    private client_secret='317addf4a5bea4a6df09a002bf45721f944ff728';

    constructor(private _http:Http){
        console.log("GithubService started..");
    }

    getUser(){
        return this._http.get('https://api.github.com/users/' + this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json()); 
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUsername(username:string){
        this.username = username;
    }
}