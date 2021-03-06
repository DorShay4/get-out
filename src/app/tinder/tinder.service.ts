import {Place} from '../objects/place';
export class TinderService {

  constructor() { }
  public nearbyPlace (myPlaceWkt: string): Place[] {
    return [
      {
        name: 'המסעדה',
        image: 'https://www.imageupload.co.uk/images/2017/04/23/resturnat.png',
        visible: true,
        title: 'title',
        distance: 0.4
      },
      {
        name: 'סינמה סיטי',
        image: 'https://www.imageupload.co.uk/images/2017/04/23/cinema-city.png',
        visible: false,
        title: 'מסעדת בשרים',
        distance: 0.4
      },
      {
        name: 'retro bar',
        image: 'https://www.imageupload.co.uk/images/2017/04/23/Retro.jpg',
        visible: false,
        title: 'title',
        distance: 0.4
      },
      {
        name: 'יודלה',
        image: 'https://www.imageupload.co.uk/images/2017/04/23/yudla.jpg',
        visible: false,
        title: 'title',
        distance: 0.4
      },
      {
        name: 'puppets',
        image: 'https://www.imageupload.co.uk/images/2017/04/23/puppets.png',
        visible: false,
        title: 'title',
        distance: 0.4
      }

    ];
  }
  public SendlikePlacesToServer (likePlaces: Place[]) {
    let a = 5;//todo:: send to the server
  }
}
