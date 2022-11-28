import React from 'react';
import {
  ToolsContainer,
  ToolsHeading,
  ToolsSelectBlock,
  ToolsSelectText,
  BlockTest,
  ToolsSelectIcon
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
          <ToolsSelectIcon />
          <ToolsSelectText>Roadmap</ToolsSelectText>
        </ToolsSelectBlock>
        <ToolsSelectBlock>
          <ToolsSelectIcon />
          <ToolsSelectText>Roadmap</ToolsSelectText>
        </ToolsSelectBlock>
        <ToolsSelectBlock>
          <ToolsSelectIcon />
          <ToolsSelectText>Roadmap</ToolsSelectText>
        </ToolsSelectBlock>
        <ToolsSelectBlock>
          <ToolsSelectIcon />
          <ToolsSelectText>Roadmap</ToolsSelectText>
        </ToolsSelectBlock>
      </BlockTest>
    </ToolsContainer>
  );
}
