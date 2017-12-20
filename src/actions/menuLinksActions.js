import axios from 'axios';

export const IMPORT_MENU_ACTIONS = "IMPORT_MENU_ACTIONS";

export function importMenuLinks() {
    return axios('https://our-natural-beauty-server.herokuapp.com/api/v1/menuLinks')
        .then(response => response.data)
        .then(menuLinks => ({
            type: IMPORT_MENU_ACTIONS,
            menuLinks
        }))
}