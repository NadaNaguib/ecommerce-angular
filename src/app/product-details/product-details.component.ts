import { Component, Input} from '@angular/core';
import { Products } from '../products';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RatingModule, FormsModule, NgbRatingModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() id?: number;
  products: any = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.ibb.co/k64p79q/p1.png',
      images: [
        'https://cdn.dummyjson.com/product-images/1/1.jpg',
        'https://cdn.dummyjson.com/product-images/1/2.jpg',
        'https://cdn.dummyjson.com/product-images/1/3.jpg',
        'https://cdn.dummyjson.com/product-images/1/4.jpg',
        'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
      ],
    },
    {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.ibb.co/DwJJYtq/p2.png',
      images: [
        'https://cdn.dummyjson.com/product-images/2/1.jpg',
        'https://cdn.dummyjson.com/product-images/2/2.jpg',
        'https://cdn.dummyjson.com/product-images/2/3.jpg',
        'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
      ],
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: 'Samsung',
      category: 'smartphones',
      thumbnail: 'https://i.ibb.co/KXTH2wN/p3.png',
      images: ['https://cdn.dummyjson.com/product-images/3/1.jpg'],
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 0,
      brand: 'OPPO',
      category: 'smartphones',
      thumbnail: 'https://i.ibb.co/M54gGfd/p4.png',
      images: [
        'https://cdn.dummyjson.com/product-images/4/1.jpg',
        'https://cdn.dummyjson.com/product-images/4/2.jpg',
        'https://cdn.dummyjson.com/product-images/4/3.jpg',
        'https://cdn.dummyjson.com/product-images/4/4.jpg',
        'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
      ],
    },
    {
      id: 5,
      title: 'Huawei P30',
      description:
        'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: 'Huawei',
      category: 'smartphones',
      thumbnail: 'https://i.ibb.co/jww506X/p5.png',
      images: [
        'https://cdn.dummyjson.com/product-images/5/1.jpg',
        'https://cdn.dummyjson.com/product-images/5/2.jpg',
        'https://cdn.dummyjson.com/product-images/5/3.jpg',
      ],
    },
    {
      id: 6,
      title: 'MacBook Pro',
      description:
        'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 0,
      brand: 'Apple',
      category: 'laptops',
      thumbnail: 'https://i.ibb.co/2Y1NvVj/p6.png',
      images: [
        'https://cdn.dummyjson.com/product-images/6/1.png',
        'https://cdn.dummyjson.com/product-images/6/2.jpg',
        'https://cdn.dummyjson.com/product-images/6/3.png',
        'https://cdn.dummyjson.com/product-images/6/4.jpg',
      ],
    },
    {
      id: 7,
      title: 'Samsung Galaxy Book',
      description:
        'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: 'Samsung',
      category: 'laptops',
      thumbnail: 'https://i.ibb.co/s5SWWyK/p7.png',
      images: [
        'https://cdn.dummyjson.com/product-images/7/1.jpg',
        'https://cdn.dummyjson.com/product-images/7/2.jpg',
        'https://cdn.dummyjson.com/product-images/7/3.jpg',
        'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg',
      ],
    },
    {
      id: 8,
      title: 'Microsoft Surface Laptop 4',
      description:
        'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: 'Microsoft Surface',
      category: 'laptops',
      thumbnail: 'https://i.ibb.co/XDT5tPW/p8.png',
      images: [
        'https://cdn.dummyjson.com/product-images/8/1.jpg',
        'https://cdn.dummyjson.com/product-images/8/2.jpg',
        'https://cdn.dummyjson.com/product-images/8/3.jpg',
        'https://cdn.dummyjson.com/product-images/8/4.jpg',
        'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg',
      ],
    },
    {
      id: 9,
      title: 'Infinix INBOOK',
      description:
        'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 0,
      brand: 'Infinix',
      category: 'laptops',
      thumbnail: 'https://i.ibb.co/F5tYSD7/p9.png',
      images: [
        'https://cdn.dummyjson.com/product-images/9/1.jpg',
        'https://cdn.dummyjson.com/product-images/9/2.png',
        'https://cdn.dummyjson.com/product-images/9/3.png',
        'https://cdn.dummyjson.com/product-images/9/4.jpg',
        'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg',
      ],
    },
    {
      id: 10,
      title: 'HP Pavilion 15-DK1056WM',
      description:
        'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
      price: 1099,
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      brand: 'HP Pavilion',
      category: 'laptops',
      thumbnail: 'https://i.ibb.co/Y2HBp80/p10.png',
      images: [
        'https://cdn.dummyjson.com/product-images/10/1.jpg',
        'https://cdn.dummyjson.com/product-images/10/2.jpg',
        'https://cdn.dummyjson.com/product-images/10/3.jpg',
        'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg',
      ],
    },
    {
      id: 11,
      title: 'perfume Oil',
      description:
        'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
      price: 13,
      discountPercentage: 8.4,
      rating: 4.26,
      stock: 65,
      brand: 'Impression of Acqua Di Gio',
      category: 'fragrances',
      thumbnail: 'https://i.ibb.co/KK305rb/p11.png',
      images: [
        'https://cdn.dummyjson.com/product-images/11/1.jpg',
        'https://cdn.dummyjson.com/product-images/11/2.jpg',
        'https://cdn.dummyjson.com/product-images/11/3.jpg',
        'https://cdn.dummyjson.com/product-images/11/thumbnail.jpg',
      ],
    },
    {
      id: 12,
      title: 'Brown Perfume',
      description: 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
      price: 40,
      discountPercentage: 15.66,
      rating: 4,
      stock: 0,
      brand: 'Royal_Mirage',
      category: 'fragrances',
      thumbnail: 'https://i.ibb.co/hF8grBs/p12.png',
      images: [
        'https://cdn.dummyjson.com/product-images/12/1.jpg',
        'https://cdn.dummyjson.com/product-images/12/2.jpg',
        'https://cdn.dummyjson.com/product-images/12/3.png',
        'https://cdn.dummyjson.com/product-images/12/4.jpg',
        'https://cdn.dummyjson.com/product-images/12/thumbnail.jpg',
      ],
    },
    {
      id: 13,
      title: 'Fog Scent Xpressio Perfume',
      description:
        'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men',
      price: 13,
      discountPercentage: 8.14,
      rating: 4.59,
      stock: 61,
      brand: 'Fog Scent Xpressio',
      category: 'fragrances',
      thumbnail: 'https://i.ibb.co/6FfKV9G/p13.png',
      images: [
        'https://cdn.dummyjson.com/product-images/13/1.jpg',
        'https://cdn.dummyjson.com/product-images/13/2.png',
        'https://cdn.dummyjson.com/product-images/13/3.jpg',
        'https://cdn.dummyjson.com/product-images/13/4.jpg',
        'https://cdn.dummyjson.com/product-images/13/thumbnail.webp',
      ],
    },
    {
      id: 14,
      title: 'Non-Alcoholic Concentrated Perfume Oil',
      description:
        'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
      price: 120,
      discountPercentage: 15.6,
      rating: 4.21,
      stock: 114,
      brand: 'Al Munakh',
      category: 'fragrances',
      thumbnail: 'https://i.ibb.co/6bSBJhS/p14.png',
      images: [
        'https://cdn.dummyjson.com/product-images/14/1.jpg',
        'https://cdn.dummyjson.com/product-images/14/2.jpg',
        'https://cdn.dummyjson.com/product-images/14/3.jpg',
        'https://cdn.dummyjson.com/product-images/14/thumbnail.jpg',
      ],
    },
    {
      id: 15,
      title: 'Eau De Perfume Spray',
      description:
        'Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
      price: 30,
      discountPercentage: 10.99,
      rating: 4.7,
      stock: 105,
      brand: 'Lord - Al-Rehab',
      category: 'fragrances',
      thumbnail: 'https://i.ibb.co/brJgbB3/p15.png',
      images: [
        'https://cdn.dummyjson.com/product-images/15/1.jpg',
        'https://cdn.dummyjson.com/product-images/15/2.jpg',
        'https://cdn.dummyjson.com/product-images/15/3.jpg',
        'https://cdn.dummyjson.com/product-images/15/4.jpg',
        'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
      ],
    },
    {
      id: 16,
      title: 'Hyaluronic Acid Serum',
      description:
        "L'Oreal Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      price: 19,
      discountPercentage: 13.31,
      rating: 4.83,
      stock: 110,
      brand: "L'Oreal Paris",
      category: 'skincare',
      thumbnail: 'https://i.ibb.co/w6SG95m/p16.png',
      images: [
        'https://cdn.dummyjson.com/product-images/16/1.png',
        'https://cdn.dummyjson.com/product-images/16/2.webp',
        'https://cdn.dummyjson.com/product-images/16/3.jpg',
        'https://cdn.dummyjson.com/product-images/16/4.jpg',
        'https://cdn.dummyjson.com/product-images/16/thumbnail.jpg',
      ],
    },
    {
      id: 17,
      title: 'Tree Oil 30ml',
      description:
        'Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,',
      price: 12,
      discountPercentage: 4.09,
      rating: 4.52,
      stock: 78,
      brand: 'Hemani Tea',
      category: 'skincare',
      thumbnail: 'https://i.ibb.co/L9qBXdz/p17.png',
      images: [
        'https://cdn.dummyjson.com/product-images/17/1.jpg',
        'https://cdn.dummyjson.com/product-images/17/2.jpg',
        'https://cdn.dummyjson.com/product-images/17/3.jpg',
        'https://cdn.dummyjson.com/product-images/17/thumbnail.jpg',
      ],
    },
    {
      id: 18,
      title: 'Oil Free Moisturizer 100ml',
      description:
        'Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.',
      price: 40,
      discountPercentage: 13.1,
      rating: 4.56,
      stock: 88,
      brand: 'Dermive',
      category: 'skincare',
      thumbnail: 'https://i.ibb.co/f09xBRQ/p18.png',
      images: [
        'https://cdn.dummyjson.com/product-images/18/1.jpg',
        'https://cdn.dummyjson.com/product-images/18/2.jpg',
        'https://cdn.dummyjson.com/product-images/18/3.jpg',
        'https://cdn.dummyjson.com/product-images/18/4.jpg',
        'https://cdn.dummyjson.com/product-images/18/thumbnail.jpg',
      ],
    },
    {
      id: 19,
      title: 'Skin Beauty Serum.',
      description:
        'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
      price: 46,
      discountPercentage: 10.68,
      rating: 4.42,
      stock: 54,
      brand: 'ROREC White Rice',
      category: 'skincare',
      thumbnail: 'https://i.ibb.co/vd2gSXx/p19.png',
      images: [
        'https://cdn.dummyjson.com/product-images/19/1.jpg',
        'https://cdn.dummyjson.com/product-images/19/2.jpg',
        'https://cdn.dummyjson.com/product-images/19/3.png',
        'https://cdn.dummyjson.com/product-images/19/thumbnail.jpg',
      ],
    },
    {
      id: 20,
      title: 'Freckle Treatment Cream- 15gm',
      description:
        "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      price: 70,
      discountPercentage: 16.99,
      rating: 4.06,
      stock: 140,
      brand: 'Fair & Clear',
      category: 'skincare',
      thumbnail: 'https://i.ibb.co/n0RGNVW/p20.png',
      images: [
        'https://cdn.dummyjson.com/product-images/20/1.jpg',
        'https://cdn.dummyjson.com/product-images/20/2.jpg',
        'https://cdn.dummyjson.com/product-images/20/3.jpg',
        'https://cdn.dummyjson.com/product-images/20/4.jpg',
        'https://cdn.dummyjson.com/product-images/20/thumbnail.jpg',
      ],
    },
    {
      id: 21,
      title: 'Daal Masoor 500 grams',
      description: 'Fine quality Branded Product Keep in a cool and dry place',
      price: 20,
      discountPercentage: 4.81,
      rating: 4.44,
      stock: 133,
      brand: 'Saaf & Khaas',
      category: 'groceries',
      thumbnail: 'https://i.ibb.co/DrNY50h/p21.png',
      images: [
        'https://cdn.dummyjson.com/product-images/21/1.png',
        'https://cdn.dummyjson.com/product-images/21/2.jpg',
        'https://cdn.dummyjson.com/product-images/21/3.jpg',
      ],
    },
    {
      id: 22,
      title: 'Elbow Macaroni - 400 gm',
      description: 'Product details of Bake Parlor Big Elbow Macaroni - 400 gm',
      price: 14,
      discountPercentage: 15.58,
      rating: 4.57,
      stock: 146,
      brand: 'Bake Parlor Big',
      category: 'groceries',
      thumbnail: 'https://i.ibb.co/sP25bpQ/p22.png',
      images: [
        'https://cdn.dummyjson.com/product-images/22/1.jpg',
        'https://cdn.dummyjson.com/product-images/22/2.jpg',
        'https://cdn.dummyjson.com/product-images/22/3.jpg',
      ],
    },
    {
      id: 23,
      title: 'Orange Essence Food Flavou',
      description:
        'Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item',
      price: 14,
      discountPercentage: 8.04,
      rating: 4.85,
      stock: 26,
      brand: 'Baking Food Items',
      category: 'groceries',
      thumbnail: 'https://i.ibb.co/BGZmGGk/p23.png',
      images: [
        'https://cdn.dummyjson.com/product-images/23/1.jpg',
        'https://cdn.dummyjson.com/product-images/23/2.jpg',
        'https://cdn.dummyjson.com/product-images/23/3.jpg',
        'https://cdn.dummyjson.com/product-images/23/4.jpg',
        'https://cdn.dummyjson.com/product-images/23/thumbnail.jpg',
      ],
    },
    {
      id: 24,
      title: 'cereals muesli fruit nuts',
      description:
        'original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji',
      price: 46,
      discountPercentage: 16.8,
      rating: 4.94,
      stock: 113,
      brand: 'fauji',
      category: 'groceries',
      thumbnail: 'https://i.ibb.co/WKh2K5v/p24.png',
      images: [
        'https://cdn.dummyjson.com/product-images/24/1.jpg',
        'https://cdn.dummyjson.com/product-images/24/2.jpg',
        'https://cdn.dummyjson.com/product-images/24/3.jpg',
        'https://cdn.dummyjson.com/product-images/24/4.jpg',
        'https://cdn.dummyjson.com/product-images/24/thumbnail.jpg',
      ],
    },
  ];


  productDetails: any;

  ngOnInit() {
    console.log(this.id);
    this.productDetails = this.products.find(
      (product: any) => product.id == this.id
    );
  }
}
