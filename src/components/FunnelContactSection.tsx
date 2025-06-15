
import React from "react";
import ContactSection from "@/components/ContactSection";

// This wrapper is kept for structure/future specificity, but for now, just render ContactSection.
// Remove all funnel-specific props for compatibility.
const FunnelContactSection = () => (
  <ContactSection />
);

export default FunnelContactSection;
