import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  displayName?: string;
}

// export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
