import './index.less';

const ShoppingCard = ({
    imageurl,
    price,
    description
}) => {

    return (
        <div>
            <img src={imageurl}></img>
            <section>{description}</section>
            <section>{price}</section>
            <button>+</button>
        </div>
    );
}

export default ShoppingCard;