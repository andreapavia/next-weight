import { Fragment } from 'react'

import Frame from '../components/frame'
import { MainContext } from '../modules/context'

class Index extends React.Component {
    render() {
        return (
            <Frame pageTitle='Welcome' pageClass="index">
                <MainContext.Consumer>
                    {({ state }) => {
                        const insertedWeights = state.weights.length
                        return (
                            <Fragment>
                                <div className='weight'>
                                    <span className="weight__count">
                                        {insertedWeights}
                                    </span>
                                    <span className="weight__desc">inserted weights</span>
                                </div>
                            </Fragment>
                        )
                    }}
                </MainContext.Consumer>
            </Frame>
            
        )
    }
}
export default Index;