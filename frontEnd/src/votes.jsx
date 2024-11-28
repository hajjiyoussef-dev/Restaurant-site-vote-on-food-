import React from 'react';

const VoteProgress = ({ title, votes, totalVotes }) => {
  const progressPercentage = (votes / totalVotes) * 100;

  return (
    <div className="mb-4">
      <h5 className="text-center mb-2"><b>{title}</b></h5>
      <div className="progress custom-progress">
        <div className="progress-container">
          <div
            className="progress-bar bg-success"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="progress-text">{progressPercentage.toFixed(2)}%</div>
      </div>
    </div>
  );
};

export default VoteProgress;
