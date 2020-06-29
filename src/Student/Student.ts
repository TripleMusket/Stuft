import { Entity } from "../Entity/Entity";
import { IEntity } from "../Entity/IEntity";
import { EntityType } from "../Entity/EntityType";

export class Student extends Entity implements IEntity
{
    constructor(name: string)
    {
        super(name);
    }

    public getType()
    {
        return EntityType.STUDENT;
    }
}