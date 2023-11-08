import '../styles/Categorie.css';
import Category from './Category';
import categoriesData from '../assets/categories.json'; // Import your JSON data

function Categories() {
  return (
    <div className="categories-container">
      <h3><a href="./categories">Available Categories 👟 Click To View More</a></h3>
      <div loading="lazy" data-aos="zoom-in-down" data-aos-duration="1000" className="categories">
        {categoriesData.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
