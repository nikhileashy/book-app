import React from "react";
import NavBar from "./NavBar";
import { Button, Card } from "antd";

const { Meta } = Card;

const ViewBook = () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      title: "BOOK NAME",
      author: "Author",
      price: 250,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
    },
    {
      id: 2,
      title: "BOOK NAME",
      author: "Author",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    },
    {
      id: 3,
      title: "BOOK NAME",
      author: "Author",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?w=500",
    },
    {
      id: 4,
      title: "BOOK NAME",
      author: "Author",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500",
    },
    {
      id: 5,
      title: "BOOK NAME",
      author: "Author",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500",
    },
    {
      id: 6,
      title: "BOOK NAME",
      author: "Author",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500",
    },
    {
      id: 7,
      title: "BOOK NAME",
      author: "Author",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500",
    },
    {
      id: 8,
      title: "BOOK NAME",
      author: "Author",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=500",
    },
  ]);
  return (
    <div>
      <NavBar />
      <div className="container" style={{ padding: 10, margin: 50 }}>
        <h1 style={{ marginBottom: 50 }}> View Book</h1>
        <div className="row g-3">
          {data.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <Card
                hoverable
                variant="borderless"
                style={{ width: 240, border: "1px solid #8b8b8b93" }}
                actions={[<Button type="primary">Add to Cart</Button>]}
                key={item.id}
                cover={
                  <img
                    style={{ objectFit: "cover", height: 300 }}
                    draggable={false}
                    alt="example"
                    src={item.image}
                  />
                }
              >
                <Meta
                  title={item.title}
                  description=<>
                    {item.author}${item.price}
                  </>
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
