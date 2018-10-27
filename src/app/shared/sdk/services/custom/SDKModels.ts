/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Users } from '../../models/Users';
import { Transactions } from '../../models/Transactions';
import { Email } from '../../models/Email';
import { Emails } from '../../models/Emails';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Users: Users,
    Transactions: Transactions,
    Email: Email,
    Emails: Emails,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
