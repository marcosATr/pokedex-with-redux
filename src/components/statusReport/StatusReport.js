import React from "react";
import styled from "styled-components";

const StatusReportHolder = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #ffffff;
  grid-gap: 2rem;
`;
const Stat = styled.div`
  text-transform: capitalize;
`;
const StatTitle = styled.div``;

const StatNumber = styled.div`
  font-weight: bold;
  margin-top: 7px;
  margin-bottom: 7px;
`;
const StatBar = styled.div`
  width: 100%;
  height: 7px;
  background: white;
  border-radius: 10px;
  position: relative;
  &::after {
    content: "";
    background-color: var(--color-primary);
    position: absolute;
    z-index: 99;
    width: ${(props) => props.overallStats}%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
  }
`;

function StatusReport(props) {
  const allStats = {
    hp: props.stats[0].base_stat,
    attack: props.stats[1].base_stat,
    defense: props.stats[2].base_stat,
    sAttack: props.stats[3].base_stat,
    sDefense: props.stats[4].base_stat,
    speed: props.stats[5].base_stat,
  };

  const meanStat = 150;

  const overallStatCalculator = (stat) => {
    const StatInPercentage = {};
    for (const property in stat) {
      if (stat[property] > meanStat) {
        StatInPercentage[property] = 100;
      } else {
        StatInPercentage[property] = (stat[property] / meanStat) * 100;
      }
    }
    return StatInPercentage;
  };

  const overallStats = overallStatCalculator(allStats);
  return (
    <StatusReportHolder>
      <Stat>
        <StatTitle>hp</StatTitle>
        <StatNumber>{allStats.hp}</StatNumber>
        <StatBar overallStats={overallStats.hp}></StatBar>
      </Stat>
      <Stat>
        <StatTitle>attack</StatTitle>
        <StatNumber>{allStats.attack}</StatNumber>
        <StatBar overallStats={overallStats.attack}></StatBar>
      </Stat>
      <Stat>
        <StatTitle>defense</StatTitle>
        <StatNumber>{allStats.defense}</StatNumber>
        <StatBar overallStats={overallStats.defense}></StatBar>
      </Stat>
      <Stat>
        <StatTitle>special attack</StatTitle>
        <StatNumber>{allStats.sAttack}</StatNumber>
        <StatBar overallStats={overallStats.sAttack}></StatBar>
      </Stat>
      <Stat>
        <StatTitle>special defense</StatTitle>
        <StatNumber>{allStats.sDefense}</StatNumber>
        <StatBar overallStats={overallStats.sDefense}></StatBar>
      </Stat>
      <Stat>
        <StatTitle>speed</StatTitle>
        <StatNumber>{allStats.speed}</StatNumber>
        <StatBar overallStats={overallStats.speed}></StatBar>
      </Stat>
    </StatusReportHolder>
  );
}

export default StatusReport;
