import { Routes } from '@angular/router';
import { Projects } from './components/projects/projects';
import { Accueil } from './components/accueil/accueil'; // Assure-toi d'importer ton composant Accueil

export const routes: Routes = [
    {
        path: '', // Chemin vide = page d'accueil par défaut
        component: Accueil
    },
    {
        path: 'projects',
        component: Projects
    }
];