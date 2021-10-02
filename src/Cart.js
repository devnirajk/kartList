import React from 'react';
import CartItem from './CartItem.js';

class Cart extends React.Component{
    constructor(){
        super();
        this.state ={
            products : [
                {
                    title: "Apple",
                    price: "100000",
                    qty: 1,
                    id:51124,
                    image: "https://images.unsplash.com/photo-1571380401583-72ca84994796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGxlJTIwaXBob25lJTIwMTN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                },
                {
                    title: "Dell",
                    price: "96000",
                    qty: 1,
                    id:65222,
                    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsbCUyMHhwc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                },
                {
                    title: "MI",
                    price: "51000",
                    qty: 1,
                    id: 400123,
                    image: "https://images.unsplash.com/photo-1591447337751-c7b95cf704ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eGlhb21pfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                }
            ]     
        }
    }
    handleIncQuantity = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;

     this.setState({
         products:products
     })
    }

     handleDelete= (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);
        products.splice(index, 1);

        this.setState({
            products:products
        })
     }
     
     handleDecQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty>0){
        products[index].qty-=1;
        }

        this.setState({
            products:products
    })
    }
    render(){
        var totalAmount = 0;
        const {products} = this.state;
        {   products.map((product)=>{
            totalAmount+=(parseInt(product.price)*product.qty);
        }
        )
        }
        return(
            <div className="cartStyle">
                <div className="navBar">
                    <img style={styles.kartIcon} src="https://cdn-icons-png.flaticon.com/512/4297/4297019.png" alt="kart" />
                    <span style={styles.count}>{products.length}</span>
                </div>
                <div className="itemList">
            {
            products.map((item)=>{
            return <CartItem ItemDetails = {item} key={item.id} onDec = {this.handleDecQuantity} onInc = {this.handleIncQuantity} del = {this.handleDelete}/>
            })
            }
            </div>
            <div className="totalPrice">
                Total Amount  ₹ {totalAmount}
            </div>
            </div>
        );
    }
}

const styles = {
    kartIcon:{
        height:32,
        width:32,
        marginLeft: "96%",
        marginTop:12
    },
    count:{
        color:"white",
        fontSize:20,
        fontWeight:700
    }
}

export default Cart;