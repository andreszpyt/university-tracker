import React from 'react';

interface StatCardProps {
    label: string;
    value: string | number;
    sub: string;
}

export function StatCard({ label, value, sub }: StatCardProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                {label}
            </div>
            <div className="font-serif text-3xl text-gray-900">
                {value}
            </div>
            <div className="text-sm text-gray-500 mt-1">
                {sub}
            </div>
        </div>
    );
}