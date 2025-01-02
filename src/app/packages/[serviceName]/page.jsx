"use client";

import { useParams } from "next/navigation";
import ServiceBanner from "../../../components/banners/ServiceBanner";
import AboutAndForm from "../../../components/servicePageComp/AboutAndForm";
import Discuss from "../../../components/servicePageComp/Discuss";
import ToolsWeUse from "../../../components/toolsweuse/ToolsWeUse";
import Footer from "../../../components/Footer";
import ClientReview from "../../../components/clientReview/ClientReview";
import OurPartners from "../../../components/ourPartners/OurPartners";
import Reviews from "../../../components/reviews/Reviews";
import FaqSection from "../../../components/Faqs/FaqSection";
import HomeBlogs from "../../../components/home/HomeBlogs";

const serviceData = {
  "website-portfolio": {
    title: "website-portfolio",
    description: "This is the digital marketing service page.",
    discuss: {
      title: "Ready to Discuss Your Digital Marketing",
      flipCards: [
        {
          image: "/images/ad.jpg",
          serviceTitle: "SEO Optimization",
          serviceContent: "SEO Specialist",
        },
        {
          image: "/images/ad.jpg",
          serviceTitle: "Content Marketing",
          serviceContent: "Content Creator",
        },
        {
          image: "/images/ad.jpg",
          serviceTitle: "Social Media Management",
          serviceContent: "Social Media Manager",
        },
      ],
    },
    toolsweuse: {
      content:
        "At VD Infotech, we leverage the best digital marketing tools...",
      images: [
        { imageSrc: "/images/home/tools/b.png", alt: "tool image" },
        { imageSrc: "/images/home/tools/s.png", alt: "tool image" },
        { imageSrc: "/images/home/tools/corel.png", alt: "tool image" },
      ],
    },
  },
  "application-portfolio": {
    title: "Performance Marketing",
    description: "This is the Performance Marketing service page.",
    discuss: {
      title: "Let’s Discuss Your Performance Marketing",
      flipCards: [
        {
          image: "/images/client-img.jpg",
          serviceTitle: "Website Design",
          serviceContent: "Designer",
        },
        {
          image: "/images/client-img.jpg",
          serviceTitle: "Website Development",
          serviceContent: "Developer",
        },
      ],
    },
    toolsweuse: {
      content:
        "At VD Infotech, we leverage tools for design and development...",
      images: [
        { imageSrc: "/images/home/tools/pr.png", alt: "tool image" },
        { imageSrc: "/images/home/tools/ai.png", alt: "tool image" },
      ],
    },
  },
  "software-portfolio": {
    title: "Design & Development",
    description: "This is the Design & Development service page.",
    discuss: {
      title: "Ready to Discuss Your Design & Development",
      flipCards: [
        {
          image: "/images/dm.png",
          serviceTitle: "Custom Software",
          serviceContent: "Developer",
        },
        {
          image: "/images/pm.png",
          serviceTitle: "System Integration",
          serviceContent: "Engineer",
        },
      ],
    },
    toolsweuse: {
      content: "We use cutting-edge tools for software development...",
      images: [
        { imageSrc: "/images/home/tools/us.png", alt: "tool image" },
        { imageSrc: "/images/home/tools/gt.png", alt: "tool image" },
      ],
    },
  },
  "graphics-portfolio": {
    title: "Graphic Designing",
    description: "This is the Graphic Designing service page.",
    discuss: {
      title: "Let’s Discuss Your Graphic Designing",
      flipCards: [
        {
          image: "/images/client-img.jpg",
          serviceTitle: "Website Design",
          serviceContent: "Designer",
        },
        {
          image: "/images/client-img.jpg",
          serviceTitle: "Website Development",
          serviceContent: "Developer",
        },
      ],
    },
    toolsweuse: {
      content:
        "At VD Infotech, we leverage tools for design and development...",
      images: [
        { imageSrc: "/images/home/tools/pr.png", alt: "tool image" },
        { imageSrc: "/images/home/tools/ai.png", alt: "tool image" },
      ],
    },
  },
  "seo-portfolio": {
    title: "Video Production",
    description: "This is the Video Production service page.",
    discuss: {
      title: "Let’s Discuss Your Video Production",
      flipCards: [
        {
          image: "/images/client-img.jpg",
          serviceTitle: "Website Design",
          serviceContent: "Designer",
        },
        {
          image: "/images/client-img.jpg",
          serviceTitle: "Website Development",
          serviceContent: "Developer",
        },
      ],
    },
    toolsweuse: {
      content:
        "At VD Infotech, we leverage tools for design and development...",
      images: [
        { imageSrc: "/images/home/tools/pr.png", alt: "tool image" },
        { imageSrc: "/images/home/tools/ai.png", alt: "tool image" },
      ],
    },
  },
  "smo-portfolio": {
    title: "Brand Promotions",
    description: "This is the Brand Promotions service page.",
    discuss: {
      title: "Let’s Discuss Your Brand Promotions",
      flipCards: [
        {
          image: "/images/client-img.jpg",
          serviceTitle: "Website Design",
          serviceContent: "Designer",
        },
        {
          image: "/images/client-img.jpg",
          serviceTitle: "Website Development",
          serviceContent: "Developer",
        },
      ],
    },
    toolsweuse: {
      content:
        "At VD Infotech, we leverage tools for design and development...",
      images: [
        { imageSrc: "/images/home/tools/pr.png", alt: "tool image" },
        { imageSrc: "/images/home/tools/ai.png", alt: "tool image" },
      ],
    },
  },
  "performance-portfolio": {
    title: "Brand Promotions",
    description: "This is the Brand Promotions service page.",
    discuss: {
      title: "Let’s Discuss Your Brand Promotions",
      flipCards: [
        {
          image: "/images/client-img.jpg",
          serviceTitle: "Website Design",
          serviceContent: "Designer",
        },
        {
          image: "/images/client-img.jpg",
          serviceTitle: "Website Development",
          serviceContent: "Developer",
        },
      ],
    },
    toolsweuse: {
      content:
        "At VD Infotech, we leverage tools for design and development...",
      images: [
        { imageSrc: "/images/home/tools/pr.png", alt: "tool image" },
        { imageSrc: "/images/home/tools/ai.png", alt: "tool image" },
      ],
    },
  },
};

export default function ServicePage() {
  const params = useParams();
  const { serviceName } = params;

  // Find service data based on dynamic route
  const service = serviceData[serviceName];

  if (!service) {
    return <h1>Service not found</h1>;
  }

  return (
    <div>
      <ServiceBanner title={service.title} />
      <AboutAndForm description={service.description} />
      <Discuss data={service.discuss} />
      <ToolsWeUse data={service.toolsweuse} />
      <ClientReview />
      <OurPartners />
      <Reviews />
      <FaqSection />
      <HomeBlogs />
      <Footer />
    </div>
  );
}
