export interface Venue {
  id: number;
  venue_uri: string;
}

export interface HotlapEvent {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  qualification_percentage: number;
  venues: Venue[];
  hotlap_event_uri: string;
}

export interface Result {
  date: string;
  customer_id: number;
  customer_name: string;
  lap_id: number;
  lap_time_ms: number;
  lap_time_str: number;
  transmission: string;
  vehicle_id: number;
  vehicle_name: string;
  vehicle_engine: string;
  class_id: number;
  class_name: string;
  class_icon: string;
  venue_id: number;
  venue_name: string;
  invalid: boolean;
  verified: boolean;
  telemetry_uri: string;
  customer_uri: string;
  lap_uri: string;
  vehicle_uri: string;
  class_uri: string;
  venue_uri: string;
}

export interface SubEvent {
  name: string;
  circuit_id: number;
  circuit_name: string;
  circuit_length: number;
  circuit_uri: string;
  results: Result[];
}

export interface HotlapResponse {
  hotlap_events: HotlapEvent[];
  sub_events?: SubEvent[];
}

export interface HotlapQueryParams {
  past?: boolean;
  current?: boolean;
  future?: boolean;
  order?: "dateasc" | "datedesc";
}
