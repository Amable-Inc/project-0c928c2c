'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Hammer, Shield, Truck, Star } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Professional Steel Shovel',
      price: '$49.99',
      description: 'Heavy-duty steel construction for professional use',
      image: '🏗️',
      rating: 4.8,
      reviews: 234,
      tag: 'Best Seller'
    },
    {
      id: 2,
      name: 'Garden Spade Deluxe',
      price: '$34.99',
      description: 'Perfect for gardening and landscaping projects',
      image: '🌱',
      rating: 4.6,
      reviews: 189,
      tag: 'Popular'
    },
    {
      id: 3,
      name: 'Snow Shovel Pro',
      price: '$39.99',
      description: 'Wide blade design for efficient snow removal',
      image: '❄️',
      rating: 4.9,
      reviews: 312,
      tag: 'Top Rated'
    },
    {
      id: 4,
      name: 'Folding Camp Shovel',
      price: '$24.99',
      description: 'Compact and portable for outdoor adventures',
      image: '🏕️',
      rating: 4.5,
      reviews: 156,
      tag: 'New'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'All our shovels come with a lifetime warranty against defects'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50 anywhere in the country'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Tested',
      description: 'Every shovel is rigorously tested to meet our high standards'
    },
    {
      icon: Hammer,
      title: 'Built to Last',
      description: 'Premium materials and craftsmanship for decades of use'
    }
  ];

  const testimonials = [
    {
      name: 'John Morrison',
      role: 'Landscape Contractor',
      content: 'Best shovels I\'ve ever used. The quality is outstanding and they hold up to daily professional use.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Home Gardener',
      content: 'I was skeptical about spending more on a shovel, but this has made my gardening so much easier!',
      rating: 5
    },
    {
      name: 'Mike Thompson',
      role: 'Construction Worker',
      content: 'Incredible durability. I\'ve been using mine for 3 years and it\'s still in perfect condition.',
      rating: 5
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-4xl">🥄</span>
            <span>ShovelMaster</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#products" className="text-sm font-medium hover:underline">Products</a>
            <a href="#features" className="text-sm font-medium hover:underline">Features</a>
            <a href="#testimonials" className="text-sm font-medium hover:underline">Reviews</a>
            <a href="#contact" className="text-sm font-medium hover:underline">Contact</a>
          </nav>
          <Button>Shop Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="mb-4" variant="secondary">Premium Quality Since 1985</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                The World's Finest Shovels
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                From professional contractors to weekend gardeners, discover the perfect shovel for every job. 
                Built to last, designed to perform.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="text-lg px-8">
                Browse Collection
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.8/5</span> Rating
              </div>
              <div>
                <span className="font-semibold">50,000+</span> Happy Customers
              </div>
              <div>
                <span className="font-semibold">38 Years</span> In Business
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose ShovelMaster?
            </h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              We're committed to providing the best products and service in the industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <feature.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Products
            </h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              Hand-picked selection of our most popular shovels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  {product.tag && (
                    <Badge className="w-fit mb-2" variant="default">
                      {product.tag}
                    </Badge>
                  )}
                  <div className="text-6xl mb-4">{product.image}</div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <p className="text-2xl font-bold">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Find Your Perfect Shovel?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
              Join thousands of satisfied customers who trust ShovelMaster for all their digging needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Shop All Products
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ShovelMaster</h3>
              <p className="text-sm text-gray-400">
                Premium quality shovels since 1985. Built to last, designed to perform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Garden Shovels</a></li>
                <li><a href="#" className="hover:text-white">Snow Shovels</a></li>
                <li><a href="#" className="hover:text-white">Professional Tools</a></li>
                <li><a href="#" className="hover:text-white">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Story</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">Warranty</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ShovelMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
