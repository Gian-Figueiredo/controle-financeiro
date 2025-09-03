import { carregarDados, limparDados } from "./database.js";
import { button_cancelar, button_add, div_form, button_salvar } from "./global_variable.js";
import { carregarLinhas, update } from "./tabela.js";

export const db = carregarDados();

carregarLinhas();

const h1_titulo_barra_superior =  document.querySelector("div#barra_superior h1") as HTMLHeadingElement;
h1_titulo_barra_superior.addEventListener("click", ()=> {limparDados(); location.reload()});

button_add.addEventListener("click", (event)=> {
    event.preventDefault();
    div_form.style.display = "flex";
});

button_cancelar.addEventListener("click", (event)=> {
    event.preventDefault();
    div_form.style.display = "none";
});

button_salvar.addEventListener("click", ()=> {
    update();
});