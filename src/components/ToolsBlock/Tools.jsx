import React from 'react';
import {
  ToolsContainer,
  ToolsHeading,
  ToolsSelectBlock,
  ToolsSelectText,
  BlockTest,
  ToolsSelectIcon,
  ToolsSelectIconTwo,
  ToolsSelectIconThree,
  ToolsSelectIconFour,
  ToolsSelectIconFive
} from './Style';

export default function Tools() {
  return (
    <ToolsContainer>
      <ToolsHeading>
        Tools
      </ToolsHeading>
      <BlockTest>
        <ToolsSelectBlock>
          <ToolsSelectIcon />
          <ToolsSelectText>Roadmap</ToolsSelectText>
        </ToolsSelectBlock>
        <ToolsSelectBlock>
          <ToolsSelectIconTwo />
          <ToolsSelectText>Schedule</ToolsSelectText>
        </ToolsSelectBlock>
        <ToolsSelectBlock>
          <ToolsSelectIconThree />
          <ToolsSelectText>Tasks</ToolsSelectText>
        </ToolsSelectBlock>
        <ToolsSelectBlock>
          <ToolsSelectIconFour />
          <ToolsSelectText>Notes</ToolsSelectText>
        </ToolsSelectBlock>
        <ToolsSelectBlock>
          <ToolsSelectIconFive />
          <ToolsSelectText>Files</ToolsSelectText>
        </ToolsSelectBlock>
      </BlockTest>
    </ToolsContainer>
  );
}
