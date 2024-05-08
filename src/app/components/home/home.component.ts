import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
    public swiper!: Swiper;
    public loading: boolean = false;
    public topMovies: any[] = [];
    public topRatedMovies: any[] = [];
    public genres: any[] = [];

    constructor(
        private moviesService: MoviesService,
    ) {
    }

    async ngOnInit() {
        this.loading = true;
        const resultGenres = await this.moviesService.getGenres();
        this.genres = resultGenres.genres;

        await this.getNowMovies();
        await this.getTopRatedMovies();

        this.loading = false;
    }

    async setMovies(result: any, targetArray: any[]) {
        targetArray.length = 0; // Vacía el arreglo targetArray

        result.forEach((movie: any) => {
            const genres = movie.genre_ids.map((genreId: number) => {
                const genre = this.genres.find((genre: { id: number, name: string }) => genre.id === genreId);
                return genre ? genre.name : '';
            });

            targetArray.push({ ...movie, genres }); // Agrega cada película al arreglo targetArray
        });
    }

    async getNowMovies() {
        const result = await this.moviesService.getNowMovie();

        await this.setMovies(result.results, this.topMovies);
    }

    async getTopRatedMovies() {
        const result = await this.moviesService.getTopRatedMovies();

        await this.setMovies(result.results, this.topRatedMovies);
        console.log(this.topRatedMovies)
    }

    ngAfterViewInit() {
        this.swiper = new Swiper('.swiper', {
            spaceBetween: 0,
            slidesPerView: 'auto',
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            effect: 'coverflow'
        });
    }
}
