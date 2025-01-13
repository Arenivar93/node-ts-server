import { PersonModel } from "./PersonModel";

export class PeopleModel{

    private list: PersonModel[] = [];

    constructor(){
        this.loadDataInArray();
    }

    createPerson(name: string,favoriteFood: string, favoriteMovie: string,status: 'Active' | 'Inactive'):void{
        const persona = new PersonModel(name, favoriteFood, favoriteMovie, status);
        this.list.push(persona);
    }

    loadDataInArray(){

        this.list = [];

        let rockyObj = {
            'Name': 'Rocky',
            'Favorite Food': 'Sushi',
            'Favorite Movie': 'Back to The Future',
            'Status': 'Inactive'
        }
        let miroslavObj = {
            'Name': 'Miroslav',
            'Favorite Food': 'Sushi',
            'Favorite Movie': 'American Psycho',
            'Status': 'Active'
        }
        let donnyObj = {
            'Name': 'Donny',
            'Favorite Food': 'Singapore chow mei fun',
            'Favorite Movie': 'The Princess Bride',
            'Status': 'Inactive'    
        }
        let mattObj = {
            'Name': 'Matt',
            'Favorite Food': 'Brisket Tacos',
            'Favorite Movie': 'The Princess Bride',
            'Status': 'Active'
        }

        let listObjects: any = [rockyObj, miroslavObj, donnyObj, mattObj];        

        listObjects.forEach((element:any) => {
            const persona = new PersonModel(element?.Name, element['Favorite Food'], element['Favorite Movie'], element.Status);
            this.list.push(persona);
        });
    }

    get getList() {
        return this.list;
    }
    set setList(data:PersonModel[]) {
        this.list=data;
    }



}