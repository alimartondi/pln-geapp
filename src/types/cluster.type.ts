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
    pltdDist: string[];

    bpp: number;
    ghi: number;
    ace: number;
    peakLoad: number;
    meanLoad: number;
    renewablePenetration: string;
    connectionVoltage: number;

    avgSlope: number[];
    slopeAspect: number[];
    offsiteShading: ("Yes" | "No")[];
    distPort: number;
    distRoad: string[];
    distCoast: string[];
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
    developmentFeasibilityClass: string[];
  }[];
};

export type ClusterTableRow = {
  clusterId: number;
  projectName: string;

  cluster: string;
  capacity: number;
  coordinates: Coordinate[];
  landSize: number;
  pltdDist: string[];

  bpp: number;
  ghi: number;
  ace: number;
  peakLoad: number;
  meanLoad: number;
  renewablePenetration: string;
  connectionVoltage: number;

  avgSlope: number[];
  slopeAspect: number[];
  offsiteShading: ("Yes" | "No")[];
  distPort: number;
  distRoad: string[];
  distCoast: string[];
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
  developmentFeasibilityClass: string[];
};
