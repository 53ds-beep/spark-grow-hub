import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { facultyAdvisor, coreLeadership, departmentHeads, teamMembers } from "@/data/team";
import { Linkedin, User } from "lucide-react";
import type { TeamMember } from "@/data/team";

const MemberCard = ({ member, size = "md" }: { member: TeamMember; size?: "lg" | "md" | "sm" }) => (
  <Card className="h-full hover:shadow-md transition-shadow group">
    <CardContent className={size === "lg" ? "p-6 text-center" : "p-4 text-center"}>
      <div className={`mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 ${size === "lg" ? "h-20 w-20" : size === "md" ? "h-16 w-16" : "h-12 w-12"}`}>
        <User className={`text-primary ${size === "lg" ? "h-10 w-10" : size === "md" ? "h-7 w-7" : "h-5 w-5"}`} />
      </div>
      <h3 className={`font-display font-semibold ${size === "sm" ? "text-sm" : "text-base"}`}>{member.name}</h3>
      <p className="text-xs text-muted-foreground">{member.role}</p>
      {member.department && <p className="text-xs text-primary mt-0.5">{member.department}</p>}
      {member.linkedinUrl && (
        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}
          className="inline-flex mt-2 text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
          <Linkedin className="h-4 w-4" />
        </a>
      )}
    </CardContent>
  </Card>
);

const Team = () => {
  return (
    <main>
      <section className="py-20 sm:py-28 bg-gradient-hero text-center px-4">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Meet the <span className="text-gradient">Team</span>
          </h1>
          <p className="text-lg text-muted-foreground">The Minds Behind SPIC</p>
        </AnimatedSection>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Faculty */}
        <section className="max-w-xs mx-auto">
          <AnimatedSection className="text-center mb-6">
            <h2 className="font-display text-xl font-bold text-muted-foreground">Faculty Patron</h2>
          </AnimatedSection>
          <AnimatedSection>
            <MemberCard member={facultyAdvisor} size="lg" />
          </AnimatedSection>
        </section>

        {/* Core Leadership */}
        <section>
          <AnimatedSection className="text-center mb-6">
            <h2 className="font-display text-2xl font-bold">Core Leadership</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {coreLeadership.map((m, i) => (
              <AnimatedSection key={m.id} delay={i * 0.08}><MemberCard member={m} size="lg" /></AnimatedSection>
            ))}
          </div>
        </section>

        {/* Department Heads */}
        <section>
          <AnimatedSection className="text-center mb-6">
            <h2 className="font-display text-2xl font-bold">Department Heads</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {departmentHeads.map((m, i) => (
              <AnimatedSection key={m.id} delay={i * 0.06}><MemberCard member={m} /></AnimatedSection>
            ))}
          </div>
        </section>

        {/* Members */}
        <section>
          <AnimatedSection className="text-center mb-6">
            <h2 className="font-display text-2xl font-bold">Team Members</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {teamMembers.map((m, i) => (
              <AnimatedSection key={m.id} delay={i * 0.05}><MemberCard member={m} size="sm" /></AnimatedSection>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Team;
