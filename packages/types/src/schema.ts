import type { I18nMap } from './i18n';
import type { ComponentsMap } from './package';
import type { UtilsMap } from './utils';
import type { CompositeObject, CompositeValue, JSExpression, JSFunction, JSONObject } from './value-type';

export interface NodeSchema {
  id?: string;

  componentName: string;

  props?: {
    children?: NodeData | NodeData[];
  } & PropsMap;

  leadingComponents?: string;

  condition?: CompositeValue;

  loop?: CompositeValue;

  loopArgs?: [string, string];

  children?: NodeData | NodeData[];

  isLocked?: boolean;

}

export interface ContainerSchema extends NodeSchema {
  componentName: string;

  fileName: string;

  meta?: Record<string, unknown>;

  state?: {
    [key: string]: CompositeValue;
  };

  methods?: {
    [key: string]: JSExpression | JSFunction;
  };

  lifeCycles?: {
    [key: string]: JSExpression | JSFunction;
  };

  css?: string;

  defaultProps?: CompositeObject;

}

export interface SlotSchema extends NodeSchema {
  componentName: 'Slot';
  name?: string;
  params?: string[];
}


export interface PageSchema extends ContainerSchema {
  componentName: 'Page';
}

export interface ComponentSchema extends ContainerSchema {
  componentName: 'Component';
}

export interface BlockSchema extends ContainerSchema {
  componentName: 'Block';
}

export type PropsMap = CompositeObject;

export type NodeData = NodeSchema | JSExpression | DOMText;

export type DOMText = string;

export type RootSchema = PageSchema | ComponentSchema | BlockSchema;

export interface Schema {
  id?: string;

  version: string;

  componentsMap: ComponentsMap;

  componentsTree: RootSchema[];

  i18n?: I18nMap;

  utils?: UtilsMap;

  constants?: JSONObject;

  css?: string;

  config?: Record<string, any>;

  meta?: Record<string, any>;
}
