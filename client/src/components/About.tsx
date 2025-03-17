import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  I'm a B.Tech Information Technology student at Cochin University with a perfect 10.0 GPA in my 3rd semester. Currently working as a Frontend Developer at Dream Skrin, I'm passionate about creating beautiful and functional web experiences.
                </p>
                <div className="mt-6 space-y-2">
                  <p><strong>Location:</strong> Kerala, India</p>
                  <p><strong>Email:</strong> navneeth@example.com</p>
                  <p><strong>Availability:</strong> Open to Internship Opportunities</p>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Facts</h3>
              <ul className="space-y-2">
                <li>🎓 CGPA: 9.7 (2022-2026)</li>
                <li>🏆 Perfect 10.0 GPA in 3rd semester</li>
                <li>🏸 Regional Badminton Competitor</li>
                <li>🧘‍♂️ 50+ day meditation streak</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
