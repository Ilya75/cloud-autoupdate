import React from 'react';

import Card from './Card';

import './Version.css';

const Version = (props) => {
    return (
        <Card className="version">
            <p>
                {props.title}
            </p>
        </Card>
      );
};

export default Version;