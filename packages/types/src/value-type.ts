export interface JSExpression {
  type: 'JSExpression';

  value: string;

  mock?: any;

  compiled?: string;
}

export interface JSFunction {
  type: 'JSFunction';

  value: string;

  compuled?: string;

  mock?: any;

  [key: string]: any;
}

export interface JSSlot {
  type: 'JSSlot';

  title?: string;

  params?: string[];

  value: any;

  name?: string;
}

export type JSONValue =
  | boolean
  | string
  | number
  | null
  | undefined
  | JSONArray
  | JSONObject;
export type JSONArray = JSONValue[];
export interface JSONObject {
  [key: string]: JSONValue;
}

export type CompositeValue =
  | JSONValue
  | JSExpression
  | JSFunction
  | JSSlot
  | CompositeArray
  | CompositeObject;
export type CompositeArray = CompositeValue[];
export interface CompositeObject {
  [key: string]: CompositeValue;
}
