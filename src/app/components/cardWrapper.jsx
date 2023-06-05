import React from "react";
import Card from "./card";
import dog from "../../../public/images/dog.png";
import rabbit from "../../../public/images/rabbit.png";
import elephant from "../../../public/images/elephant.png";

export default function CardWrapper() {
  return (
    <section>
      <div className="lg:flex gap-10 lg:flex-wrap">
        <Card
          imageSrc={dog}
          altText="dog"
          title="Bringing Joyful Moments"
          description="We create a nurturing environment where every animal experiences love, care, and happiness."
          highlights={[
            "Enrichment Programs",
            "Reinforcement Training",
            "Socialization Opportunities",
          ]}
        />
        <Card
          imageSrc={rabbit}
          altText="rabbit"
          title="Quality Nutrition and Care"
          description="Ensuring optimal health and well-being through proper nutrition and attentive care."
          highlights={[
            "Training for Positive Behavior",
            "Promoting education",
            "Raising awareness",
            "Building connections",
          ]}
        />

        <Card
          imageSrc={elephant}
          altText="elephant"
          title="Rescuing and Rehabilitating"
          description="Saving and rehabilitating animals in need, giving them a second chance at life."
          highlights={[
            "Community Education and Outreach",
            "Promoting awareness",
            "Organizing events",
            "Connecting with people",
          ]}
        />
      </div>
    </section>
  );
}
