import { HotlapQueryParams, HotlapResponse } from "../model/hotlap";
import { AxiosInstance } from "axios";

export default class HotlapApi {
  private _endpoint = "/hotlap_events";

  constructor(private fetcher: AxiosInstance) {}
  //Get All events
  public list(params: HotlapQueryParams) {
    //const response =
    this.fetcher
      .get<HotlapResponse>(this._endpoint, {
        params: params
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
    //return response.data;
  }

  // Get Specific event
  public get(id: number) {
    return this.fetcher.get(this._endpoint + "/" + id);
  }

  private formatParams(params: any): any {
    const options = JSON.parse(JSON.stringify(params) || "{}");

    return { params: options };
  }
}
