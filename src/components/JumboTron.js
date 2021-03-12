import { Button, Jumbotron} from "react-bootstrap";

export default function () {
  return (
    <div>
      <Jumbotron className="z-depth-1-half">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary" className="z-depth-1-half">
            Learn more
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
}
