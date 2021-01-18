import db from "../database/connection";
import { IUser } from '../controllers/AuthController'
import path from 'path'
import uploadConfig from "../config/upload";
import fs from 'fs'



interface Request {
   user_id: string | number;
   avatarFileName: string;
}

class UpdateUserAvatarService {
   public async execute({ user_id, avatarFileName }: Request): Promise<void> {

      const user: IUser[] = await db("users")
         .where({ id: user_id })


      if (!user[0]) {
         throw new Error('only auth users can change the avatar')
      }

      if (user[0].avatar) {

         const userAvatarfilePath = path.join(uploadConfig.directory, user[0].avatar)
         const userAvatarFileExists = await fs.promises.stat(userAvatarfilePath)

         if (userAvatarFileExists) {
            await fs.promises.unlink(userAvatarfilePath)
         }
      }


   }

}

export default UpdateUserAvatarService;