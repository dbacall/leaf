import React, { useState } from 'react';
import CreateSundayLeague from '../commons/createSundayLeague/createSundayLeagueContainer'

const SundayCreator = ({ leagueCreated, teamsAdded }) => {
  const renderSteps = () => {
    console.log('here');
    if (!leagueCreated) {
      return (
        <div>
          <h2>Step 1: Create a League</h2>
          <CreateSundayLeague />
        </div>
      )
    }
    if (!teamsAdded && leagueCreated) {
      return <h2>Step 2: Add Teams</h2>
    }

  }

  return (
    <section>
      {renderSteps()}
    </section>
  );
}

export default SundayCreator;