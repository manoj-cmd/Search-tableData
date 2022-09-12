import {connect} from 'react-redux'
import Home from '../Component/Home'
import addToCart from '../services/Actions/Action'


const mapStateToProps = state =>({})

const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=> dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

//export default Home; 