import React, { Component } from 'react'
import Category from '../components/Category';
import MealsContainer from './MealsContainer';

const URL = 'https://themealdb.com/api/json/v1/1/categories.php'

class CategoriesContainer extends Component {
    
    state = {
        categories: [],
        category: ''
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data.categories)
            this.setState({
                categories: data.categories
            })
        })
    }
    
    handleOnClick = (e) => {
        // debugger;
        // e.target
        // e.target.id
        console.log(e.target.id)
        this.setState({
            category: e.target.id
        })
    }

    render() {
        let categories = this.state.categories.map((category, i) => {
            return <Category key={i} category={category.strCategory} handleClick={this.handleOnClick}/>
        })

        return (
        <div>
            <h2>The Meal Categories</h2>
            {categories}
            <hr/>
            {this.state.category !== "" ? <h3>The {this.state.category} Meals:</h3> : ''}
            <MealsContainer category={this.state.category}/>
        </div>
        )
    }
}

export default CategoriesContainer;

// themealdb.com/api/json/v1/1/categories.php
// themealdb.com/api/json/v1/1/filter.php?c=Pork