declare type TableData = {
    accounts: Array<accountData>;
};
declare const TableRow: (props: TableData) => JSX.Element;
export default TableRow;
