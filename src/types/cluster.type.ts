export type Cluster = {
  id: number;
  name: string;
  shortName: string;
  alias: string;
};

export type ClusterList = Cluster[];

export type Coordinate = {
  lat: number;
  lng: number;
};

export type ClusterDetail = {
  clusterId: number;
  table: {
    projectName: string;

    cluster: string;
    capacity: number;
    coordinates: Coordinate[];
    landSize: number;
    pltdDist: number[];

    bpp: number;
    ace: number;
    peakLoad: number;
    meanLoad: number;
    renewablePenetration: number;
    connectionVoltage: number;

    avgSlope: number[];
    slopeAspect: number[];
    offsiteShading: ("Yes" | "No")[];
    distPort: number;
    distRoad: number[];
    distCoast: number[];
    landUseSensitivity: string[][];
    registerLand: number[];
    disputedLand: string[];
    stateForesty: string[];
    forestMoratorium: ("Yes" | "No")[];

    keyHazards: string[][];
    preliminaryClimateRisk: ("Low" | "Medium" | "High")[];

    goiApprovalsProfile: string;
    preliminaryPositiveImpacts: string[][];
    preliminaryNegativeImpacts: string[][];
    ifcRiskCategory: string[][];
    keyEAndSManagementPlans: string[][];
  }[];
};

export type ClusterTableRow = {
  clusterId: number;
  projectName: string;

  cluster: string;
  capacity: number;
  coordinates: Coordinate[];
  landSize: number;
  pltdDist: number[];

  bpp: number;
  ace: number;
  peakLoad: number;
  meanLoad: number;
  renewablePenetration: number;
  connectionVoltage: number;

  avgSlope: number[];
  slopeAspect: number[];
  offsiteShading: ("Yes" | "No")[];
  distPort: number;
  distRoad: number[];
  distCoast: number[];
  landUseSensitivity: string[][];
  registerLand: number[];
  disputedLand: string[];
  stateForesty: string[];
  forestMoratorium: ("Yes" | "No")[];

  keyHazards: string[][];
  preliminaryClimateRisk: ("Low" | "Medium" | "High")[];

  goiApprovalsProfile: string;
  preliminaryPositiveImpacts: string[][];
  preliminaryNegativeImpacts: string[][];
  ifcRiskCategory: string[][];
  keyEAndSManagementPlans: string[][];
};
