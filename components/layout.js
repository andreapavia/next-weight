import { Fragment } from 'react';

import Head from './head';

import '../styles/main.scss';

class Layout extends React.Component {
    
    render() {
        return (
            <Fragment>
                <Head />
                <div>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Layout