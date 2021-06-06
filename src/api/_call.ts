import { NetMethod } from '../constants/network/net-methods';
import { currentHost, urlPrefix } from '../constants/network/network';

declare type AnyObject = {
  [key: string]: any;
};

interface RequestOptions {
  endpoint: string;
  method?: string;
  body?: AnyObject;
  headers?: AnyObject;
  returnRaw?: boolean;
  useRawApiUrl?: boolean;
}

const call = async ({
  endpoint,
  headers = {},
  method = NetMethod.GET,
  body = {},
}: RequestOptions) => {
  const stringifiedBody: string = JSON.stringify({ ...body });

  const postBody: string | AnyObject =
    method === NetMethod.POST || method === NetMethod.PUT
      ? {
          body: stringifiedBody,
        }
      : {};

  const result: AnyObject = await fetch(
    `${urlPrefix}${currentHost}${endpoint}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      },
      ...postBody,
      method,
    }
  );

  return result;
};

export default call;
