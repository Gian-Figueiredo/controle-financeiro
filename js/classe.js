export default class Table {
    constructor(tabela = []) {
        this.table = tabela;
    }
    addRow(row) {
        this.table.push(row);
    }
    getData(column, row) {
        return this.table[row][column];
    }
    numberRows() {
        return this.table.length;
    }
}
