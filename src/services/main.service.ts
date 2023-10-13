import { formDataParams } from '@/helper/params.helper';
import requestApi from './api.service';

const getByIdPath = (path: any, id: any, sourceToken: any, params: any = {}) => {
  return requestApi().request({
    url: path.includes('http') ? path : `${process.env.API_MAIN_SERVICE}/${path}/${id}`,
    method: 'GET',
    params: params,
    cancelToken: sourceToken, // <-- IMPORTANT!
  });
};

const getAllByPath = (
  path = '',
  params: any = { page: 1, limit: 1000 },
  sourceToken: any,
  baseUrl: any = undefined,
  token: boolean = false
) => {
  const rest_api = "https://dummyjson.com"

  return requestApi(null, baseUrl, token).request({
    url: `${process.env.API_MAIN_SERVICE ? process.env.API_MAIN_SERVICE : rest_api}/${path}`,
    method: 'GET',
    params: params,
    cancelToken: sourceToken, // <-- IMPORTANT!
  });
};

const postByPath = (path = '', params: any, sourceToken: any, usePayloadParam: boolean = false) => {
  let formData = formDataParams(params)

  return requestApi().post(
    `${process.env.API_MAIN_SERVICE}/${path}`,
    usePayloadParam ? formData : params,
    { cancelToken: sourceToken } // <-- IMPORTANT!
  );
};

const postByIdPath = (path = '', params: any, id: any, sourceToken: any) => {
  return requestApi().post(
    `${process.env.API_MAIN_SERVICE}/${path}/${id}`,
    JSON.stringify(params),
    {
      cancelToken: sourceToken,
      headers: {
        "content-type": "application/json",
      },
    } // <-- IMPORTANT!
  );
};

const putByPath = (path = '', params: any, id: any, sourceToken: any) => {
  return requestApi().put(
    `${process.env.API_MAIN_SERVICE}/${path}${id ? '/' + id : ''}`,
    params,
    { cancelToken: sourceToken } // <-- IMPORTANT!
  );
};

const deleteByPath = (path = '', id: any, sourceToken: any) => {
  return requestApi().request({
    url: `${process.env.API_MAIN_SERVICE}/${path}${id ? '/' + id : ''}`,
    method: 'DELETE',
    params: {},
    cancelToken: sourceToken, // <-- IMPORTANT!
  });
};

export { getAllByPath, getByIdPath, postByPath, putByPath, deleteByPath, postByIdPath };
