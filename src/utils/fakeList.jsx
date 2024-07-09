import { faker } from "@faker-js/faker";

export function fakeHeader() {
  return ["Nome", "Email"];
}

export function fakeRows() {
  let result = [];

  for (let i = 0; i < 10; i++) {

    const fullNameArray = faker.person.fullName().split(" ");
    const email = faker.internet.email({ firstName: fullNameArray[0], lastName: fullNameArray[1] });
    
    result.push([fullNameArray.join(" "), email]);
  }

  return result;
}
