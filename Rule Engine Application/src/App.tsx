import React, { useState } from 'react';
import { RuleBuilder } from './components/RuleBuilder';
import { UserForm } from './components/UserForm';
import { RuleEngine } from './utils/ruleEngine';
import { RuleNode, UserData } from './types/rule';
import { CheckCircle, XCircle, Sliders } from 'lucide-react';

function App() {
  const [currentRule, setCurrentRule] = useState<RuleNode | null>(null);
  const [result, setResult] = useState<boolean | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleRuleChange = (rule: RuleNode) => {
    setCurrentRule(rule);
    if (userData) {
      const isEligible = RuleEngine.evaluate(rule, userData);
      setResult(isEligible);
    }
  };

  const handleUserDataSubmit = (data: UserData) => {
    setUserData(data);
    if (currentRule) {
      const isEligible = RuleEngine.evaluate(currentRule, data);
      setResult(isEligible);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
            <Sliders className="w-8 h-8 text-blue-600" />
            Rule Engine
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Define rules and check user eligibility
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Define Rule</h2>
              <RuleBuilder onRuleChange={handleRuleChange} />
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">User Information</h2>
              <UserForm onSubmit={handleUserDataSubmit} />
            </div>
          </div>

          {result !== null && (
            <div className={`p-4 rounded-lg ${result ? 'bg-green-50' : 'bg-red-50'} flex items-center justify-center gap-3`}>
              {result ? (
                <>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-800 font-medium">User is eligible!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-red-600" />
                  <span className="text-red-800 font-medium">User is not eligible.</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;