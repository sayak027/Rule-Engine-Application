import React, { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { RuleNode, Operator } from '../types/rule';

interface RuleBuilderProps {
  onRuleChange: (rule: RuleNode) => void;
}

export const RuleBuilder: React.FC<RuleBuilderProps> = ({ onRuleChange }) => {
  const [rule, setRule] = useState<RuleNode>({
    type: 'condition',
    attribute: 'age',
    operator: '>=',
    value: 18
  });

  const attributes = ['age', 'department', 'income', 'spend'];
  const operators: Operator[] = ['==', '!=', '>', '<', '>=', '<='];

  const handleChange = (field: string, value: string | number) => {
    const newRule = { ...rule, [field]: value };
    setRule(newRule);
    onRuleChange(newRule);
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      <div className="flex flex-wrap gap-4">
        <select
          className="px-3 py-2 border rounded-md"
          value={rule.attribute}
          onChange={(e) => handleChange('attribute', e.target.value)}
        >
          {attributes.map(attr => (
            <option key={attr} value={attr}>{attr}</option>
          ))}
        </select>

        <select
          className="px-3 py-2 border rounded-md"
          value={rule.operator as string}
          onChange={(e) => handleChange('operator', e.target.value)}
        >
          {operators.map(op => (
            <option key={op} value={op}>{op}</option>
          ))}
        </select>

        <input
          type="number"
          className="px-3 py-2 border rounded-md"
          value={rule.value as number}
          onChange={(e) => handleChange('value', parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};