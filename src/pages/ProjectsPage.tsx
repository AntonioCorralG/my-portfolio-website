import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  VStack,
  HStack,
  Icon,
  Container,
  Badge,
  Link,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaChevronDown,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiVite,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

// Motion components
const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);
const MotionVStack = motion.create(VStack);
const MotionImage = motion.create(Image);

// Types
interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "planning";
  category: "frontend" | "fullstack" | "backend" | "mobile";
  featured: boolean;
}

// Sample project data - replace with your actual projects
const projectsData: ProjectData[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics.",
    longDescription:
      "Built a full-featured e-commerce admin dashboard that provides comprehensive analytics, inventory management, and customer insights. The application features real-time data updates, responsive design, and an intuitive user interface that makes complex data easy to understand and act upon.",
    image: "/projects/ecommerce-dashboard.jpg",
    technologies: ["React", "TypeScript", "Chakra UI", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard-demo.com",
    status: "completed",
    category: "fullstack",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team coordination features.",
    longDescription:
      "Developed a modern task management application that enables teams to collaborate effectively. Features include drag-and-drop task organization, real-time notifications, file attachments, and comprehensive project tracking. Built with accessibility in mind, following WCAG guidelines.",
    image: "/projects/task-manager.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Firebase",
    ],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.com",
    status: "completed",
    category: "fullstack",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Analytics Platform",
    description:
      "A data visualization platform for weather patterns and climate analysis.",
    longDescription:
      "Created an interactive weather analytics platform that visualizes complex meteorological data through engaging charts and maps. The platform integrates multiple weather APIs and provides insights for both casual users and meteorology professionals.",
    image: "/projects/weather-platform.jpg",
    technologies: ["React", "D3.js", "TypeScript", "Python", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/weather-platform",
    status: "in-progress",
    category: "frontend",
    featured: false,
  },
  {
    id: "4",
    title: "Personal Finance Tracker",
    description:
      "A secure personal finance application with budget tracking and expense categorization.",
    longDescription:
      "Built a comprehensive personal finance tracking application that helps users manage their budgets, track expenses, and achieve financial goals. Features secure authentication, data encryption, and detailed financial reporting with interactive charts.",
    image: "/projects/finance-tracker.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/yourusername/finance-tracker",
    liveUrl: "https://finance-tracker-demo.com",
    status: "completed",
    category: "fullstack",
    featured: true,
  },
  {
    id: "5",
    title: "Learning Management System",
    description:
      "An educational platform for online course delivery and student progress tracking.",
    longDescription:
      "Developed a comprehensive learning management system that enables educators to create and deliver online courses. Features include video streaming, interactive quizzes, progress tracking, and student-teacher communication tools.",
    image: "/projects/lms-platform.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    githubUrl: "https://github.com/yourusername/lms-platform",
    status: "planning",
    category: "fullstack",
    featured: false,
  },
];

