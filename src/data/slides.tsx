import React from 'react';
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
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    component: <HomeSlide />
  },
  {
    id: 'about',
    title: 'About',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    component: <AboutSlide />
  },
  {
    id: 'skills',
    title: 'Skills',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    component: <SkillsSlide />
  },
  {
    id: 'projects',
    title: 'Projects',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    component: <ProjectsSlide />
  },
  {
    id: 'contact',
    title: 'Contact',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    component: <ContactSlide />
  }
];