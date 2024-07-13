"use client";

import AProposPresentation from "./AProposPresentation"
import AProposVision from "./AProposVision"
import AProposValeurs from "./AProposValeurs"
import AProposEquipe from "./AProposEquipe"
import AProposGoal from "./AProposGoal";
import AProposStatisques from "./AproposStatistiques";


export default function APropos() {
  return (
      <div>
        <AProposPresentation />
        <AProposGoal/>
        <AProposStatisques /> 
        <div style={{ height: '11vh' }} />
        <AProposValeurs />
        <AProposVision />
        <AProposEquipe />
      </div>
  );
}
