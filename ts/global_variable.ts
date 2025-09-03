//Variaveis da página
export const table = document.querySelector("table") as HTMLTableElement;
export const button_add = document.getElementById("add") as HTMLButtonElement;
export const button_filtro = document.querySelector("button#filter") as HTMLButtonElement;

//Variáveis do filtro
export const div_filtro = document.querySelector("div#filtro") as HTMLDivElement;
export const button_aplicar_filtro = document.getElementById("aplicar_filtro") as HTMLButtonElement;
export const button_cancelar_filtro = document.getElementById("cancelar_filtro") as HTMLButtonElement;

//Variáveis do formulário
export const button_salvar = document.getElementById("salvar") as HTMLButtonElement;
export const button_cancelar = document.getElementById("cancelar") as HTMLButtonElement;
export const div_form = document.getElementById("formulario") as HTMLDivElement;
export const input_data = document.getElementById("data") as HTMLInputElement;
export const select_tipo = document.getElementById("tipo_movimentacao") as HTMLSelectElement;
export const input_valor = document.getElementById("valor") as HTMLInputElement;
export const select_categoria = document.getElementById("categoria") as HTMLSelectElement;
export const input_descricao = document.getElementById("descricao") as HTMLInputElement;