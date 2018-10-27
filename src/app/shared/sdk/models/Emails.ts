/* tslint:disable */

declare var Object: any;
export interface EmailsInterface {
  "to"?: string;
  "from"?: string;
  "text"?: string;
  "html"?: string;
  "subject": string;
  "id"?: number;
}

export class Emails implements EmailsInterface {
  "to": string;
  "from": string;
  "text": string;
  "html": string;
  "subject": string;
  "id": number;
  constructor(data?: EmailsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Emails`.
   */
  public static getModelName() {
    return "Emails";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Emails for dynamic purposes.
  **/
  public static factory(data: EmailsInterface): Emails{
    return new Emails(data);
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
      name: 'Emails',
      plural: 'Emails',
      path: 'Emails',
      idName: 'id',
      properties: {
        "to": {
          name: 'to',
          type: 'string'
        },
        "from": {
          name: 'from',
          type: 'string'
        },
        "text": {
          name: 'text',
          type: 'string'
        },
        "html": {
          name: 'html',
          type: 'string'
        },
        "subject": {
          name: 'subject',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
