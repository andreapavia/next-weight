import { Fragment } from 'react';

import Head from './head';

import '../styles/main.scss';

class Layout extends React.Component {
    
    render() {
        return (
            <Fragment>
                <Head title={this.props.pageTitle}/>
                <div className={(this.props.pageClass !== undefined) ? `container ${this.props.pageClass}` : 'container'}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Layout