export default class Table<T> {
    public table: T[][];

    constructor(tabela: T[][] = []) {
        this.table = tabela;
    }

    addRow(row: T[]): void {
        this.table.push(row);
    }

    getData(column: number, row: number): T {
        return this.table[row][column];
    }

    numberRows(): number {
        return this.table.length;
    }
}