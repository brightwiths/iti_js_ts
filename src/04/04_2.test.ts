import {CityType} from '../02-objects/02_02';
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from './04_2';

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        id: 1, buildedAt: 2012, repaired: false,
        address: {
          number: 100,
          street: {title: "White street"}}
      },
      {
        id: 2, buildedAt: 2008, repaired: false,
        address: {
          number: 100,
          street: {title: "Happy street"}}
      },
      {
        id: 3, buildedAt: 2020, repaired: false,
        address: {
          number: 101,
          street: {title: "Happy street"}}
      },
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL",
        address: {
          street: { title: "Central Street"}, number: 12},
          budget: 200000, staffCount: 200,
      },
      {
        type: "FIRE-STATION",
        address: { street: { title: "South Street" }, number: 12 },
        budget: 500000, staffCount: 1000
      }

    ],
    citizenNumber: 1000000
  }
})

// 01. дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('Houses should be destroyed', () => {
  demolishHousesOnTheStreet(city, 'Happy street');

  expect(city.houses.length).toBe(1);
  expect(city.houses[0].id).toBe(1);
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('buildings with correct staff count', () => {
  let buildings =
    getBuildingsWithStaffCountGreaterThen(
      city.governmentBuildings,
      500);

  expect(buildings.length).toBe(1);
  expect(buildings[0].type).toBe('FIRE-STATION')
})
