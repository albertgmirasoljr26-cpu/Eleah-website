import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  image?: string;
  details?: string[];
  icon?: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services: Service[] = [
    {
      id: 1,
      title: 'Flooring Business',
      description: 'WE ARE BUSINESS IN DISTRIBUTION OF TIMBER FLOORING, GIVE CLIENTS A COMPETITIVELY SOURCING AND BE ENGAGING WITH CUSTOMERS ALL AROUND TIMBER FLOORING, THEREFORE ALSO DESIGNING A RESIDENTIAL WORK ACCORDING.',
      image: 'assets/images/flooring.jpg',
    },
    {
      id: 2,
      title: 'We Supply',
      description: 'WE SUPPLY TO PROJECT SUPPLIERS, LABOUR DEALERS, INTERIOR DESIGNERS CONTRACTORS & HOME MAKERS. WE HAVE TO SELL APPLICABLE AND COMMIT TO DISTRIBUTION CHAIN.',
      image: 'assets/images/supply.jpg',
    },
    {
      id: 3,
      title: 'Consult & Site Management',
      description: 'OUR SERVICES IN SITE MANAGEMENT & INTERIOR CONSULTING, OUR SITE SERVICES INCLUDE CONSULTING & TRAINING INTERIOR DESIGN & BUILT DEVELOPMENT.',
      image: 'assets/images/consult.jpg',
      details: ['SITE CONSULTING', 'INVENTORY PLAN', 'IT AND TECH BUILD DESIGN'],
    },
    {
      id: 4,
      title: 'Install',
      description: 'ALL FORM OF INSTALLATION INCLUDING FURNISHING, SITE INSTALLATION FITTING & RELATED ARCHITECTURAL FLOATING FLOORING.',
      image: 'assets/images/install.jpg',
    },
    {
      id: 5,
      title: 'Design & Build',
      description: 'OUR BUSINESS PLAN ELEMENTS BY AN ARCHITECTURAL DESIGNED INTERIOR, AN ACCESSIBLE SOLUTION INTERIOR BUILD DEVELOPMENT.',
      image: 'assets/images/design-build.jpg',
      details: ['BUILDING', 'CARPENTRY PLANS', 'IT AND TECH BUILD DESIGN'],
    },
    {
      id: 6,
      title: 'Trading & PMP',
      description: 'WE ARE DOING TRADE WORK ACCOMPLISHED LEVELS, INTERIOR & RETAIL SET SERVICES AT TRADES AND MORE ADVISORY SET DEVELOPMENT & RETAIL INTERIOR MODIFICATION.',
      image: 'assets/images/trading.jpg',
    },
  ];
}
