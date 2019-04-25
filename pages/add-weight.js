import Link from 'next/link';
import { Fragment } from 'react';

import { MainContext } from '../modules/context'
import Frame from '../components/frame'

export default  () => {
    return (
       
        <Frame pageTitle='Add Weight' pageClass="add-weight">
            <MainContext.Consumer>
                {({ actions }) => {
                    let weight;
                    return (
                        <Fragment>
                            <input type="text" ref={node => weight = node} />
                            <button onClick={() => {
                                actions.handleWeightInsert(weight)
                                weight.value = ''
                            }}>Insert</button>
                        </Fragment>
                    )
                }}
                
            </MainContext.Consumer>
        </Frame>
    )
}