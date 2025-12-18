import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        Navbar,
        Footer
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    host: {
        '(document:contextmenu)': 'blockImageActions($event)',
        '(document:dragstart)': 'blockImageActions($event)'
    }
})
export class App {
    blockImageActions(event: Event): void {
        if (event.target instanceof HTMLImageElement) {
            event.preventDefault();
        }
    }
}