import React from 'react';
import {useSubreddit} from '../../../subredditcontext';
import {Rule} from './Rule/rule';

export const useRulesWidget = (data, display) => {
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
