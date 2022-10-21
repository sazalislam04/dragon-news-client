import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummary = ({ news }) => {
  const { _id, title, image_url, total_view, rating, details, author } = news;
  return (
    <div className="mb-5">
      <Card className="">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <Image
                roundedCircle
                style={{ height: "60px" }}
                src={author?.img}
              ></Image>
              <div>
                <p className="mb-0">{author?.name}</p>
                <p className="mb-0">{author?.published_date}</p>
              </div>
            </div>
            <div className="d-flex align-items-center pointer gap-2">
              <FaBookmark />
              <FaShareAlt />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              details.slice(0, 250) + "..."
            ) : (
              <>{details}</>
            )}{" "}
            <Link to={`/news/${_id}`}>Read More</Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="me-2 text-warning">
                <FaStar />
              </span>
              <small>{rating?.number}</small>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaRegEye />
              <span>{total_view}</span>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummary;
