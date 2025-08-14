export type Cluster = {
  id: number;
  name: string;
  shortName: string;
  alias: string;
};

export type ClusterList = Cluster[];

export type ClusterDetail = {
  clusterId: number;
  table: {
    siteName: string;
    province: string;
    lat: string;
    lng: string;
    bpp: number;
    ace: string;
    solarKw: string;
    pltdKw: string;
    genMwh: string;
    solarPercent: string;
    resource: number;
    areaHa: string;
    gradientPercent: string;
    voltageKv: number;
    distKm: string;
    existKw: number;
    generator: string;
    roadM: string;
    portKm: number;
    portCap: string;
    complex: string;
    ifcCat: string;
    esia: "Completed" | "Pending" | "Planned" | null;
    uklUpl: string;
    hazards: string;
    climate: string;
    esPlans: string;
  }[];
};

export type ClusterTableRow = {
  clusterId: number;
  siteName: string;
  province: string;
  lat: string;
  lng: string;
  bpp: number;
  ace: string;
  solarKw: string;
  pltdKw: string;
  genMwh: string;
  solarPercent: string;
  resource: number;
  areaHa: string;
  gradientPercent: string;
  voltageKv: number;
  distKm: string;
  existKw: number;
  generator: string;
  roadM: string;
  portKm: number;
  portCap: string;
  complex: string;
  ifcCat: string;
  esia: "Completed" | "Pending" | "Planned" | null;
  uklUpl: string;
  hazards: string;
  climate: string;
  esPlans: string;
};
