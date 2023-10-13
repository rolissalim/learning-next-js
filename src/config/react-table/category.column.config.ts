import { TTILE } from "./more.column.config";

export const CATEGORY_PRODUCT_COLUMN = () => {
    let data: any = [
        ...TTILE(),
        {
            Header: 'Total',
            accessor: 'value',
            minWidth: 100,
            filter: 'fuzzyText',
            show: true,
            disableFilters: true
        },
    ];

    return data
};