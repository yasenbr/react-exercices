import { Carousel } from "react-bootstrap";

export default function () {
  return (
    <div>
      <Carousel fade className="z-depth-1-half">
        <Carousel.Item className="z-depth-1-half">
          <img
            className="d-block w-100 z-depth-1-half"
            src="https://images.unsplash.com/photo-1613401046502-075f8e848fb5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="z-depth-1-half">
          <img
            className="d-block w-100 z-depth-1-half"
            src="https://images.unsplash.com/photo-1613544374277-2c393c8d24d5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="z-depth-1-half ">
          <img
            className="d-block w-100 z-depth-1-half"
            src="https://images.unsplash.com/photo-1613394588243-3051c947c18b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1116&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
