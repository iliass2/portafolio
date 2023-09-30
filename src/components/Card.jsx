import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ecom_img from "../assets/ecom2.jpeg";

export default function Prj({ image, img_desc, title, description, footer }) {
  return (
    <>
      <Card>
      <Card.Img variant="top" src={image} alt={img_desc} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{footer}</Card.Footer>
      </Card>
    </>
  );
}
