
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    private baseUrl = environment.url;
    private apiKey = environment.apiKey;
    private language = 'es-ES';

    constructor(
    ) {
    }

    async getNowMovie(page: number = 1) {
        try {
            const response = await fetch(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=${this.language}&page=${page}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        }
    }
}
