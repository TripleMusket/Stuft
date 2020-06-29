import { Student } from "./Student/Student";

let entity = new Student("John Doe");
console.log(`An entity of type ${entity.getType()} is named ${entity.getName()}`);

entity.setName("Don Joe");
console.log(`The entity's name is now ${entity.getName()}`);