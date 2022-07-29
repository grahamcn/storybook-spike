import React, { useRef } from 'react';

import useContainerQueries from './useCreateContainerQueries';

import './UseContainerQueries.scss';

// This component exists to highlight the usage of the hook
export const UseContainerQueries = () => {
  const containerEl = useRef<HTMLDivElement>(null);
  useContainerQueries(containerEl, [400, 600]);

  return (
    <div className="list inline">
      <div style={{
        backgroundColor: 'grey',
        width: '25%',
        height: '10vh',
      }} />

      <div
        className="container"
        ref={containerEl}
        style={{
          flexGrow: 1,
        }}
      />
    </div>
  );
}

export default UseContainerQueries;
