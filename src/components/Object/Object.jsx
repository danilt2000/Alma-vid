import './Object.scss';

function Object(props) {
    return (
        <div className="item">
            <img className="item__image" src={props.image} alt="квартира" />
            <div className="item__info font-inter-bold">
                <p className="item__price">{props.price}</p>
                <p className="item__desc">{props.desc}</p>
                <p className="item__address font-inter-regular">{props.address}</p>
            </div>
        </div>
    );
}

export { Object };
