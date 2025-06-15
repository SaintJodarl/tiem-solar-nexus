
import React from "react";
import ContactSection from "@/components/ContactSection";

type FunnelContactSectionProps = {
  redirectToThankYou: string;
  ctaText: string;
  ctaColor: string;
  accentColor?: string;
  hideTitle?: boolean;
};

const FunnelContactSection = ({
  redirectToThankYou,
  ctaText,
  ctaColor,
  accentColor,
  hideTitle = false,
}: FunnelContactSectionProps) => (
  <div>
    <ContactSection
      // These props are the real supported ones as of your project's ContactSection implementation.
      redirectToThankYou={redirectToThankYou}
      ctaText={ctaText}
      ctaColor={ctaColor}
      accentColor={accentColor}
      hideTitle={hideTitle}
    />
  </div>
);

export default FunnelContactSection;
