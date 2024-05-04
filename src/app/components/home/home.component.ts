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

    constructor(
        private moviesService: MoviesService,
    ) {
    }

    async ngOnInit() {
        this.loading = true;
        const result = await this.moviesService.getNowMovie();
        console.log(result);
        this.topMovies = result.results;
        this.loading = false;
    }

    ngAfterViewInit() {
        this.swiper = new Swiper('.swiper', {
            // Parámetros de Swiper
            spaceBetween: 0,
            slidesPerView: 'auto',
        });
    }
}
