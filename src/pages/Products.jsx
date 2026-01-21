import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import ProductCard from '../components/products/ProductCard';
import ComparisonTool from '../components/products/ComparisonTool';
import ProductFilters from '../components/products/ProductFilters';
import { Package, FileText, X, CheckCircle2, Building2, Droplets, Sun, Wrench, Shield, Clock, Thermometer, ChevronRight, Play, ArrowRight, Star, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, categories } from '@/data/products';

const applicationGuides = [
  // === COMMERCIAL GUIDES ===
  {
    id: 'curtainwall',
    title: 'Curtain Wall Sealing',
    subtitle: 'Professional Structural Glazing',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    category: 'Commercial',
    duration: '8 min',
    difficulty: 'Advanced',
    products: ['GAUDON 9009', 'GAUDON 20000', 'GAUDON 10000'],
    icon: Building2,
    color: 'from-gray-800 to-black',
    description: 'Complete guide to structural and weatherproof sealing for glass curtain walls in commercial buildings.',
    steps: [
      { title: 'Surface Preparation', desc: 'Clean all surfaces with approved solvent. Ensure surfaces are dry and free of contaminants.', image: 'https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?w=600&q=80' },
      { title: 'Primer Application', desc: 'Apply primer if required based on substrate compatibility testing.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Joint Design', desc: 'Ensure proper joint dimensions (width:depth ratio of 2:1 for movement joints).', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80' },
      { title: 'Backer Rod Installation', desc: 'Install closed-cell backer rod at appropriate depth for joint design.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80' },
      { title: 'Sealant Application', desc: 'Apply sealant using proper equipment. Tool immediately for optimal finish.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Quality Inspection', desc: 'Check for proper adhesion, dimensions, and surface finish. Allow full cure before testing.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' }
    ]
  },
  {
    id: 'expansion-joints',
    title: 'Expansion Joint Sealing',
    subtitle: 'Movement Accommodation',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    category: 'Commercial',
    duration: '10 min',
    difficulty: 'Advanced',
    products: ['GAUDON 10000', 'GAUDON 999', 'GAUDON 777'],
    icon: Building2,
    color: 'from-gray-800 to-black',
    description: 'Seal expansion joints in concrete, metal panels, and precast elements to accommodate building movement.',
    steps: [
      { title: 'Joint Assessment', desc: 'Measure joint width, depth, and expected movement range.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80' },
      { title: 'Clean Joint Surfaces', desc: 'Remove debris, old sealant, and contaminants from joint faces.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Install Backer Rod', desc: 'Use closed-cell foam rod at 1/2 joint width depth for proper sealant geometry.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80' },
      { title: 'Apply Sealant', desc: 'Fill joint completely, ensuring contact with both sides.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Tool the Joint', desc: 'Create concave profile for optimal performance and aesthetics.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80' }
    ]
  },
  {
    id: 'metal-panel',
    title: 'Metal Panel Cladding',
    subtitle: 'Aluminum & Steel Facades',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    category: 'Commercial',
    duration: '7 min',
    difficulty: 'Intermediate',
    products: ['GAUDON 10000', 'GAUDON 999', 'GAUDON 7880'],
    icon: Building2,
    color: 'from-gray-800 to-black',
    description: 'Weatherproof sealing for aluminum composite panels, steel cladding, and metal facade systems.',
    steps: [
      { title: 'Panel Preparation', desc: 'Clean panel edges and ensure proper alignment with adjacent panels.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80' },
      { title: 'Apply Masking', desc: 'Tape edges for clean sealant lines on exposed joints.', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80' },
      { title: 'Sealant Application', desc: 'Apply weatherproof sealant in continuous bead along joints.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Tooling', desc: 'Smooth sealant for professional finish and proper adhesion.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Remove Masking', desc: 'Carefully remove tape before sealant skins over.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80' }
    ]
  },
  {
    id: 'skylight',
    title: 'Skylight Installation',
    subtitle: 'Overhead Glazing Systems',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    category: 'Commercial',
    duration: '9 min',
    difficulty: 'Advanced',
    products: ['GAUDON 9009', 'GAUDON 20000', 'GAUDON 10000'],
    icon: Building2,
    color: 'from-gray-800 to-black',
    description: 'Structural and weatherproof sealing for commercial skylights, atriums, and overhead glazing.',
    steps: [
      { title: 'Frame Preparation', desc: 'Ensure skylight frame is level, clean, and properly anchored.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
      { title: 'Apply Structural Sealant', desc: 'Use two-component structural silicone for glass-to-frame bonding.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Set Glass Panel', desc: 'Position glazing unit with proper edge clearances.', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80' },
      { title: 'Weather Seal', desc: 'Apply perimeter weatherproofing sealant around all edges.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Water Test', desc: 'After full cure, perform water spray test for leak detection.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' }
    ]
  },

  // === RESIDENTIAL GUIDES ===
  {
    id: 'window',
    title: 'Window & Door Sealing',
    subtitle: 'Weatherproofing Made Easy',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    category: 'Residential',
    duration: '5 min',
    difficulty: 'Beginner',
    products: ['GAUDON 999', 'GAUDON 777', 'GAUDON 7800'],
    icon: Sun,
    color: 'from-gray-700 to-gray-900',
    description: 'Step-by-step weatherproofing for residential and commercial windows and doors.',
    steps: [
      { title: 'Remove Old Sealant', desc: 'Use a utility knife to carefully remove old, cracked sealant.', image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80' },
      { title: 'Clean the Surface', desc: 'Wipe with isopropyl alcohol for best adhesion.', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80' },
      { title: 'Apply Masking Tape', desc: 'Tape along edges for clean, professional lines.', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80' },
      { title: 'Cut the Nozzle', desc: 'Cut at 45° angle to match bead size needed.', image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80' },
      { title: 'Apply Sealant', desc: 'Squeeze with steady pressure for consistent bead.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Tool & Remove Tape', desc: 'Smooth with wet finger, remove tape before skinning.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' }
    ]
  },
  {
    id: 'bathroom',
    title: 'Bathroom & Kitchen Caulking',
    subtitle: 'Waterproof Wet Areas',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
    category: 'Residential',
    duration: '4 min',
    difficulty: 'Beginner',
    products: ['GAUDON 9900', 'GAUDON 9000', 'GAUDON 8000'],
    icon: Sun,
    color: 'from-gray-700 to-gray-900',
    description: 'Seal around bathtubs, showers, sinks, and countertops to prevent water damage and mold.',
    steps: [
      { title: 'Remove Old Caulk', desc: 'Scrape away all old, moldy, or cracked caulk completely.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80' },
      { title: 'Clean & Dry', desc: 'Use bathroom cleaner, then dry thoroughly. No moisture!', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80' },
      { title: 'Apply Masking Tape', desc: 'Tape both sides of joint for clean, straight lines.', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80' },
      { title: 'Apply Silicone', desc: 'Use 100% silicone for waterproof seal. Steady bead.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Smooth & Finish', desc: 'Use wet finger or tool. Remove tape immediately.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80' }
    ]
  },
  {
    id: 'exterior-siding',
    title: 'Exterior Siding & Trim',
    subtitle: 'Protect Your Home',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
    category: 'Residential',
    duration: '6 min',
    difficulty: 'Intermediate',
    products: ['GAUDON 999', 'GAUDON 777', 'GAUDON 7600'],
    icon: Sun,
    color: 'from-gray-700 to-gray-900',
    description: 'Seal gaps in exterior siding, trim boards, and fascia to prevent water infiltration and air leaks.',
    steps: [
      { title: 'Inspect Exterior', desc: 'Check for gaps, cracks, and deteriorated caulk around trim and siding.', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80' },
      { title: 'Prepare Surfaces', desc: 'Clean with brush, remove loose paint and old caulk.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Choose Right Product', desc: 'Use weatherproof neutral cure silicone for exterior applications.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Apply Sealant', desc: 'Fill gaps completely, ensuring good contact with both surfaces.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Tool for Finish', desc: 'Smooth sealant and allow 24-48 hours cure before painting if needed.', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80' }
    ]
  },
  {
    id: 'baseboard-trim',
    title: 'Baseboard & Interior Trim',
    subtitle: 'Professional Interior Finish',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
    category: 'Residential',
    duration: '4 min',
    difficulty: 'Beginner',
    products: ['GAUDON 7300', 'GAUDON 7200', 'GAUDON 9700-A'],
    icon: Sun,
    color: 'from-gray-700 to-gray-900',
    description: 'Fill gaps between baseboards, crown molding, and walls for a seamless painted finish.',
    steps: [
      { title: 'Check Gaps', desc: 'Identify gaps between trim and walls that need filling.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80' },
      { title: 'Clean Surface', desc: 'Wipe away dust and debris from gap areas.', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80' },
      { title: 'Apply Caulk', desc: 'Use paintable caulk or nail-free adhesive for interior trim.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Smooth with Finger', desc: 'Wet finger and smooth caulk into gap for invisible joint.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Paint After Cure', desc: 'Wait for full cure, then paint over for seamless finish.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80' }
    ]
  },

  // === SPECIALTY GUIDES ===
  {
    id: 'aquarium',
    title: 'Aquarium Assembly',
    subtitle: 'Fish-Safe Glass Bonding',
    image: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=1200&q=80',
    category: 'Specialty',
    duration: '6 min',
    difficulty: 'Intermediate',
    products: ['GAUDON 9900', 'GAUDON 9000', 'GAUDON 8000'],
    icon: Droplets,
    color: 'from-gray-600 to-gray-800',
    description: 'Build or repair aquariums with 100% silicone that\'s safe for aquatic life.',
    steps: [
      { title: 'Gather Materials', desc: 'Glass panels, 100% silicone (GAUDON acidic), masking tape, clamps.', image: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600&q=80' },
      { title: 'Clean Glass Thoroughly', desc: 'Use isopropyl alcohol on all bonding surfaces.', image: 'https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=600&q=80' },
      { title: 'Apply Silicone Bead', desc: 'Continuous bead along edges - no gaps allowed.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Assemble Panels', desc: 'Join glass while silicone is fresh, use clamps.', image: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600&q=80' },
      { title: 'Apply External Bead', desc: 'Seal all external seams for extra strength.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Cure 7 Days', desc: 'Wait full week before adding water and fish.', image: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=600&q=80' }
    ]
  },
  {
    id: 'swimming-pool',
    title: 'Swimming Pool & Spa',
    subtitle: 'Pool Tile & Coping Seals',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80',
    category: 'Specialty',
    duration: '8 min',
    difficulty: 'Intermediate',
    products: ['GAUDON 9900', 'GAUDON 9000', 'GAUDON 999'],
    icon: Droplets,
    color: 'from-gray-600 to-gray-800',
    description: 'Seal expansion joints, tile edges, and coping stones in pools and spas for watertight finish.',
    steps: [
      { title: 'Drain Below Joint', desc: 'Lower water level below the joint to be sealed.', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80' },
      { title: 'Remove Old Sealant', desc: 'Completely remove deteriorated or failed sealant.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Clean & Dry Joint', desc: 'Use pool-safe cleaner. Joint must be completely dry.', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80' },
      { title: 'Apply Pool-Safe Silicone', desc: 'Use 100% silicone rated for underwater/pool use.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Cure Before Filling', desc: 'Allow 7 days cure before refilling pool to joint level.', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80' }
    ]
  },
  {
    id: 'greenhouse',
    title: 'Greenhouse Construction',
    subtitle: 'Glass Panel Sealing',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80',
    category: 'Specialty',
    duration: '7 min',
    difficulty: 'Intermediate',
    products: ['GAUDON 8000', 'GAUDON 8800', 'GAUDON 777'],
    icon: Droplets,
    color: 'from-gray-600 to-gray-800',
    description: 'Seal glass or polycarbonate panels in greenhouse frames for weathertight growing environment.',
    steps: [
      { title: 'Prepare Frame', desc: 'Ensure greenhouse frame is clean and properly aligned.', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80' },
      { title: 'Dry Fit Panels', desc: 'Check panel fit before applying sealant.', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80' },
      { title: 'Apply Sealant to Frame', desc: 'Bead of silicone along frame where panel will sit.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Set Panel', desc: 'Press panel into sealant bed, ensuring full contact.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Seal Exterior', desc: 'Apply weatherproof bead around panel perimeter.', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80' }
    ]
  },
  {
    id: 'mirror-install',
    title: 'Mirror Installation',
    subtitle: 'Safe Mirror Mounting',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80',
    category: 'Specialty',
    duration: '5 min',
    difficulty: 'Beginner',
    products: ['GAUDON 9700-A', 'GAUDON 7300', 'GAUDON 8000'],
    icon: Droplets,
    color: 'from-gray-600 to-gray-800',
    description: 'Mount mirrors securely using mirror-safe adhesive that won\'t damage reflective backing.',
    steps: [
      { title: 'Check Wall Surface', desc: 'Wall must be flat, clean, and dry. Prime if needed.', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80' },
      { title: 'Use Mirror-Safe Adhesive', desc: 'IMPORTANT: Use neutral cure or mirror-safe product only!', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Apply Adhesive Pattern', desc: 'Vertical strips or S-pattern for even weight distribution.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Position Mirror', desc: 'Press firmly against wall. Use temporary supports if large.', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80' },
      { title: 'Allow Full Cure', desc: '24-48 hours before removing supports.', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80' }
    ]
  },

  // === INDUSTRIAL GUIDES ===
  {
    id: 'industrial',
    title: 'Electronics & High-Temp',
    subtitle: 'RTV Silicone Applications',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&q=80',
    category: 'Industrial',
    duration: '7 min',
    difficulty: 'Advanced',
    products: ['GAUDON 7900'],
    icon: Wrench,
    color: 'from-orange-600 to-red-700',
    description: 'Specialty RTV silicone for electronics, automotive, and high-heat environments.',
    steps: [
      { title: 'Assess Application', desc: 'Determine temperature range and chemical exposure.', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80' },
      { title: 'Surface Prep', desc: 'Degrease with appropriate solvent for the substrate.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Apply GAUDON 7900', desc: 'Use for -30°C to +180°C continuous service.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
      { title: 'Encapsulation', desc: 'For electronics, ensure complete coverage.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
      { title: 'Cure Time', desc: '24 hours skin cure, 7 days full strength.', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80' },
      { title: 'Test Performance', desc: 'Verify seal integrity before deployment.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' }
    ]
  },
  {
    id: 'hvac-duct',
    title: 'HVAC Duct Sealing',
    subtitle: 'Air Handling Systems',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80',
    category: 'Industrial',
    duration: '6 min',
    difficulty: 'Intermediate',
    products: ['GAUDON 7900', 'GAUDON 999', 'GAUDON 777'],
    icon: Wrench,
    color: 'from-orange-600 to-red-700',
    description: 'Seal HVAC ducts, connections, and penetrations to prevent air leakage and improve efficiency.',
    steps: [
      { title: 'Access Ductwork', desc: 'Identify joints, connections, and penetrations needing sealing.', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80' },
      { title: 'Clean Surfaces', desc: 'Remove dust, oil, and debris from metal surfaces.', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80' },
      { title: 'Apply Duct Sealant', desc: 'Use temperature-rated silicone for duct connections.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Seal All Joints', desc: 'Cover seams, corners, and connection points completely.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Test for Leaks', desc: 'Run system and check for air leaks at sealed areas.', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80' }
    ]
  },
  {
    id: 'automotive',
    title: 'Automotive Assembly',
    subtitle: 'Gaskets & Seals',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
    category: 'Industrial',
    duration: '8 min',
    difficulty: 'Advanced',
    products: ['GAUDON 7900'],
    icon: Wrench,
    color: 'from-orange-600 to-red-700',
    description: 'Form-in-place gaskets and seals for automotive engines, transmissions, and assemblies.',
    steps: [
      { title: 'Remove Old Gasket', desc: 'Scrape off all old gasket material from mating surfaces.', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80' },
      { title: 'Clean Surfaces', desc: 'Use brake cleaner or acetone to remove all oil and residue.', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80' },
      { title: 'Apply RTV Silicone', desc: 'Continuous 3mm bead around bolt holes and surface perimeter.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Assemble Quickly', desc: 'Join parts within 10 minutes of application.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Torque Bolts', desc: 'Tighten to spec. Allow 24 hours before fluid contact.', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80' }
    ]
  },
  {
    id: 'solar-panel',
    title: 'Solar Panel Installation',
    subtitle: 'Photovoltaic Sealing',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
    category: 'Industrial',
    duration: '7 min',
    difficulty: 'Intermediate',
    products: ['GAUDON 7900', 'GAUDON 10000', 'GAUDON 999'],
    icon: Wrench,
    color: 'from-orange-600 to-red-700',
    description: 'Seal solar panel frames, junction boxes, and roof penetrations for weatherproof installation.',
    steps: [
      { title: 'Mount Frame', desc: 'Secure panel mounting frame to roof structure.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80' },
      { title: 'Seal Roof Penetrations', desc: 'Apply weatherproof silicone around all mounting bolts.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
      { title: 'Junction Box Sealing', desc: 'Seal wire entries and junction box covers with RTV silicone.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
      { title: 'Panel Edge Sealing', desc: 'Optional: seal panel-to-frame gaps for extra protection.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      { title: 'Final Inspection', desc: 'Check all seals before system commissioning.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80' }
    ]
  }
];

const guideCategories = ['All', 'Commercial', 'Residential', 'Specialty', 'Industrial'];

export default function Products() {
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    type: 'all',
    application: 'all'
  });
  const [comparisonIds, setComparisonIds] = useState([]);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [guideFilter, setGuideFilter] = useState('All');
  const [activeStep, setActiveStep] = useState(0);

  const filteredGuides = guideFilter === 'All'
    ? applicationGuides
    : applicationGuides.filter(g => g.category === guideFilter);

  const toggleComparison = (productId) => {
    setComparisonIds(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : prev.length < 3 ? [...prev, productId] : prev
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = !filters.search ||
      product.name?.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.model?.toLowerCase().includes(filters.search.toLowerCase());

    const matchesCategory = filters.category === 'all' || product.category === filters.category;
    const matchesType = filters.type === 'all' || product.type === filters.type;
    const matchesApplication = filters.application === 'all' ||
      product.applications?.some(app => app.toLowerCase().includes(filters.application.toLowerCase()));

    return matchesSearch && matchesCategory && matchesType && matchesApplication;
  });

  const currentCategory = categories.find(c => c.id === filters.category);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative bg-black pt-32 pb-16 border-b border-neutral-800">

        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-white mb-4">
              Professional Silicone Sealants
            </h1>
            <p className="text-xl text-neutral-400 mb-8">
              Engineered for excellence across all construction applications
            </p>
            <div className="flex gap-4">
              <Link to={createPageUrl('Catalog')}>
                <Button className="bg-black hover:bg-neutral-800 text-white px-6 h-12">
                  <FileText className="w-5 h-5 mr-2" />
                  Download Full Catalog
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-white hover:bg-slate-50 text-black border-2 border-black px-6 h-12 font-semibold">
                  <Package className="w-5 h-5 mr-2" />
                  Request Sample
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Products section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <ProductFilters
            filters={filters}
            onFilterChange={setFilters}
            productCount={filteredProducts.length}
          />

          {filteredProducts.length === 0 ? (
            <div className="text-center py-32">
              <Package className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">No products found</h3>
              <p className="text-neutral-500">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                  isSelected={comparisonIds.includes(product.id)}
                  onToggleCompare={() => toggleComparison(product.id)}
                  canAddMore={comparisonIds.length < 3}
                />
              ))}
            </div>
          )}
        </div>
      </section>



      <ComparisonTool 
        products={products}
        selectedIds={comparisonIds}
        onToggle={toggleComparison}
        onClear={() => setComparisonIds([])}
      />

      {/* How to Use GAUDON Sealants - Professional Section with Apple-style Scroll */}
      <section className="py-24 bg-black relative overflow-hidden" style={{ overflowX: 'clip' }}>
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 pattern-grid opacity-40 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-black/10 border border-black/20 rounded-full text-white font-medium text-sm mb-4">
                APPLICATION GUIDES
              </span>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How to Use GAUDON Sealants
              </h3>
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                Expert guides for professional results. Select your application type below.
              </p>
            </motion.div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {guideCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setGuideFilter(cat)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  guideFilter === cat
                    ? 'bg-black text-white shadow-lg shadow-white/15'
                    : 'bg-neutral-900 text-neutral-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Guide Cards Grid - Apple-style Scroll Animation */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {filteredGuides.map((guide, idx) => (
              <motion.button
                key={guide.id}
                initial={{
                  opacity: 0,
                  x: idx % 2 === 0 ? -150 : 150,
                  scale: 0.8
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1
                }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: idx * 0.05
                }}
                onClick={() => { setSelectedGuide(guide.id); setActiveStep(0); }}
                className="group relative h-80 rounded-2xl overflow-hidden text-left"
              >
                  {/* Background Image */}
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Default: Light gradient at bottom for title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-300" />

                  {/* Hover: Full overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${guide.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* DEFAULT STATE: Just title at bottom */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-300">
                    <h4 className="text-2xl font-bold text-white">{guide.title}</h4>
                    <p className="text-white/70 text-sm">{guide.subtitle}</p>
                  </div>

                  {/* HOVER STATE: Full content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Top - Category & Duration */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        {guide.category}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-white/80 text-xs">
                          <Clock className="w-3.5 h-3.5" />
                          {guide.duration}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                          guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-red-500/20 text-red-300'
                        }`}>
                          {guide.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Bottom - Full Details */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <guide.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{guide.title}</h4>
                          <p className="text-white/70 text-sm">{guide.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-white/60 text-sm mb-4 line-clamp-2">{guide.description}</p>

                      {/* Products Used */}
                      <div className="flex items-center gap-2 mb-4">
                        {guide.products.slice(0, 3).map((p) => (
                          <span key={p} className="px-2 py-1 bg-white/10 rounded text-white/80 text-xs">{p}</span>
                        ))}
                      </div>

                      {/* View Guide Button */}
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                        <span>View Step-by-Step Guide</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.button>
            ))}
          </div>

        </div>
      </section>

      {/* Professional Guide Modal */}
      <AnimatePresence>
        {selectedGuide && (() => {
          const guide = applicationGuides.find(g => g.id === selectedGuide);
          if (!guide) return null;
          const IconComponent = guide.icon;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedGuide(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-black rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-neutral-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header with Hero Image */}
                <div className="relative h-48 md:h-56">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${guide.color} opacity-80`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedGuide(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>

                  {/* Header Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-white/20 rounded text-white/90 text-xs font-medium">{guide.category}</span>
                          <span className="px-2 py-0.5 bg-white/20 rounded text-white/90 text-xs">{guide.duration} read</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            guide.difficulty === 'Beginner' ? 'bg-green-500/30 text-green-200' :
                            guide.difficulty === 'Intermediate' ? 'bg-yellow-500/30 text-yellow-200' :
                            'bg-red-500/30 text-red-200'
                          }`}>{guide.difficulty}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{guide.title}</h2>
                        <p className="text-white/70 text-sm mt-1">{guide.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-14rem)]">
                  {/* Description & Products */}
                  <div className="mb-8">
                    <p className="text-neutral-300 text-lg leading-relaxed mb-4">{guide.description}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-neutral-500 text-sm">Recommended:</span>
                      {guide.products.map((p) => (
                        <span key={p} className="px-3 py-1 bg-black/10 border border-black/30 rounded-full text-white text-sm font-medium">{p}</span>
                      ))}
                    </div>
                  </div>

                  {/* Step Progress */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-bold text-lg">Step-by-Step Guide</h3>
                      <span className="text-neutral-400 text-sm">Step {activeStep + 1} of {guide.steps.length}</span>
                    </div>
                    <div className="flex gap-1">
                      {guide.steps.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveStep(idx)}
                          className={`flex-1 h-1.5 rounded-full transition-all ${
                            idx === activeStep ? 'bg-black' :
                            idx < activeStep ? 'bg-black/50' : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Active Step Display */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid md:grid-cols-2 gap-6 mb-6"
                    >
                      {/* Step Image */}
                      <div className="relative h-48 md:h-64 rounded-xl overflow-hidden bg-neutral-900">
                        <img
                          src={guide.steps[activeStep].image}
                          alt={guide.steps[activeStep].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold">{activeStep + 1}</span>
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex flex-col justify-center">
                        <h4 className="text-xl font-bold text-white mb-3">{guide.steps[activeStep].title}</h4>
                        <p className="text-neutral-300 leading-relaxed mb-4">{guide.steps[activeStep].desc}</p>

                        {/* Navigation */}
                        <div className="flex gap-3 mt-auto">
                          <button
                            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                            disabled={activeStep === 0}
                            className="flex-1 px-4 py-3 bg-neutral-900 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                          >
                            <ChevronRight className="w-4 h-4 rotate-180" />
                            Previous
                          </button>
                          <button
                            onClick={() => setActiveStep(prev => Math.min(guide.steps.length - 1, prev + 1))}
                            disabled={activeStep === guide.steps.length - 1}
                            className="flex-1 px-4 py-3 bg-black hover:bg-neutral-800 disabled:bg-green-500 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                          >
                            {activeStep === guide.steps.length - 1 ? (
                              <>
                                <CheckCircle2 className="w-4 h-4" />
                                Complete
                              </>
                            ) : (
                              <>
                                Next
                                <ChevronRight className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* All Steps Overview */}
                  <div className="border-t border-neutral-800 pt-6">
                    <h4 className="text-white font-semibold mb-4">All Steps Overview</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {guide.steps.map((step, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveStep(idx)}
                          className={`p-3 rounded-xl text-left transition-all ${
                            idx === activeStep
                              ? 'bg-black/20 border border-black/50'
                              : 'bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              idx === activeStep ? 'bg-black text-white' :
                              idx < activeStep ? 'bg-black/50 text-white' : 'bg-slate-700 text-neutral-400'
                            }`}>{idx + 1}</span>
                            {idx < activeStep && <CheckCircle2 className="w-4 h-4 text-white" />}
                          </div>
                          <p className={`text-sm font-medium ${idx === activeStep ? 'text-white' : 'text-neutral-400'}`}>{step.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Warning for Aquarium */}
                  {guide.id === 'aquarium' && (
                    <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-amber-400 font-semibold mb-1">Important Safety Note</h5>
                        <p className="text-amber-200/80 text-sm">Only use 100% silicone sealants without additives. GAUDON acidic glass sealants are safe for aquarium use once fully cured. Allow 7 days cure time before adding water.</p>
                      </div>
                    </div>
                  )}

                  {/* Temperature Info for Industrial */}
                  {guide.id === 'industrial' && (
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                        <h5 className="text-orange-400 font-semibold mb-2">Temperature Range</h5>
                        <p className="text-3xl font-bold text-orange-300">-30°C to +180°C</p>
                        <p className="text-orange-200/60 text-sm mt-1">Continuous service temperature</p>
                      </div>
                      <div className="p-4 bg-neutral-900 rounded-xl">
                        <h5 className="text-white font-semibold mb-2">Key Properties</h5>
                        <div className="grid grid-cols-2 gap-1 text-sm text-neutral-300">
                          <span>• Electrical insulation</span>
                          <span>• UV resistant</span>
                          <span>• Chemical resistant</span>
                          <span>• Vibration dampening</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
      </div>
      );
      }