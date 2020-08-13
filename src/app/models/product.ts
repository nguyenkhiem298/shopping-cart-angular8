export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;


  constructor(id, name, description = '', price=  0, imageUrl = 'https://i2.wp.com/moodesto.com/wp-content/uploads/2019/10/Korean-Fashion-Style-Ideas-1.jpg'){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }

}
