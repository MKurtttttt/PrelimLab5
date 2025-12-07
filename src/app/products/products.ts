import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
  vram: string;
  description: string;
  inStock: boolean;
  imageUrl: string;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [
    {
      id: 1,
      name: 'NVIDIA GeForce RTX 4090',
      manufacturer: 'NVIDIA',
      price: 1599,
      vram: '24GB GDDR6X',
      description: 'The ultimate GPU for gaming and content creation. Features Ada Lovelace architecture with DLSS 3 technology.',
      inStock: true,
      imageUrl: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg'
    },
    {
      id: 2,
      name: 'NVIDIA GeForce RTX 4080',
      manufacturer: 'NVIDIA',
      price: 1199,
      vram: '16GB GDDR6X',
      description: 'High-performance GPU perfect for 4K gaming and professional workloads.',
      inStock: true,
      imageUrl: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4080/geforce-rtx-4080-super-og-1200x630.jpg'
    },
    {
      id: 3,
      name: 'AMD Radeon RX 7900 XTX',
      manufacturer: 'AMD',
      price: 999,
      vram: '24GB GDDR6',
      description: 'Flagship AMD GPU with RDNA 3 architecture. Excellent for gaming and content creation.',
      inStock: true,
      imageUrl: 'https://d1q3zw97enxzq2.cloudfront.net/images/7900gre.width-1000.format-webp.webp'
    },
    {
      id: 4,
      name: 'NVIDIA GeForce RTX 4070',
      manufacturer: 'NVIDIA',
      price: 599,
      vram: '12GB GDDR6X',
      description: 'Great value for 1440p gaming with ray tracing and DLSS support.',
      inStock: true,
      imageUrl: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/geforce-rtx-4070/geforce-rtx-4070-newsfeed.png'
    },
    {
      id: 5,
      name: 'AMD Radeon RX 7800 XT',
      manufacturer: 'AMD',
      price: 499,
      vram: '16GB GDDR6',
      description: 'Mid-range powerhouse offering excellent performance per dollar.',
      inStock: false,
      imageUrl: 'https://dlcdnwebimgs.asus.com/files/media/f27fb00d-ab9d-48b9-b91d-e172cedadbfc/v1/img/amd/amd-1.jpg'
    },
    {
      id: 6,
      name: 'NVIDIA GeForce RTX 4060 Ti',
      manufacturer: 'NVIDIA',
      price: 399,
      vram: '8GB GDDR6',
      description: 'Entry-level RTX card perfect for 1080p and 1440p gaming.',
      inStock: true,
      imageUrl: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4060-4060ti/geforce-rtx-4060-ti-og-1200x630.jpg'
    }
  ];
}
