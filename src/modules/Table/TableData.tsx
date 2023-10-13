'use client'
import React, { useMemo, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { get, isArray } from 'lodash';
import ReactTable from '@/components/ReactTable';
import { API_PATH } from '@/services/_path.service';
import { getAllByPath } from '@/services/main.service';

export default function TableData({
  columnsConfig = [],
  filterParams = {},
  path,
  primaryKey,
  selected,
  action,
  paging = {},
  pagingPresistance = false,
  deleteConfirmation = {},
  rowSelect = false,
  rowSelectType = 'checkbox',
  selectedRows,
  containerClass = 'table table-responsive',
  handleEdit,
  handleDetail,
  fieldSearch = "search",
  respDataApi,
  rowData,
  usePayloadParam,
  order = { order: "updated_at desc" },
  additonalPath,
  module
}: ITableData) {
  const source = axios.CancelToken.source();
  const [loader, setLoader] = useState<any>({ Loading: undefined, Type: "ldss", NoData: true })
  const [loaderLocal, setLoaderLocal] = useState<any>(false)
  const currentPage = 0;

  const [pagination, setPagination] = useState<any>({
    perPage: 10,
    offset: 0,
    currentPage: currentPage ? parseInt(currentPage) - 1 : 0,
    pageCount: 10,
    totalData: 0,
    marginPagesDisplayed: 2,
    pageRangeDisplayed: 7,
    ...paging,
  });

  const [modalConfirm, setModalConfirm] = useState<any>({
    show: false,
    approved: false,
    size: 'sm',
    icon: 'far fa-trash',
    description: `Delete data `,
    subDescriotion: `Data tidak dapat dikembalikan`,
    textApproved: 'Delete',
    classApproved: 'danger',
    textDecline: 'Cancel',
    ...deleteConfirmation,
  });

  const initFilters = {
  };

  const [filters, setFilters] = useState<any>(initFilters);

  /** DATA RESP */
  const [data, setData] = useState<any>([]);
  const [respData, setRespData] = useState<any>([]);
  const [dataSelected, setDataSelected] = useState<any>(selected);


  /** GET DATA PAGINATION */
  const getAllData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    setLoaderLocal(true)
    setRespData([]);
    try {
      let params: any = {
        ...filters,
        ...order,
      };

      let req: any = await getAllByPath(`${get(API_PATH(), path)}${additonalPath ? `/${additonalPath}` : ""}`, params, source.token);
      let datas: any
      if (req?.[module]) {
        datas = req?.[module]?.map((d: any, i: number) => {
          i++;
          d.number = pagination.currentPage * pagination.perPage + (i);
          d.index = i;
          return d;

        });
        console.log("datas", datas);

        setRespData(datas);

        setPagination((prevState: any) => ({
          ...prevState,
          pageCount: Math.ceil(req?.total / pagination?.perPage),
          totalData: req?.total,
        }));
      } else {
        setRespData([]);
        setPagination((prevState: any) => ({
          ...prevState,
          pageCount: 1,
          totalData: 0,
        }));
      }

      setLoaderLocal(false)
    } catch (err: any) {
      console.log("error", err);

      setRespData([]);
      setLoaderLocal(false)
    }
  };

  /** READ PAGINATION AND FILTER CHANGE */
  useEffect(() => {
    if (path) {
      getAllData();
    }
    return () => {
      source.cancel();
    };
  }, [
    pagination?.currentPage,
    path,
  ]);

  /** setColumn table default jangan ditambahkan klo ada yang beda digunakan respAPIData*/
  const setColumnDefault = (data: any) => {
    console.log("set data", data);

    let datas = data?.map((d: any, i: number) => {
      columnsConfig?.map((item: any) => {
        switch (item?.accessor) {
          case "number":
            d.no = pagination.currentPage * pagination.perPage + (i + 1);
            break;
          default:
            d[item?.accessor] = get(d, item?.accessor)
            break;
        }
      });
      return d;

    });
    console.log("datas", datas);

    setData(datas)

  }

  const tableData = useMemo(() => data, [data]);

  /**
   * ! Pagination
   * @param e
   */
  const handlePaginationClick = (e: any) => {
    const selectedPage = e.selected;
    const offset = selectedPage * pagination.perPage;

    setPagination((prevState: any) => ({
      ...prevState,
      offset: offset,
      currentPage: selectedPage,
    }));
  };

  const handleSort = useCallback(({ sortBy }: any) => {
    if (sortBy.length > 0) {
      setFilters((prevState: any) => ({
        ...prevState,
        sort_by: sortBy[0]['desc'] ? '-' : '' + sortBy[0]['id'],
      }));
    }
  }, []);

  useEffect(() => {
    if (respDataApi) respDataApi(respData);
    else setColumnDefault(respData)
  }, [respData]);

  useEffect(() => {
    if (rowData) setData(rowData);
  }, [rowData]);

  useEffect(() => {
    return () => {
      setData([]);
      setRespData([]);
      source.cancel();
    };
  }, []);

  useEffect(() => {
    setLoader(() => {
      return { ...loader, Loading: loaderLocal }
    })
  }, [loaderLocal])

  console.log("tableData", tableData);


  return (
    <>
      <ReactTable
        rowSelect={rowSelect}
        rowSelectType={rowSelectType}
        selectedRows={selectedRows}
        columns={columnsConfig}
        data={tableData}
        onSort={handleSort}
        containerClass={containerClass}
        loading={loaderLocal}
        loader={loader}
      />

    </>
  );
}
interface ITableData {
  columnsConfig: any;
  filterParams?: any;
  respDataApi?: any;
  rowData?: any;
  rowSelect?: boolean;
  rowSelectType?: string;
  selectedRows?: any;
  selected?: any;
  path?: any;
  primaryKey: any;
  action?: string | undefined;
  onColumnsChanged?: any;
  paging?: any;
  pagingPresistance?: boolean;
  deleteConfirmation?: any;
  containerClass?: string,
  handleEdit?: any,
  handleDetail?: any,
  fieldSearch?: string
  usePayloadParam?: boolean,
  order?: any,
  additonalPath?: any
  module?: any
}