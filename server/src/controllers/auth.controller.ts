
import { Router, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { Authentification } from '../../../common/authentification';
import { UserDTO } from '../../../common/user';
import { User } from '../interfaces';
import { AuthService } from '../services/auth.service';
import { MongodbService } from '../services/mongodb.service';
import { TYPES } from '../types';


@injectable()
export class AuthController{
    public constructor(@inject(TYPES.AuthService) private _authService: AuthService, 
                       @inject(TYPES.MongodbService) private _mongodbService: MongodbService){
        //empty
    }

    public get router() : Router {
        
        const router: Router = Router();

        // -> /api/v1/auth/loggin
        router.post('/login',async (req:Request, res: Response) => {
            const auth: Authentification = req.body;
            
            console.log('auth.controller','/login', auth);
            // Trouver l'utilisateur dans la BD, si l'utilisateur est null retournez le code 403
            this._mongodbService.getUserByUsername(auth.username).then(
                (user:User|null)=>{
                    if(user!==null){
                        if(user.hash){
                            // Comparer le mot de passe de la BD avec le mot de passe de la requête, utiliser le auth.service
                            return this._authService.isPasswordValid(auth.password,user.hash).then(
                                (isPasswordValid:boolean)=>{
                                    if(isPasswordValid){
                                        return user;
                                    }
                                    throw new Error('Problem when authentificating user');
                                }
                            );
                        }
                    }
                    throw new Error('Problem when authentificating user');
                }
            ).then(
                (user:User)=>{
                    // Générer le jeton de l'utilisateur à l'aide du service auth.service et assigner à l'utilisateur
                    if(user._id !== undefined) {
                        user.token = this._authService.generateToken(user._id);
                        // Retourner les informations de l'utilisateur sans le hash (voir interface UserDTO) 
                        const udto:UserDTO = {
                            _id : user._id,
                            username : user.username,
                            token : user.token
                        };
                        res.json(udto);
                        console.log('End',res.statusCode,res.statusMessage);
                        return;
                    }
                    throw new Error('Problem when authentificating user');
                }
            ).catch(
                (reason)=>{
                    console.error(reason);
                    console.log('ERROR',res.statusCode,res.statusMessage);
                    //Retournez le code 403 au besoin
                    //Si aucun status n'a été envoyé
                    if(res.statusCode == 200){
                        res.status(403).send();
                    }
                }
            );
            



        });
        
        // -> /api/v1/auth/signup
        router.post('/signup',async (req:Request, res: Response) => {
            const auth: Authentification = req.body;
            console.log('auth.controller','/signup', auth);
            //Valider que l'utilisateur (username) n'est pas déjà dans la BD
            this._mongodbService.getUserByUsername(auth.username).then(
                (searchResponse:User|null) =>{
                    if(searchResponse === null){
                        //Chiffrer le mot de passe avec auth.service
                        return this._authService.encryptPassword(auth.password);
                    }
                    //Retounez un code 405 si déjà présent
                    res.sendStatus(405).send();
                    throw new Error('User already exist');
                }
            ).then(
                //Ajouter l'utilisateur à la BD
                (hash:string)=>{
                    return this._mongodbService.createUser(auth.username,hash);
                }
            ).then(
                (newUser:User|null)=>{
                    if((newUser !== null) && (newUser._id !== undefined)){
                        //Générer le jeton de l'utilisateur à l'aide du service auth.service
                        newUser.token = this._authService.generateToken(newUser._id);
                        const udto:UserDTO = {
                            _id : newUser._id,
                            username : newUser.username,
                            token : newUser.token
                        };
                        
                        //Retourner les informations de l'utilisateur sans le hash (voir interface UserDTO) 
                        console.log('End',res.statusCode,res.statusMessage);
                        res.json(udto);
                    }
                }
            ).catch(
                //Retounez un code 500 en cas de problème
                (reason)=>{
                    console.error(reason);
                    console.log('ERROR',res.statusCode,res.statusMessage);
                    //Si aucun status n'a été envoyé
                    if(res.statusCode == 200){
                        res.status(500).send();
                    }
                }
            );



            

        });
        
        return router;
    }

}