import Table from "./classe.js";
export function salvarDados(banco_dados) {
    localStorage.setItem("tableData", JSON.stringify(banco_dados.table));
}
export function carregarDados() {
    const data = localStorage.getItem("tableData");
    if (data) {
        return new Table(JSON.parse(data));
    }
    return new Table([]);
}
export function limparDados() {
    localStorage.removeItem("tableData");
}
