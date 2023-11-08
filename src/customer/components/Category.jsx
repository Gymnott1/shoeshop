import  { useState } from 'react';
import '../styles/Category.css';

function Category({ id, name, image1, image2, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={link} className="category">
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? image2 : image1}
          alt={name}
          className="category-image"
        />
      </div>
      <h3 className="category-name">{name}</h3>
      <p className="view-link">View</p>
    </a>
  );
}

export default Category;
