export abstract class Entity
{
    private name = "";

    constructor(name: string)
    {
        this.name = name;
    }

    /**
     * Gets the entity's name
     * 
     * @returns The entity's name
     */
    public getName() 
    { 
        return this.name; 
    }
    
    /**
     * Sets the entity's name
     * 
     * @param name Name to set for the entity
     */
    public setName(name: string) 
    { 
        this.name = name; 
    }
}