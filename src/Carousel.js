import Carousel from 'react-bootstrap/Carousel';
import Benz from './Benz.png';
import Audi from './Audi.png';
import Vw from './Vw.png';

function CarouselPage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Benz} alt="Benz" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>Mercedez Benz</h3>
          <p>Get Original Mercedez Benz Parts and stay a decade off garage</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Vw} alt="Volkswagen" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>Volkswagen</h3>
          <p>At the most affordable price, you get genuine products</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Audi} alt="Audi" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>Audi</h3>
          <p>The Lord of Rings only demands quality. We have quality</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;
