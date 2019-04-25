import { Header, Footer } from './menu'

import '../styles/main.scss';

class Layout extends React.Component {
    
    render() {
        return (
            <div className='frame'>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout