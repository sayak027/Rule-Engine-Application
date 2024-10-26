import { RuleNode, UserData } from '../types/rule';

export class RuleEngine {
  static evaluate(node: RuleNode, userData: UserData): boolean {
    if (node.type === 'operator') {
      const operator = node.value as string;
      
      if (operator === 'AND') {
        return this.evaluate(node.left!, userData) && this.evaluate(node.right!, userData);
      }
      if (operator === 'OR') {
        return this.evaluate(node.left!, userData) || this.evaluate(node.right!, userData);
      }
    }

    if (node.type === 'condition') {
      const userValue = userData[node.attribute!];
      const compareValue = node.value;
      
      switch (node.operator) {
        case '==': return userValue === compareValue;
        case '!=': return userValue !== compareValue;
        case '>': return userValue > compareValue;
        case '<': return userValue < compareValue;
        case '>=': return userValue >= compareValue;
        case '<=': return userValue <= compareValue;
        default: return false;
      }
    }

    return false;
  }
}