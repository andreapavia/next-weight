import Link from 'next/link'
import { Fragment } from 'react'

import Layout from '../components/layout'
import PlusIcon from '../components/plus-icon'
import { MainContext } from '../modules/context'

class Index extends React.Component {
    render() {
        const insertedWeights = 0;

        return (
            <Layout pageTitle='Welcome' pageClass="index">
                <MainContext.Consumer>
                    {({ state, actions }) => {
                        const insertedWeights = state.weights.length
                        return (
                            <Fragment>
                                <div className='weight'>
                                    <span className="weight__count">
                                        {insertedWeights}
                                    </span>
                                    <span className="weight__desc">inserted weights</span>
                                </div>
                                <Link href="/add-weight">
                                    <a><PlusIcon /></a>
                                </Link>
                            </Fragment>
                        )
                    }}
                </MainContext.Consumer>
            </Layout>
            
        )
    }
}
export default Index;