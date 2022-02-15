import { injectable } from 'inversify';
import { Collection, InsertOneResult, MongoClient } from 'mongodb';
import { User } from '../interfaces';


const mongourl = process.env.MONGO_CONNECTION_STRING || 'mongodb://root:example@localhost:27017/';
const db_name = process.env.DB_NAME || 'tp2';
const collection_name = 'users';

@injectable()
/*
* Cette classe s'occupe des communications avec MongoDB
*/
export class MongodbService {

    private _client: MongoClient = new MongoClient(mongourl);
    private _collection: Promise<Collection<User>>;
    
    constructor(){
        //Pourrait causer des problèmes en production
        // this._client.connect();
        //Collection à utiliser
        console.log('Connection à MongoDB',mongourl);
        this._collection = this._client.connect().then(
            (connectedClient:MongoClient) =>{
                console.log('Connection a MongoDB reussi');
                console.log(`Ouverture de la base de données ${db_name} avec la collection ${collection_name}`);
                return connectedClient.db(db_name).collection<User>(collection_name);
            }
        ).catch(
            (reason) =>{
                console.error('Connection a MongoDB echouer');
                console.error(reason);
                throw reason;
            }
        );
    }
    
    //Retourne les informations d'un utilisateur à partir de son username
    async getUserByUsername(username: string):Promise<User | null>{
        return this._collection.then(
            (collection) =>{
                return collection.findOne({'username':username});
            }
        );
    }
    
    //Fait la création d'un utilisateur dans la base de données
    async createUser(username: string, hash: string): Promise<User | null>{
        
        const newUser:User = {
            username:username,
            hash:hash
        };
        return this.getUserByUsername(username).then(
            (userFound:User|null)=>{
                if(userFound !== null){
                    throw new Error('User already exist');
                }
                return this._collection;
            }
        ).then(
            (collection)=>{
                //Créer un utilisateur en fonction des information d'authentification
                //Utilisez l'interface User
                return collection.insertOne(newUser);
            }
        ).then(
            (result:InsertOneResult)=>{
                //Retourner le user créé avec son _id
                newUser._id = result.insertedId.toString();
                return newUser;
            }
        );
        

    }

}