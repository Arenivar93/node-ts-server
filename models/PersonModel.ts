
import { PersonInterface } from '../interfaces/PersonInterface';

export class PersonModel implements PersonInterface {

    Name: string;
    'Favorite Food': string; 
    'Favorite Movie': string;
    Status: 'Active' | 'Inactive';
    Date?: string;

    constructor(
        name: string,
        favoriteFood: string, 
        favoriteMovie: string,
        status: 'Active' | 'Inactive',
        date?: string
    ){
        this.Name = name;
        this['Favorite Food'] = favoriteFood;
        this['Favorite Movie'] = favoriteMovie;
        this.Status = status;
        this.Date = date;
    }
}