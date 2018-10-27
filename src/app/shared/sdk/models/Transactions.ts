/* tslint:disable */
import {
  Users
} from '../index';

declare var Object: any;
export interface TransactionsInterface {
  "blockHash"?: string;
  "blockNumber"?: number;
  "contractAddress"?: string;
  "cumulativeGasUsed"?: number;
  "from"?: string;
  "gasUsed"?: number;
  "logsBloom"?: string;
  "status"?: boolean;
  "to"?: string;
  "transactionHash"?: string;
  "transactionIndex"?: number;
  "events"?: any;
  "id"?: any;
  "usersId"?: any;
  "userId"?: any;
  users?: Users;
}

export class Transactions implements TransactionsInterface {
  "blockHash": string;
  "blockNumber": number;
  "contractAddress": string;
  "cumulativeGasUsed": number;
  "from": string;
  "gasUsed": number;
  "logsBloom": string;
  "status": boolean;
  "to": string;
  "transactionHash": string;
  "transactionIndex": number;
  "events": any;
  "id": any;
  "usersId": any;
  "userId": any;
  users: Users;
  constructor(data?: TransactionsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Transactions`.
   */
  public static getModelName() {
    return "Transactions";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Transactions for dynamic purposes.
  **/
  public static factory(data: TransactionsInterface): Transactions{
    return new Transactions(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Transactions',
      plural: 'Transactions',
      path: 'Transactions',
      idName: 'id',
      properties: {
        "blockHash": {
          name: 'blockHash',
          type: 'string'
        },
        "blockNumber": {
          name: 'blockNumber',
          type: 'number'
        },
        "contractAddress": {
          name: 'contractAddress',
          type: 'string'
        },
        "cumulativeGasUsed": {
          name: 'cumulativeGasUsed',
          type: 'number'
        },
        "from": {
          name: 'from',
          type: 'string'
        },
        "gasUsed": {
          name: 'gasUsed',
          type: 'number'
        },
        "logsBloom": {
          name: 'logsBloom',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'boolean'
        },
        "to": {
          name: 'to',
          type: 'string'
        },
        "transactionHash": {
          name: 'transactionHash',
          type: 'string'
        },
        "transactionIndex": {
          name: 'transactionIndex',
          type: 'number'
        },
        "events": {
          name: 'events',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "usersId": {
          name: 'usersId',
          type: 'any'
        },
        "userId": {
          name: 'userId',
          type: 'any'
        },
      },
      relations: {
        users: {
          name: 'users',
          type: 'Users',
          model: 'Users',
          relationType: 'belongsTo',
                  keyFrom: 'usersId',
          keyTo: 'id'
        },
      }
    }
  }
}
