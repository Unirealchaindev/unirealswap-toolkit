import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
//import Skeleton from "../../../components/Skeleton/Skeleton";
import PriceLogo from "../icons/PriceLogo";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://unirealswap.com/#/swap?outputCurrency=0x40f61130DD31B3b7392C48E2A65703b7b1Bd0743"
      target="_blank"
    >
      <PriceLogo />
      <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <PriceLogo />
  );
};

export default React.memo(CakePrice);
