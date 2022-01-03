import React,{useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getCarouselAction } from '../../../../redux/action/CarouselAction';
export default function HomeCarousel(props) {
    const { arrCarousel } = useSelector(state => state.CarouselReducers)
    const dispatch = useDispatch();
    useEffect(() => {
        // const action = getCarouselAction;
        dispatch(getCarouselAction());
    }, [])

    const renderCarousel = () => {
        return arrCarousel.map((item, index) => {
            let classname = ``;
            if (index === 0) {
                classname = "carousel-item active"
            } else {
                classname = "carousel-item"
            }
            return <div className={classname} key={index} style={{backgroundImage:`url(${item.hinhAnh})`,backgroundPosition:'center',backgroundSize:'100%',backgroundRepeat:'no-repeat',height:'85vh'}}>
                <img src={item.hinhAnh} className="d-block w-100" alt="..." />
                <div className="playTrailer">
                    <a href="https://www.youtube.com/watch?v=_8ldAdQd9WU" data-lity className="popup-youtube">
                        <i className="fas fa-play" />
                    </a>
                </div>
            </div>
        })
    }
    return (
        <section className="carousel">
            <div id="carouselMovie" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselMovie" data-slide-to={0} className="active" />
                    <li data-target="#carouselMovie" data-slide-to={1} />
                    <li data-target="#carouselMovie" data-slide-to={2} />
                </ol>
                <div className="carousel-inner home_carousel">
                    {renderCarousel()}
                </div>
                <button className="btn-control carousel-control-prev" type="button" data-target="#carouselMovie" data-slide="prev">
                    <i className="fas fa-chevron-left" />
                    <span className="sr-only">Previous</span>
                </button>
                <button className="btn-control carousel-control-next" type="button" data-target="#carouselMovie" data-slide="next">
                    <i className="fas fa-chevron-right" />
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </section>
    )
}
