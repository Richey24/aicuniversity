import { Carousel } from 'react-bootstrap'
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.png'
import slide3 from '../img/slide3.jpg'


function Main() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        height={500}
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Let The Word Of Christ Dwell In You Richly In All Wisdom; Teaching And Admonishing One Another In Psalm And Hymns And Spiritual Songs, Singing With Grace In Your Heart To The Lord</h3>
                        <p>Colossians 3:16</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={500}
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Search The Scripture For In Them Ye Have Eternal Life</h3>
                        <p>John 5:39</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={500}
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Thy Word Is A Lamp Unto My Feet And A Light Unto My Path</h3>
                        <p>Psalm 119:105</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Main