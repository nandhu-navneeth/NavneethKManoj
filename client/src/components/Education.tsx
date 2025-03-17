import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "B.Tech Information Technology",
    institution: "Cochin University",
    duration: "2022-2026",
    score: "CGPA: 9.7"
  },
  {
    degree: "XII CBSE",
    institution: "School Name",
    duration: "2022",
    score: "90%"
  },
  {
    degree: "X CBSE",
    institution: "School Name",
    duration: "2020",
    score: "93%"
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex justify-between mt-2">
                      <span>{edu.duration}</span>
                      <span className="font-medium">{edu.score}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
