import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface FeaturedProduct {
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  featuredProducts: FeaturedProduct[] = [
    {
      name: 'RTX 4090',
      description: 'Ultimate gaming and content creation performance with 24GB of VRAM and cutting-edge ray tracing capabilities.',
      imageUrl: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg'
    },
    {
      name: 'RX 7900 XTX',
      description: 'High-end AMD graphics for enthusiasts. Features RDNA 3 architecture and exceptional 4K gaming performance.',
      imageUrl: 'https://d1q3zw97enxzq2.cloudfront.net/images/7900gre.width-1000.format-webp.webp'
    },
    {
      name: 'RTX 4080',
      description: 'Perfect balance of performance and value. Ideal for serious gamers who demand high frame rates at 1440p and 4K.',
      imageUrl: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4080/geforce-rtx-4080-super-og-1200x630.jpg'
    }
  ];
}
