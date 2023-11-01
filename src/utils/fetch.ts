/* eslint-disable @typescript-eslint/no-explicit-any */
import { THE_CAT_API_APIKEY, THE_CAT_API_URL } from "../const";
import type { ICatsResponse } from "../types";

interface IFetchTheCatApiProps {
  endpoint: string;
  method?: "GET" | "POST" | "DELETE";
  headers?: object;
  body?: object;
}

export const fetchFromCatApi = async ({
  endpoint,
  method = "GET",
  headers = {},
  body = {},
}: IFetchTheCatApiProps): Promise<ICatsResponse> => {
  let fetchOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": THE_CAT_API_APIKEY,
      ...headers,
    },
  };

  if (method === "POST") {
    fetchOptions = {
      ...fetchOptions,
      body: JSON.stringify(body),
    };
  }

  try {
    const resp = await fetch(`${THE_CAT_API_URL}/${endpoint}`, fetchOptions);
    const data = await resp.json();
    return { ok: true, data };
  } catch (err) {
    const error = new Error("Error with api fetch");
    return { ok: false, data: null, error };
  }
};
