import {State} from './state';
import {Advert} from './advert';

export class User {

  private firstName: string;
  private lastName: string;
  private userName: string;
  private middleNamew: string;
  private email: string;
  private phoneNo: string;
  private state: State;
  private about: string;
  private currentAdvert: Advert;
  private adverts: Advert[];

}
