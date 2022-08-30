import type { PackageInfo } from './package';
import type { JSExpression, JSFunction } from './value-type';

export interface InternalUtils {
  name: string;
  type: 'function';
  content: JSFunction | JSExpression;
}

export interface ExternalUtils {
  name: 'string';
  type: 'npm';
  content: PackageInfo;
}

export type UtilItem = InternalUtils | ExternalUtils;
export type UtilsMap = UtilItem[];
