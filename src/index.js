

import { html, render } from "lit-html";
import { Game } from "./Game";

import s from "./index.scss";

/**
 * 
 * @param {Tamagochi} t 
 */
const Statistics = (t) => html`
    <div class="${s.statistics}">
        Health: <span>${t.health.toFixed(2)}</span>
        Hunger: <span>${t.hunger.toFixed(2)}</span>
        Thirst: <span>${t.thirst.toFixed(2)}</span>
        Dirtiness: <span>${t.dirtiness.toFixed(2)}</span>
        Social: <span>${t.social.toFixed(2)}</span>
        Sleep: <span>${t.sleep.toFixed(2)}</span>
    </div>
`;


const game = new Game();

function updateGameState() {
    game.update();
    render(Statistics(game.getPet()), document.getElementById("game"));
}

setInterval(updateGameState, 15);
