import { Button, Card,CardDeck } from "react-bootstrap";

export default function () {
  return (
    <div>
      <CardDeck>
        <Card style={{ width: "18rem" }} className="z-depth-1-half">
          <Card.Img variant="top"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrcLMEiIlkuZVM8LK9xPGp3PuSwF_4C8AbQ&usqp=CAU" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" className="z-depth-1-half">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="z-depth-1-half">
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5yyiHka6b5KqwhqAjhl2A64wLyKKJbE1fA&usqp=CAU" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" className="z-depth-1-half">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="z-depth-1-half">
          <Card.Img variant="top"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBnfr3LkhmdwHpZ1QgqvjpegqicbVY23s4g&usqp=CAU" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" className="z-depth-1-half">Go somewhere</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
