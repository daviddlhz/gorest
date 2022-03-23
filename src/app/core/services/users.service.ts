import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUserDto, SendUser } from "@domain/users/user.dto";
import { IUserRepository } from "@domain/users/user.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class UserService implements IUserRepository {

    constructor(private http: HttpClient) { }

    getAll(): Observable<HttpResponse<any>> {
        return this.http.get<HttpResponse<any>>(`${environment.baseUrl}/public/v2/users`, { observe: 'response' })
    }

    create(user: SendUser): Observable<HttpResponse<SendUser>> {
        return this.http.post<SendUser>(`${environment.baseUrl}/public/v2/users`, user, { observe: 'response' })
    }

    update(user: IUserDto): Observable<HttpResponse<IUserDto>> {
        return this.http.put<IUserDto>(`${environment.baseUrl}/public/v2/users/${user.id}`, user, { observe: 'response' })
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete(`${environment.baseUrl}/public/v2/users/${id}`, { observe: 'response' })
    }
}