// Technology icon mapping
const techIcons: Record<string, React.ElementType> = {
  React: FaReact,
  TypeScript: SiTypescript,
  JavaScript: FaJs,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  "Tailwind CSS": SiTailwindcss,
  "Chakra UI": SiChakraui,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: FaDatabase,
  Firebase: SiFirebase,
  "Next.js": SiNextdotjs,
  Vite: SiVite,
  Python: FaPython,
  "D3.js": FaJs,
  Prisma: FaDatabase,
  "Socket.io": FaNodeJs,
  AWS: FaDatabase,
  Stripe: FaJs,
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<string>(
    projectsData[0].id
  );
  const [openAccordionItem, setOpenAccordionItem] = useState<string[]>([
    projectsData[0].id,
  ]);

  // Theme colors
  const primaryColor = useColorModeValue("primary.solid", "primary.solid");
  const accentColor = useColorModeValue("accent.solid", "accent.solid");
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textMuted = useColorModeValue("gray.600", "gray.400");

  // Responsive layout
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const selectedProjectData =
    projectsData.find((p) => p.id === selectedProject) || projectsData[0];

  const handleAccordionChange = (projectId: string) => {
    setSelectedProject(projectId);
    setOpenAccordionItem([projectId]);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projectImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Box>
      {/* Hero Section */}
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Container maxW="container.xl" py={{ base: 5, md: 5 }}>
          <MotionVStack variants={itemVariants} gap={3} textAlign="center">
            {/* <Badge
              colorScheme="primary"
              variant="subtle"
              fontSize="sm"
              px={3}
              py={1}
              borderRadius="full"
            >
              My Work
            </Badge> */}
            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              color={primaryColor}
              fontWeight="800"
              lineHeight="1.1"
            >
              Featured Projects
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={textMuted}
              maxW="600px"
              lineHeight="1.6"
            >
              A showcase of my recent work in web development, featuring modern
              technologies and user-centered design approaches.
            </Text>
          </MotionVStack>
        </Container>
      </MotionBox>

      {/* Main Projects Section */}
      <Box bg={sectionBg} py={{ base: 5, md: 10 }}>
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 400px" }}
            gap={8}
            h={{ base: "auto", lg: "700px" }}
          >
            {/* Project Display (Left side on desktop, bottom on mobile) */}
            <GridItem
              order={{ base: 2, lg: 1 }}
              bg={cardBg}
              borderRadius="2xl"
              border="1px solid"
              borderColor={borderColor}
              overflow="hidden"
              boxShadow="xl"
              position="relative"
            >
              <AnimatePresence mode="wait">
                <MotionBox
                  key={selectedProject}
                  variants={projectImageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  h="100%"
                  position="relative"
                >
                  {/* Project Image */}
                  <Box
                    h={{ base: "300px", md: "400px", lg: "60%" }}
                    overflow="hidden"
                    position="relative"
                  >
                    <MotionImage
                      src={selectedProjectData.image}
                      alt={selectedProjectData.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      fallbackSrc="https://via.placeholder.com/800x600/2A52BF/ffffff?text=Project+Image"
                    />
                    <Box
                      position="absolute"
                      top={4}
                      right={4}
                      display="flex"
                      gap={2}
                    >
                      <Badge
                        colorScheme={
                          selectedProjectData.status === "completed"
                            ? "green"
                            : selectedProjectData.status === "in-progress"
                            ? "orange"
                            : "gray"
                        }
                        variant="solid"
                        textTransform="capitalize"
                      >
                        {selectedProjectData.status.replace("-", " ")}
                      </Badge>
                    </Box>
                  </Box>

                  {/* Project Details */}
                  <VStack
                    align="stretch"
                    p={6}
                    gap={4}
                    h={{ base: "auto", lg: "40%" }}
                    justify="space-between"
                  >
                    <VStack align="stretch" gap={3}>
                      <Heading
                        as="h3"
                        size="lg"
                        color="fg.DEFAULT"
                        fontWeight="700"
                      >
                        {selectedProjectData.title}
                      </Heading>
                      <Text color={textMuted} fontSize="md" lineHeight="1.6">
                        {selectedProjectData.longDescription}
                      </Text>
                    </VStack>

                    {/* Technologies */}
                    <VStack align="stretch" gap={3}>
                      <Text fontSize="sm" fontWeight="600" color="fg.DEFAULT">
                        Technologies Used
                      </Text>
                      <Flex wrap="wrap" gap={2}>
                        {selectedProjectData.technologies.map((tech) => {
                          const IconComponent = techIcons[tech] || FaJs;
                          return (
                            <HStack
                              key={tech}
                              bg={sectionBg}
                              px={3}
                              py={1}
                              borderRadius="full"
                              fontSize="sm"
                              border="1px solid"
                              borderColor={borderColor}
                            >
                              <Icon
                                as={IconComponent}
                                boxSize={3}
                                color={primaryColor}
                              />
                              <Text>{tech}</Text>
                            </HStack>
                          );
                        })}
                      </Flex>
                    </VStack>

                    {/* Action Buttons */}
                    <HStack gap={3} pt={2}>
                      <Button
                        as={Link}
                        href={selectedProjectData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<FaGithub />}
                        variant="outline"
                        size="sm"
                        flex="1"
                        _hover={{ transform: "translateY(-2px)" }}
                        transition="all 0.2s"
                      >
                        View Code
                      </Button>
                      {selectedProjectData.liveUrl && (
                        <Button
                          as={Link}
                          href={selectedProjectData.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          leftIcon={<FaExternalLinkAlt />}
                          colorScheme="primary"
                          size="sm"
                          flex="1"
                          _hover={{ transform: "translateY(-2px)" }}
                          transition="all 0.2s"
                        >
                          Live Demo
                        </Button>
                      )}
                    </HStack>
                  </VStack>
                </MotionBox>
              </AnimatePresence>
            </GridItem>

            {/* Projects Accordion (Right side on desktop, top on mobile) */}
            <GridItem
              order={{ base: 1, lg: 2 }}
              bg={cardBg}
              borderRadius="2xl"
              border="1px solid"
              borderColor={borderColor}
              overflow="hidden"
              boxShadow="lg"
            >
              <VStack align="stretch" h="100%">
                <Box p={6} borderBottom="1px solid" borderColor={borderColor}>
                  <Heading
                    as="h3"
                    size="md"
                    color="fg.DEFAULT"
                    fontWeight="600"
                  >
                    All Projects ({projectsData.length})
                  </Heading>
                </Box>

                <Box flex="1" overflow="auto">
                  <AccordionRoot
                    value={openAccordionItem}
                    onValueChange={(details) => {
                      const newValue = details.value[0];
                      if (newValue) {
                        handleAccordionChange(newValue);
                      }
                    }}
                    variant="plain"
                  >
                    {projectsData.map((project) => (
                      <AccordionItem
                        key={project.id}
                        value={project.id}
                        borderBottom="1px solid"
                        borderColor={borderColor}
                      >
                        <AccordionItemTrigger
                          p={4}
                          _hover={{ bg: sectionBg }}
                          cursor="pointer"
                          bg={
                            selectedProject === project.id
                              ? sectionBg
                              : "transparent"
                          }
                        >
                          <HStack
                            flex="1"
                            justify="space-between"
                            align="center"
                          >
                            <VStack align="stretch" flex="1" gap={1}>
                              <HStack>
                                <Heading
                                  as="h4"
                                  size="sm"
                                  color="fg.DEFAULT"
                                  fontWeight="600"
                                >
                                  {project.title}
                                </Heading>
                                {project.featured && (
                                  <Badge
                                    colorScheme="accent"
                                    variant="subtle"
                                    size="sm"
                                  >
                                    Featured
                                  </Badge>
                                )}
                              </HStack>
                              <Text
                                fontSize="xs"
                                color={textMuted}
                                textAlign="left"
                                noOfLines={2}
                              >
                                {project.description}
                              </Text>
                            </VStack>
                            <Icon
                              as={FaChevronDown}
                              transform={
                                openAccordionItem.includes(project.id)
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)"
                              }
                              transition="transform 0.2s"
                              color={textMuted}
                            />
                          </HStack>
                        </AccordionItemTrigger>
                        <AccordionItemContent pb={4} px={4}>
                          <VStack align="stretch" gap={3}>
                            <Text
                              fontSize="sm"
                              color="fg.DEFAULT"
                              lineHeight="1.5"
                            >
                              {project.longDescription}
                            </Text>
                            <Flex wrap="wrap" gap={1}>
                              {project.technologies.slice(0, 3).map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  size="sm"
                                  fontSize="xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                              {project.technologies.length > 3 && (
                                <Badge
                                  variant="outline"
                                  size="sm"
                                  fontSize="xs"
                                >
                                  +{project.technologies.length - 3} more
                                </Badge>
                              )}
                            </Flex>
                          </VStack>
                        </AccordionItemContent>
                      </AccordionItem>
                    ))}
                  </AccordionRoot>
                </Box>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action
      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <VStack gap={8} textAlign="center">
            <MotionVStack variants={itemVariants} gap={4}>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl" }}
                color="fg.DEFAULT"
                fontWeight="700"
              >
                Interested in Working Together?
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={textMuted}
                maxW="600px"
                lineHeight="1.6"
              >
                I'm always excited to take on new challenges and collaborate on
                interesting projects. Let's discuss how we can bring your ideas
                to life.
              </Text>
            </MotionVStack>

            <MotionBox variants={itemVariants}>
              <Button
                colorScheme="accent"
                size="lg"
                _hover={{ transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                Get In Touch
              </Button>
            </MotionBox>
          </VStack>
        </MotionBox>
      </Container> */}
    </Box>
  );
};

export default ProjectsPage;
