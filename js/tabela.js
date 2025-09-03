import { table } from "./global_variable.js";
import { db } from "./debito.js";
import { salvarDados } from "./database.js";
import { input_data, input_valor, select_categoria, input_descricao, select_tipo } from "./global_variable.js";
export function update() {
    db.addRow([input_data.value, select_tipo.value, input_valor.value, select_categoria.value, input_descricao.value]);
    salvarDados(db);
}
export function carregarLinhas() {
    for (let array of db.table) {
        const newRow = table.insertRow();
        const cell_data = newRow.insertCell(0);
        const cell_tipo = newRow.insertCell(1);
        const cell_valor = newRow.insertCell(2);
        const cell_categoria = newRow.insertCell(3);
        const cell_descricao = newRow.insertCell(4);
        cell_data.innerText = array[0].toString();
        cell_tipo.innerText = array[1].toString();
        cell_valor.innerText = array[2].toString();
        cell_categoria.innerText = array[3].toString();
        cell_descricao.innerText = array[4].toString();
    }
}
