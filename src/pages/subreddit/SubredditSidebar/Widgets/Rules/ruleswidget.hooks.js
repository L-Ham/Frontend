import React from 'react';
import {useSubreddit} from '../../../subredditcontext.js';
import {Rule} from './Rule/rule.js';

export const useRulesWidget = ({data, display}) => {
    const {about} = useSubreddit();

    if (!about) return null;

    const rules = data.map((ruleData) => (
        <Rule
            key={ruleData.priority}
            data={ruleData}
            display={display}
        />
    ));

    return {
        rules,
    };
};
