import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

// Error displaying function for comment and post services' HTTP requests to rely on:
export function handleError(error: HttpErrorResponse, serviceName: string) {
    if (error.status === 0) {
        console.error(`An error occurred in ${serviceName}: `, error.error); // client-side or network error
    } else {
        // backend returned a response code that wasn't successful
        console.error(`Server returned an unsuccessful code ${error.status}. It says: `, error.error);
    }
    return throwError(() => new Error(`Error in ${serviceName} happened. Something went wrong when communicating with server.`));
}