import React from 'react';

class CartItem extends React.Component{
    render(){
        const {title, price, qty, image} = this.props.ItemDetails;
        return (
            <div className="itemBox">
                <div className="productImg">
                   <img style={styles.imageDesign} src={image} alt="imageOfpro"/>
                </div>
                <div class="details">
                    <div className="productDetails">
                        <h2>{title}</h2>
                        <h3>₹{price}</h3>
                        <h4>{qty}</h4>
                    </div>
                    
                    <div className="iconBox">
                    <img style = {styles.iconSize} src="https://img-premium.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1633098534~hmac=cfef4c456735cdcb5be8c49a39204402" 
                    onClick = {()=>this.props.onInc(this.props.ItemDetails)}
                    alt="inc"/>
                    <img style = {styles.iconSize} src="https://img-premium.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1633098585~hmac=9774cff62d6c323ac8060479469e03b2" 
                    onClick={()=>this.props.onDec(this.props.ItemDetails)}
                    alt="dec"/>
                    <img style = {styles.iconSize} src="https://cdn-icons-png.flaticon.com/512/1345/1345823.png" 
                    onClick={()=>this.props.del(this.props.ItemDetails)}
                    alt="del"/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    iconSize:{
        height: 20,
        width: 20,
        margin: 5
    },
    imageDesign:{
        height: 180,
        width:200,
    }
}

export default CartItem;