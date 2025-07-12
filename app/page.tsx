"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import {
  Sparkles,
  BookOpen,
  Video,
  Image as ImageIcon,
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

export default function WonderlifeLandingPage() {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState("stories");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for signing up! We'll be in touch soon.");
    setEmail("");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    {
      icon: <ImageIcon className="h-6 w-6 text-primary" />,
      title: "Consultancy Services",
      description:
        "Expert guidance for event organization, communication, and management.",
    },
    {
      icon: <Video className="h-6 w-6 text-primary" />,
      title: "Planning & Coordination",
      description:
        "Comprehensive planning and coordination for seamless event execution.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Production & Logistics",
      description:
        "End-to-end production services including logistics, setup, and breakdown.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Delivery & Support",
      description:
        "Ongoing support and delivery of event materials and content.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      content:
        "SnapStory has revolutionized my content creation process. I can now create engaging stories in minutes instead of hours!",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      content:
        "Our marketing campaigns have seen a 40% increase in engagement since we started using SnapStory for our social media content.",
    },
    {
      name: "Emily Rodriguez",
      role: "Elementary Teacher",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      content:
        "My students are more engaged than ever with the educational stories I create using SnapStory. It's a game-changer for the classroom!",
    },
  ];

  // const pricingPlans = [
  //   {
  //     name: "Free",
  //     price: "$0",
  //     period: "forever",
  //     features: [
  //       "5 stories per month",
  //       "Basic AI generation",
  //       "720p video export",
  //       "Community support",
  //     ],
  //     cta: "Get Started",
  //     popular: false,
  //   },
  //   {
  //     name: "Pro",
  //     price: "$19",
  //     period: "per month",
  //     features: [
  //       "50 stories per month",
  //       "Advanced AI generation",
  //       "1080p video export",
  //       "Priority support",
  //       "Collaborative editing",
  //     ],
  //     cta: "Start Free Trial",
  //     popular: true,
  //   },
  //   {
  //     name: "Enterprise",
  //     price: "Custom",
  //     period: "pricing",
  //     features: [
  //       "Unlimited stories",
  //       "Premium AI generation",
  //       "4K video export",
  //       "Dedicated support",
  //       "API access",
  //       "Custom branding",
  //     ],
  //     cta: "Contact Sales",
  //     popular: false,
  //   },
  // ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2">
            {/* <Sparkles className="h-6 w-6 text-primary" /> */}
            <span className="text-xl font-bold">Wonderlife</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Testimonials
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="container md:hidden py-4 flex flex-col gap-4 px-4">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary py-2"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary py-2"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary py-2"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary py-2"
            >
              Testimonials
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge variant="outline" className="px-3 py-1">
                <Sparkles className="mr-1 h-3 w-3" />
                Event Production Team
              </Badge>
              <h1 className="text-3xl font-bold tracking sm:text-4xl md:text-5xl lg:text-6xl">
                Elevate Your Events with Seamless Organization
                <br />& Creative Storytelling
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Wonderlife.vn is your all-in-one platform for managing events,
                creating engaging stories, and sharing unforgettable moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="gap-1">
                  Call us for more info
                </Button>
                <Button size="lg" variant="outline">
                  See Projects
                </Button>
              </div>
            </div>

            <div className="mt-16 rounded-lg border bg-background p-2 shadow-lg">
              <div className="rounded-md bg-muted p-1">
                <Tabs defaultValue="stories" className="w-full">
                  <div className="flex items-center justify-between px-4 py-2">
                    <TabsList className="grid w-full max-w-full grid-cols-6">
                      <TabsTrigger value="project1">Lá Chắn</TabsTrigger>
                      <TabsTrigger value="project2">
                        Sinh nhật Cổ Động
                      </TabsTrigger>
                      <TabsTrigger value="project3">La French Tech</TabsTrigger>
                      <TabsTrigger value="project4">The Felix</TabsTrigger>
                      <TabsTrigger value="project5">WEB3</TabsTrigger>
                      <TabsTrigger value="project6">ECV</TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="project1" className="p-4">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1">
                        <div className="rounded-lg overflow-hidden border shadow-sm">
                          <img
                            src="/project1.jpg"
                            alt="AI Story Generation"
                            className="w-full h-auto object-cover aspect-video"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="project2" className="p-4">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1">
                        <div className="rounded-lg overflow-hidden border shadow-sm">
                          <img
                            src="/project2.jpg"
                            alt="Video Creation"
                            className="w-full h-auto object-cover aspect-video"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="project3" className="p-4">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1">
                        <div className="rounded-lg overflow-hidden border shadow-sm">
                          <img
                            src="/project3.jpg"
                            alt="Educational Content"
                            className="w-full h-auto object-cover aspect-video"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="project4" className="p-4">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1">
                        <div className="rounded-lg overflow-hidden border shadow-sm">
                          <img
                            src="/project4.jpg"
                            alt="Educational Content"
                            className="w-full h-auto object-cover aspect-video"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="project5" className="p-4">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1">
                        <div className="rounded-lg overflow-hidden border shadow-sm">
                          <img
                            src="/project5.jpg"
                            alt="Educational Content"
                            className="w-full h-auto object-cover aspect-video"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="project6" className="p-4">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1">
                        <div className="rounded-lg overflow-hidden border shadow-sm">
                          <img
                            src="/project6.jpg"
                            alt="Educational Content"
                            className="w-full h-auto object-cover aspect-video"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
                Consulting Services For Event Organization, Event Communication
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We provide expert consulting services to help you plan,
                organize, and execute successful events that leave a lasting
                impression.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {features.map((feature, index) => (
                <Card key={index} className="border bg-background">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-2 rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How Wonderlife Works
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Steps to achieve your event goals with our platform:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Share with us your story
                </h3>
                <p className="text-muted-foreground">
                  Share your expectations and ideas with our team to get
                  started.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Brainstorming with our experts
                </h3>
                <p className="text-muted-foreground">
                  Our team collaborates with you to refine your ideas and
                  develop a comprehensive plan.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Execute</h3>
                <p className="text-muted-foreground">
                  We handle all aspects of event production, from logistics to
                  content creation, ensuring a smooth and successful event.
                </p>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <Button size="lg" className="gap-2">
                Contact Now <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Users Say
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from our satisfied users who have transformed their idea
                into event with Wonderlife.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border bg-background">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section id="pricing" className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that works best for your storytelling needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`border ${
                    plan.popular ? "border-primary shadow-lg" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        {plan.popular && (
                          <Badge className="bg-primary text-primary-foreground">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">
                          /{plan.period}
                        </span>
                      </div>
                      <Separator className="my-4" />
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`mt-6 w-full ${
                          plan.popular
                            ? ""
                            : "bg-muted-foreground/80 hover:bg-muted-foreground"
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Idea into Event?
              </h2>
              <p className="max-w-[700px] md:text-xl">
                Join thousands of satisfied users who have created stunning
                stories and events with Wonderlife.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-md flex-col gap-2 sm:flex-row mt-6"
              >
                <Input
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-primary-foreground text-background"
                />
                <Button type="submit" variant="secondary">
                  Get Started With Wonderlife
                </Button>
              </form>
              <p className="text-sm mt-2">
                By signing up, you agree to our{" "}
                <a href="#" className="text-secondary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-secondary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">Wonderlife</span>
              </div>
              <p className="text-muted-foreground">
                Production team for events, communication, and management.
              </p>
              <div className="flex gap-4 mt-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Examples
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} TUNGSONLE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
