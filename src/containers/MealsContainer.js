import React, { Component } from 'react'
import Meal from '../components/Meal'

class MealsContainer extends Component {
    
    state = {
        meals: [], 
        category: ''
    }

    componentDidUpdate(prevState){
        // if on current category, won't update again
        if (prevState.category !== this.props.category){
            let url = `https://themealdb.com/api/json/v1/1/filter.php?c=${this.props.category}`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.meals)
                this.setState({
                    meals: data.meals,
                    category: this.props.category
                })
            })
        }
    }
    
    render() {
        const meals = this.state.meals.map((meal, i) =>{
            return <Meal key={i} meal={meal.strMeal}/>
        })

        return (
            <div>
                {/* <h3>I am a meal container</h3> */}
                {this.props.category !== '' ? meals : <h3>Please select a category.</h3>}
            </div>
        
        )
    }
}

export default MealsContainer;