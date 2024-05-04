import { Component } from '@angular/core';
import { ITEMS_MENU } from './constants/items';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    public itemsMenu: any[] = ITEMS_MENU;

}
