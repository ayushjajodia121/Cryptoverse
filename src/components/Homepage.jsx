import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Typography, Statistic, Row, Col} from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../sevices/CryptoApi';
import axios from 'axios';
import { cryptoApiHeaders } from '../utils/constants';

const { Title } = Typography;

const Homepage = () => {
    // const {data, isFetching} = useGetCryptosQuery();
    // console.log(data);
    // const options = {
    //     method: 'GET',
    //     headers: cryptoApiHeaders
    // };
    
    // fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
    // .then((response)=>console.log(response));
    // const [cryptos,setCryptos] = useState(cryptosList?.data?.coins)

    // useEffect(()=>{
    //     if(!isFetching){
    //     setCryptos(cryptosList?.data?.coins)
    // }
    // },[isFetching])
    // const options = {
    //   method: "GET",
    //   url: "https://coinranking1.p.rapidapi.com/coins",
    //   headers: {
    //     "X-RapidAPI-Key": "2210c24aa0mshf3c4043ed229403p123e49jsn1c5f2d463e77",
    //     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    //   },
    // };

    // useEffect({},[]);
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
//   const [cryptos,setCryptos] = useState(cryptosList);

//   useEffect(()=>{
//     if(!isFetching){
//     setCryptos(cryptosList)
//   }else{
//     console.log('not fetching');
//   }
//   },[isFetching]);

//****************************GET CRYPTO COINS DATA USING AXIOS LIBRARY ******************************* */
    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
        },
        headers: {
        'X-RapidAPI-Key': '2210c24aa0mshf3c4043ed229403p123e49jsn1c5f2d463e77',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  return (
    <>
        <Title level={2} className='heading'>Global Crypto Stats</Title>
        <Row>
            <Col span={12}><Statistic title='Total Cryptocurrencies' value='5'/></Col>
            <Col span={12}><Statistic title='Total Exchanges' value='5'/></Col>
            <Col span={12}><Statistic title='Total Market Cap' value='5'/></Col>
            <Col span={12}><Statistic title='Total 24 h Volume' value='5'/></Col>
            <Col span={12}><Statistic title='Total Markets' value='5'/></Col>
        </Row>
    </>
  )
}

export default Homepage
