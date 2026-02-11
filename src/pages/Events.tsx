import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { upcomingEvents, pastEvents, type Event } from "@/data/events";
import { Calendar, MapPin, Users, Mic, ExternalLink } from "lucide-react";

type Filter = "all" | "upcoming" | "past";

const statusColors: Record<string, string> = {
  open: "bg-green-100 text-green-700 border-green-200",
  closed: "bg-yellow-100 text-yellow-700 border-yellow-200",
  ended: "bg-muted text-muted-foreground",
};

const EventCard = ({ event, large }: { event: Event; large?: boolean }) => (
  <Card className="h-full hover:shadow-md transition-shadow">
    <CardContent className={large ? "p-6" : "p-5"}>
      <div className="flex items-start justify-between mb-3">
        <h3 className={`font-display font-semibold ${large ? "text-xl" : "text-base"}`}>{event.name}</h3>
        <Badge variant="outline" className={`text-xs capitalize ${statusColors[event.status] ?? ""}`}>
          {event.status === "open" ? "Registration Open" : event.status === "closed" ? "Registration Closed" : "Ended"}
        </Badge>
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{event.venue}</span>
        {event.attendees && <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{event.attendees}+ Attendees</span>}
        {event.speakers && <span className="flex items-center gap-1"><Mic className="h-3.5 w-3.5" />{event.speakers} Speakers</span>}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{event.description}</p>
      {event.status === "open" && event.registrationUrl ? (
        <Button asChild size="sm"><a href={event.registrationUrl}>Register Now</a></Button>
      ) : event.highlightsUrl ? (
        <Button asChild size="sm" variant="outline">
          <a href={event.highlightsUrl} target="_blank" rel="noopener noreferrer">
            View Highlights <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
      ) : null}
    </CardContent>
  </Card>
);

const Events = () => {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <main>
      <section className="py-20 sm:py-28 bg-gradient-hero text-center px-4">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Events by <span className="text-gradient">SPIC</span>
          </h1>
          <p className="text-lg text-muted-foreground">Where Innovation Meets Action</p>
        </AnimatedSection>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex gap-2 mb-10 flex-wrap">
            {(["all", "upcoming", "past"] as Filter[]).map((f) => (
              <Button key={f} size="sm" variant={filter === f ? "default" : "outline"} onClick={() => setFilter(f)} className="capitalize">
                {f}
              </Button>
            ))}
          </div>

          {/* Upcoming */}
          {(filter === "all" || filter === "upcoming") && (
            <div className="mb-16">
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold mb-6">Upcoming Events</h2>
              </AnimatedSection>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((e, i) => (
                  <AnimatedSection key={e.id} delay={i * 0.08}>
                    <EventCard event={e} large />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}

          {/* Past */}
          {(filter === "all" || filter === "past") && (
            <div>
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold mb-2">Past Events</h2>
                <p className="text-muted-foreground text-sm mb-6">Relive the Moments</p>
              </AnimatedSection>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((e, i) => (
                  <AnimatedSection key={e.id} delay={i * 0.06}>
                    <EventCard event={e} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Events;
