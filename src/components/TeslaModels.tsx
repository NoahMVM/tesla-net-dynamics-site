
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TeslaModels = () => {
  const models = [
    {
      name: "Model S",
      description: "Luxury performance sedan with cutting-edge technology",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
      features: ["Autopilot Enhancement", "Performance Boost", "Premium Connectivity"],
      badge: "Flagship"
    },
    {
      name: "Model 3",
      description: "The world's best-selling electric vehicle",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80",
      features: ["FSD Capability", "Track Mode", "Entertainment Package"],
      badge: "Popular"
    },
    {
      name: "Model X",
      description: "Premium SUV with falcon wing doors",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      features: ["Towing Package", "Off-Road Assist", "Bioweapon Defense"],
      badge: "SUV"
    },
    {
      name: "Model Y",
      description: "Compact SUV with maximized efficiency",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=800&q=80",
      features: ["Acceleration Boost", "Cold Weather Package", "Enhanced Autopilot"],
      badge: "Versatile"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Compatible Tesla Models
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our software solutions are designed to work seamlessly with all Tesla models, 
            unlocking new capabilities and enhancing your driving experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <Card 
              key={model.name} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{model.badge}</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {model.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {model.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Available Upgrades:</h4>
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeslaModels;
