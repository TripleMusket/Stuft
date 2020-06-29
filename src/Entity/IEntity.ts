import { EntityType } from "./EntityType";

export interface IEntity
{
    /**
     * Gets the entity type
     * 
     * @returns Entity type
     */
    getType(): EntityType;
}