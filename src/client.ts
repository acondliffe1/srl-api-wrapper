import HotlapApi from "./api/hotlapAPI";
import axios, { AxiosInstance } from "axios";

export default class Client {
  private _baseURL = "https://api.simracing.co.uk/v0.1";

  private _headers = {};

  private _instance: AxiosInstance;

  public hotlap: HotlapApi;

  constructor(apiKey: string) {
    this._headers = {
      "Content-Type": "application/xml",
      Authorization: "SRL " + apiKey,
      Accept: "application/xml"
    };

    this._instance = axios.create({
      baseURL: this._baseURL,
      headers: this._headers
    });

    this.hotlap = new HotlapApi(this._instance);
  }
}
