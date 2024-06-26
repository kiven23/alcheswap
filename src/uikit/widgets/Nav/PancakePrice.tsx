import React from "react";
import styled from "styled-components";
import useGetPriceData2 from "hooks/useGetPriceData2";
import useGetPriceData3 from "hooks/useGetPriceData3";
import { DiscordIcon,TelegramIcon,GitHubIcon,BitcoinIcon, PolygonIcon, EthereumIcon, SvgProps, AlcheCoin } from "../../components/Svg";
import Text from "../../components/Text/Text";

const Container = styled.a`
  display: flex;
  align-items: center;
  margin-right: 4px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;


const PancakePrice: React.FC<{ btcPriceUsd?: number }> = ({ btcPriceUsd }) => {
  const ethPriceUsd = useGetPriceData2()
  const maticPriceUsd = useGetPriceData3()

  return btcPriceUsd ? (
    <>
    <Container href="https://www.binance.com/en/trade/BTC_USDT?type=spot">
      <BitcoinIcon mr="4px" />
      <Text bold mr="8px">{`$${btcPriceUsd.toFixed(2)}`}</Text>
    </Container>
    <Container href="https://www.binance.com/en/trade/ETH_USDT?type=spot">
      <EthereumIcon mr="4px" />
      <Text bold mr="8px">{`$${ethPriceUsd.toFixed(2)}`}</Text>
    </Container>
     
    <Container href="https://www.binance.com/en/trade/MATIC_USDT?type=spot">
      <PolygonIcon mr="4px" />
      <Text bold mr="8px">{`$${maticPriceUsd.toFixed(3)}`}</Text>
    </Container>


    <Container href="#">
      <AlcheCoin mr="4px" />
      <Text bold mr="8px">AlcheCoin</Text>
    </Container>

    <Container href="https://github.com/AlcheCoin">
      <GitHubIcon mr="4px" />
      <Text bold mr="8px"> </Text>
    </Container>
    <Container href="https://t.me/+oVceB8xAL1RlYzFl">
      <TelegramIcon mr="4px" />
      <Text bold mr="8px"> </Text>
    </Container>
    <Container href="https://discord.gg/Xkgcm7pH">
      <DiscordIcon mr="4px" />
      <Text bold mr="8px"> </Text>
    </Container>
    </>
  ) : <Text />
    
};

export default PancakePrice;
