import React from 'react';
import { Home, User, BarChart3, FolderOpen, Mail } from 'lucide-react';
import { SlideData } from '../types/slide';
import HomeSlide from '../components/slides/HomeSlide';
import AboutSlide from '../components/slides/AboutSlide';
import SkillsSlide from '../components/slides/SkillsSlide';
import ProjectsSlide from '../components/slides/ProjectsSlide';
import ContactSlide from '../components/slides/ContactSlide';

export const slides: SlideData[] = [
  {
    id: 'home',
    title: 'Home',
    icon: <Home className="w-full h-full text-blue-600" />,
    component: <HomeSlide />
  },
  {
    id: 'about',
    title: 'About',
    icon: <User className="w-full h-full text-blue-600" />,
    component: <AboutSlide />
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: <BarChart3 className="w-full h-full text-blue-600" />,
    component: <SkillsSlide />
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: <FolderOpen className="w-full h-full text-blue-600" />,
    component: <ProjectsSlide />
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: <Mail className="w-full h-full text-blue-600" />,
    component: <ContactSlide />
  }
];