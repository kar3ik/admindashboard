import React from 'react'
import OverviewColumn from './OverviewColumn'
import PieGraph from './PieGraph'

const GraphTotalColumn = () => {
    return (
      <div className="flex gap-4">
        <div className="flex-2">
          <OverviewColumn />
        </div>
        <div className="flex-1">
          <PieGraph />
        </div>
      </div>
    );
  };
  
export default GraphTotalColumn


