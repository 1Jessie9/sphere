
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    private baseUrl = environment.url;
    private apiKey = environment.apiKey;
    private language = 'es-ES';
    private genres: any[] = [];

    constructor(
    ) {
    }

    async getGenres() {
        try {
            if (this.genres.length) return this.genres;

            const response = await fetch(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=${this.language}`);
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

    async getTopRatedMovies(page: number = 1) {
        try {
            const response = await fetch(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=${this.language}&page=${page}`);
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
