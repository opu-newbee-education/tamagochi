import { Tamagochi } from "./Tamagochi";

export class Game {

    pet = new Tamagochi();


    initialize() {

    }

    getPet() {
        return this.pet;
    }

    update() {
        if (!this.pet.isAlive) {
            return;
        }

        this.pet.hunger += 0.01;
        this.pet.dirtiness += 0.005;
        this.pet.thirst += 0.05;

        this.pet.sleep -= 0.02;
        this.pet.social -= 0.002;

        if (this.pet.hunger > 100) {
            this.pet.health -= this.pet.hunger - 100;
        }
        if (this.pet.thirst > 100) {
            this.pet.health -= this.pet.thirst - 100;
        }
    }

}
