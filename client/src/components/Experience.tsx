import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <Card>
            <CardHeader>
              <CardTitle>Frontend Developer & Marketing Officer</CardTitle>
              <p className="text-muted-foreground">Dream Skrin | Feb 2024 - Present</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Built and tested company website frontend</li>
                <li>Helped gain 2,000+ tech enthusiast followers</li>
                <li>Working on responsive Version 2 of the website</li>
                <li>Collaborating with cross-functional teams</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
