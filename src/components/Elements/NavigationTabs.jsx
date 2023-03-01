import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #eee;
`;

const Tab = styled.a`
  flex: 1;
  text-align: center;
  padding: 16px;
  min-width: 120px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #fff;
  }
`;

export default function NavigationTabs({ navigationLinks }) {
    if (navigationLinks) {
        return (
            <TabsContainer>
                {
                    navigationLinks.map((otherTabs) => (
                        <Tab href={otherTabs.url}>
                            {otherTabs.title}
                        </Tab>

                    ))

                }
            </TabsContainer>
        )
    }
    return null;

}