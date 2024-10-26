export type Operator = '==' | '!=' | '>' | '<' | '>=' | '<=' | 'AND' | 'OR';

export interface RuleNode {
  type: 'condition' | 'operator';
  value: string | number | Operator;
  left?: RuleNode;
  right?: RuleNode;
  attribute?: string;
}

export interface UserData {
  age: number;
  department: string;
  income: number;
  spend: number;
  [key: string]: string | number;
}