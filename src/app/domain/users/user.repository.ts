import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserDto, SendUser } from './user.dto';

export interface IUserRepository {

  getAll(): Observable<HttpResponse<any>>;
  create(user: SendUser): Observable<HttpResponse<SendUser>>;
  update(user: IUserDto): Observable<HttpResponse<IUserDto>>;
  delete(id: number): Observable<HttpResponse<any>>;
}
