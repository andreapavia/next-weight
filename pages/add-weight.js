import Link from 'next/link';
import { Fragment } from 'react';

import { MainContext } from '../modules/context'
import Layout from '../components/layout'

export default  () => {
    return (
       
        <Layout pageTitle='Add Weight' pageClass="add-weight">
            <MainContext.Consumer>
                {({state, actions}) => {
                    let weight;
                    return (
                        <Fragment>
                            <input type="text" ref={node => weight = node} />
                            <button onClick={() => {
                                actions.handleWeightInsert(weight)
                            }}>Insert</button>
                        </Fragment>
                    )
                }}
                
            </MainContext.Consumer>
            
        </Layout>
    )
}