import * as React from 'react';
import {Jumbotron, Button, Container, ButtonGroup, } from 'react-bootstrap';
import RestaurantList from '../../components/RestaurantList/RestaurantList.component';
import './Homepage.stylesheet.css'
import Yelp from '../../apis/yelp.json';
import { findAllByDisplayValue } from '@testing-library/react';

export default function Homepage(){
    const [results, setResults] = React.useState([]);
    const [displayResults, setDisplayResults] = React.useState([]);

    React.useEffect(() => {
        setResults(Yelp.businesses);
        setDisplayResults(Yelp.businesses);
    }, [])

    const orderByRating = () => {
        function compare(r1, r2){
            if(r1.rating > r2.rating)
                return -1;
            return 1;
        }
        setDisplayResults([...results].sort(compare));
    }

    const orderByName = () => {
        function compare(n1, n2) {
            if(n1.name > n2.name)
                return 1;
            return -1;
        }
        setDisplayResults([...results].sort(compare));
    }

    const filterByPrice = price => {
        setDisplayResults([...results].filter(item => item.price === price));
    }

    const filterByCategoryNation = categoryNation => {
        function check(category) {
            return category.alias === categoryNation;
        }
        setDisplayResults([...results].filter(
            item => item.categories.some(check)
        ));
    }
    
    return(
        <Jumbotron fluid>
            <Container className="topContainer">
                <Button onClick = {orderByRating}>
                    Ordenar por avaliação
                </Button>
                <Button onClick = {orderByName}>
                    Exibir em ordem alfabética
                </Button>
                <Container className="filterContainer">
                    Filtrar por preço: 
                    <ButtonGroup>
                        <Button onClick = {() => {filterByPrice('$')}}>$</Button>
                        <Button onClick = {() => {filterByPrice('$$')}}>$$</Button>
                        <Button onClick = {() => {filterByPrice('$$$')}}>$$$</Button>
                    </ButtonGroup>
                </Container>
                <Container className="filterContainer">
                    Filtrar por tipo de comida: 
                    <ButtonGroup>
                        <Button onClick = {() => {filterByCategoryNation('brazilian')}}>Brasileira</Button>
                        <Button onClick = {() => {filterByCategoryNation('japanese')}}>Japonesa</Button>
                        <Button onClick = {() => {filterByCategoryNation('french')}}>Francesa</Button>
                    </ButtonGroup>
                </Container>
            </Container>
            <RestaurantList data={displayResults}/>
        </Jumbotron>
    )
}