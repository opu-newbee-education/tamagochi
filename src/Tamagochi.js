
export class Tamagochi {
    level = 1;

    hunger = 0;
    thirst = 0;
    dirtiness = 0;
    
    health = 100;
    social = 100;
    sleep = 100;
    
    
    hapiness = 100; // computable

    get isAlive() {
        return this.health > 0;
    }


}


