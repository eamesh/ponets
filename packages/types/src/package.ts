export interface PackageInfo {
  versiong: string;

  componentName: string;

  package: string;

  exportName: string;
}

export type ComponentMap = PackageInfo;

export type ComponentsMap = ComponentMap[];
