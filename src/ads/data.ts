// src/pages/data.ts
export interface Ad {
  id: number,
  title: string,
  description: string,
  pictureUrl: string,
  price: number,
  email: string,
  phone: number
}

interface AdDatabase {
  [id: number]: Ad
}


const adsById: AdDatabase = {
  1: {
    id: 1,
    title: 'Bike',
    description: 'good bike',
    pictureUrl: 'https://tredz.azureedge.net/prodimg/Frog-55-20w-2019-Kids-Bike_75473_1_Zoom.jpg',
    price: 2000,
    email: 'bike@bikes.com',
    phone: 21313421412421
  },
  2: {
    id: 2,
    title: 'Bike',
    description: 'good bike',
    pictureUrl: 'https://tredz.azureedge.net/prodimg/Frog-55-20w-2019-Kids-Bike_75473_1_Zoom.jpg',
    price: 2000,
    email: 'bike@bikes.com',
    phone: 21313421412421
  }
}

export default adsById