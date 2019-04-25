import React from 'react'
import App, { Container } from 'next/app'

import { Provider } from '../modules/context'
import Layout from '../components/layout'

class MyApp extends App {
    state = {
        weights: []
    }

    /*
     * Takes an input DOM node containing the input weight and validates it
     */
    handleWeightInsert = (input) => {
        let weight = parseFloat(input.value.trim());

        if(!isNaN(weight))
            this.insertWeight(input.value)
    }

    /*
     * Creates a new array from state.weights and pushes the new weight;
     * then sets state.weight to the newer weights array
     */
    insertWeight = weight => { 
        let weights = [...this.state.weights]
        weights.push(weight)
        this.setState({
            weights: weights
        })
    }
    render() {
        const { Component, pageProps } = this.props
        const actions = {
            handleWeightInsert: this.handleWeightInsert,
            insertWeight: this.insertWeight
        }
        return (
            <Container>
                <Provider state={this.state} actions={actions}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </Container>
        )
    }
}

export default MyApp;