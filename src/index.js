import React from 'react';

import AppComponent from 'flow-app-component';

// Image Canvas Styles
import './style.css';

class SpaceComponent extends AppComponent {
  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for space component.',
          properties: [
            {
              id: 'vertical-space',
              name: 'Vertical Space',
              type: 'toggle',
              options: {
                values: [
                  { text: 'Less', value: 'less' },
                  { text: 'Average', value: 'average' },
                  { text: 'More', value: 'more' },
                ],
              },
              data: null,
            },
          ],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the spacer',
          properties: [
            {
              id: 'event',
              name: 'Events',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],
      iconUrl: '/assets/images/space-component.png',
      name: 'Space',
      componentType: 'space',
      category: 'Views',
      parent: null,
      allowsChildren: false,
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    const elemProps = this.getElementProps();
    const space = this.getPropertyData('vertical-sapce');
    const style = {};
    if (space === 'less') {
      style.marginTop = '20px';
    }
    if (space === 'average') {
      style.marginTop = '40px';
    }
    if (space === 'more') {
      style.marginTop = '60px';
    }
    return <div className="node image" {...elemProps} style={style} />;
  }
}

export default SpaceComponent;
