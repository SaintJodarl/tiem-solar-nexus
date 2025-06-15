
import React from "react";
import Testimonials from "@/components/Testimonials";

type FunnelTestimonialsProps = {
  limit?: number;
  animateOnScroll?: boolean;
  cardColor?: string;
  textColor?: string;
  accentColor?: string;
  brandRed?: string;
};

const FunnelTestimonials: React.FC<FunnelTestimonialsProps> = (props) => (
  // The Testimonials component displays all testimonials but can also limit or style them for the funnel here.
  <Testimonials {...props} />
);

export default FunnelTestimonials;
