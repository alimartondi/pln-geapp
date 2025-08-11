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
    projectName: string;
    cluster: string;
    coordinates: string;
    capacity: number;
    landSize: number;
    pltdDistance: number;
    bpp: number;
    ace: number;
    peakLoad: number;
    meanLoad: number;
    existingSolar: number;
    renewablePenetration: number;
    connectionVoltage: number;
    averageSlope: number;
    slopeAspect: number;
    offsiteShading: "yes" | "no" | "" | null;
    distanceRoad: number;
    distanceCoast: number;
    landSensitivity: string;
    registeredLandPercent: number;
    stateForest: "yes" | "no" | "" | null;
    forestMoratorium: "yes" | "no" | "" | null;
    registeredLand: "yes" | "no" | "" | null;
    disputedLands: "yes" | "no" | "" | null | "None Detected";
    keyHazards: string;
    preliminaryRisk: string;
    ifcCategory: string;
    keyEAndSManagementPlans: string;
    environmentalLicensingPathway: string;
  }[];
};

export type ClusterTableRow = {
  clusterId: number;
  projectName: string;
  cluster: string;
  coordinates: string;
  capacity: number;
  landSize: number;
  pltdDistance: number;
  bpp: number;
  ace: number;
  peakLoad: number;
  meanLoad: number;
  existingSolar: number;
  renewablePenetration: number;
  connectionVoltage: number;
  averageSlope: number;
  slopeAspect: number;
  offsiteShading: "yes" | "no" | "" | null;
  distanceRoad: number;
  distanceCoast: number;
  landSensitivity: string;
  registeredLandPercent: number;
  stateForest: "yes" | "no" | "" | null;
  forestMoratorium: "yes" | "no" | "" | null;
  registeredLand: "yes" | "no" | "" | null;
  disputedLands: "yes" | "no" | "" | null | "None Detected";
  keyHazards: string;
  preliminaryRisk: string;
  ifcCategory: string;
  keyEAndSManagementPlans: string;
  environmentalLicensingPathway: string;
};
