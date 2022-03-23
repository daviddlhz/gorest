import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class InterceptorService implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token: string = environment.token;
        let request: HttpRequest<any> = req;

        if (token) {
            request = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}

export const interceptorProvider: Provider = [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
]