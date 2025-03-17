import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dream Skrin Official Website",
    description: "Led design and development, currently working on responsive Version 2",
    image: "https://images.unsplash.com/photo-1710855492709-aa06902e181c",
    tags: ["React", "TypeScript", "Tailwind"],
    demo: "https://dreamskrin.com",
    github: "https://github.com/navneeth/dreamskrin"
  },
  {
    title: "Medisynth",
    description: "RDBMS-based Hospital Management System using HTML, CSS, JavaScript, Bootstrap, PHP & SQL",
    image: "https://images.unsplash.com/photo-1716788781066-7dbce308bbe0",
    tags: ["PHP", "MySQL", "Bootstrap"],
    demo: "#",
    github: "https://github.com/navneeth/medisynth"
  },
  {
    title: "Tours and Activities Website",
    description: "Developed frontend with HTML, CSS, JavaScript",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/navneeth/tours"
  },
  {
    title: "Spotify Clone",
    description: "Built using HTML and CSS",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tags: ["HTML", "CSS"],
    demo: "#",
    github: "https://github.com/navneeth/spotify-clone"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
