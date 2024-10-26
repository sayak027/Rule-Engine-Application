import React, { useState } from 'react';
import { UserData } from '../types/rule';

interface UserFormProps {
  onSubmit: (data: UserData) => void;
}

export const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [userData, setUserData] = useState<UserData>({
    age: 25,
    department: 'Engineering',
    income: 75000,
    spend: 2000
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={userData.age}
            onChange={(e) => setUserData({ ...userData, age: parseInt(e.target.value) })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={userData.department}
            onChange={(e) => setUserData({ ...userData, department: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Income</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={userData.income}
            onChange={(e) => setUserData({ ...userData, income: parseInt(e.target.value) })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Monthly Spend</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={userData.spend}
            onChange={(e) => setUserData({ ...userData, spend: parseInt(e.target.value) })}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Check Eligibility
      </button>
    </form>
  );
};