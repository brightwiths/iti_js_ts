import {Simulate} from 'react-dom/test-utils';

export type UserType = {
  name: string
  hair: number
  address: {city: string, house?: number}
}
export type LaptopType = {
  title: string
}
export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export type UserWithBooksType = UserType & {
  books: Array<string>
}

export function makeHairStyle(u: UserType, power: number) {
  const copy = {
    ...u,
    hair: u.hair / power
  }
  //copy.hair = u.hair / power
  return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
  return {
    ...u,
    address : {
      ...u.address,
      city: city
    }
  }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
  return {
    ...u,
    address : {
      ...u.address,
      house: house
    }
  }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
  return {
    ...u,
    laptop : {
      ...u.laptop,
      title: laptop
    }
  }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
  const copy = {
    ...u,
    books: [
      ...u.books
    ]
  }
  let copy2 = copy.books.concat(newBooks);
  return copy2
}



