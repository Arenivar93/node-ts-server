import { Request, Response } from "express";
import { PeopleModel } from "../models/PeopleModel";
import { PersonModel } from "../models/PersonModel";

const people = new PeopleModel();

export const getList = (req: Request, res: Response) : void => {

    const peopleList: PersonModel[] = people.getList;

    res.json({
        msg: 'List of people',
        data: peopleList
    })

}

export const addMySelf = (req: Request, res: Response) : any => {

    try {
        const {Name, FavoriteFood, FavoriteMovie, Status } = req.body;
        

        if(!Name || !FavoriteFood || !FavoriteMovie || !Status){
            return res.status(401).json({
                msg: 'Some properties are required'
            })
        }

        if(people.getList.some(a => a['Name'].toLowerCase() == Name.toLowerCase())){
            return res.status(409).json({
                msg: `A person with the name ${Name} has already been added`
            })
        }

        people.createPerson(Name,FavoriteFood,FavoriteMovie,Status);

        res.status(201).json({
            msg: `The person named ${Name} has been successfully added`,
        })
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            msg: 'An unexpected error occurred',
        })
    }

    

}

export const addDate = (req: Request, res: Response) : any => {

    const date = new Date().toLocaleString();

    people.getList.forEach(people=>{
        people.Date = date
    });

    res.json({
        msg: 'The date has been added to each person',
    })

}

export const listActive = (req: Request, res: Response) : any => {

    const activePeople: any[] = people.getList.filter(people => people['Status'] === 'Active')
    .map(people => ({
        Name: people.Name,
        Date: people.Date,
        'Favorite Movie': people['Favorite Movie']})
    );


    res.json({
        msg: 'List Active People',
        data: activePeople
    })

}

export const sortByPropertie = (req: Request, res: Response) : any => {

    const  propertieSort  = req.query?.property as keyof PersonModel;


    if (!propertieSort || !['Name', 'Favorite Food', 'Favorite Movie', 'Status', 'Date'].includes(propertieSort)) {
        return res.status(400).json({
          msg: 'Invalid or missing "property" in query parameter'
        });
    }

    const sortList: PersonModel[] = people.getList.sort((a,b)=>{
        const valueA = a[propertieSort];
        const valueB = b[propertieSort];

        if (valueA === undefined || valueB === undefined) {
            return 0;
        }

        if (valueA < valueB) {
            return -1;
          } else if (valueA > valueB) {
            return 1;
          } else {
            return 0;
          }
    })



    res.json({
        msg: `Sort by propertie: ${propertieSort}`,
        data: sortList
    })

}

export const findNoActive = (req: Request, res: Response) : any => {

    const activePeople: any[] = people.getList.filter(people => people['Status'] === 'Active');

    if(!(activePeople.length > 0)){
        return res.json({
            msg: 'No Active records are found'
        })
    }

    res.json({
        msg: `A total of ${activePeople.length} Active records were found.`,
        data: activePeople
    })

}

export const resetData = (req: Request, res: Response) : any => {
    try {
        people.loadDataInArray();

        res.json({
            msg: 'The data has been reset'
        })
    } catch (error) {
        res.status(500).json({
            msg: 'An unexpected error occurred',
        })
    }

}
