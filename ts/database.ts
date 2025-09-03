import Table from "./classe.js";

export function salvarDados(banco_dados: Table<string | number>) : void {
    localStorage.setItem("tableData", JSON.stringify(banco_dados.table));
}

export function carregarDados() : Table<string | number> {
    const data = localStorage.getItem("tableData");
    if (data) {
        return new Table<string | number>(JSON.parse(data));
    }
    return new Table<string | number>([]);
}

export function limparDados() : void {
    localStorage.removeItem("tableData");
}