import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eee;
`;

const Tab = styled.a`
  flex: 1;
  text-align: center;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #fff;
  }
`;

export default function NavigationTabs({ navigationLinks }) {
    return (
        <TabsContainer>
            {
                navigationLinks.map((link) => {
                    (
                        <Tab href={link.href}>
                            {link.title}
                        </Tab>
                    )
                })
            }
        </TabsContainer>
    )
}