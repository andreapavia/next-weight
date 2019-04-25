import Header from './header'

import '../styles/main.scss';

class Layout extends React.Component {
    
    render() {
        return (
            <div className='frame'>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default Layout