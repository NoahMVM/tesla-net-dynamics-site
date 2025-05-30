
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Shield, Gauge, Wifi, Car, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Performance Upgrades",
      description: "Unlock additional horsepower and torque with our performance enhancement packages.",
      features: ["Acceleration Boost", "Track Mode", "Power Increase"]
    },
    {
      icon: Shield,
      title: "Autopilot Enhancement",
      description: "Advanced driver assistance features and Full Self-Driving capabilities.",
      features: ["Enhanced Autopilot", "FSD Beta", "Navigate on Autopilot"]
    },
    {
      icon: Gauge,
      title: "Software Optimization",
      description: "Optimize your Tesla's software for better efficiency and performance.",
      features: ["Battery Optimization", "Charging Speed", "Range Extension"]
    },
    {
      icon: Wifi,
      title: "Connectivity Solutions",
      description: "Premium internet and entertainment packages for your Tesla.",
      features: ["Premium Connectivity", "Netflix & Gaming", "Live Traffic"]
    },
    {
      icon: Car,
      title: "Comfort & Convenience",
      description: "Enhanced comfort features and convenience upgrades.",
      features: ["Heated Seats", "Smart Climate", "Cabin Overheat Protection"]
    },
    {
      icon: Zap,
      title: "Energy Management",
      description: "Advanced energy management and charging optimization.",
      features: ["Smart Charging", "Energy Monitoring", "Solar Integration"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions designed to enhance every aspect of your Tesla experience. 
            From performance to comfort, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white/70 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                    Learn More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
