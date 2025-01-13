import express, {Application} from 'express';
import personRoutes from '../routes/personRoute';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerDocument from './swagger';

class Server {

    private app: Application;
    private port: string;
  
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.app.use(express.json());

        this.middlewares();
        this.swagger();
        this.routes();
    }

    middlewares(){

        // CORS
        this.app.use(cors());
        
        this.app.use(express.json());

        //Read body parser
        this.app.use( express.json() );
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use('/api/person', personRoutes)
    }

    swagger(){
       this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server running in port! ' + this.port);            
        })
    }

}

export default Server;