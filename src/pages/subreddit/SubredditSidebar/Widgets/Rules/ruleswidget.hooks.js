import React from 'react';
import {Rule} from './Rule/rule.js';

export const useRulesWidget = ({data, display}) => {
    if (!data) return {};

    console.log('rules', data);
    const rules = data.map((ruleData, idx) => (
        <Rule
            key={idx}
            data={ruleData}
            display={display}
            idx = {idx}
        />
    ));

    return {
        rules,
    };
};
