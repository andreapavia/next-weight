import Router from 'next/router'

import { Plus, ChevronLeft } from './icon-buttons'

export const Header = () => {
    return (
       <header className="header" onClick={() => {
           Router.push('/')
       }}>
            <h1>W</h1>
       </header>
    )
}

export class Footer extends React.Component {
    state = {
        router: ''
    }
    componentDidMount = () => {
        this.setState({
            router: Router
        })
    }
    render() {
        return(
            <footer className="footer">
                {
                    (this.state.router.route !== '/add-weight') 
                        ? <Plus />
                        : <ChevronLeft />
                }
            </footer>
        )
    }
}