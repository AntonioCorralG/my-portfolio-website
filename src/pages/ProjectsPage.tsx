import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Container,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { motion } from "framer-motion";

// Import sub-components
import ProjectDisplay from "src/pages/projects/ProjectDisplay";
import ProjectAccordionList from "src/pages/projects/ProjectAccordionList";

// Import data
import { projectsData } from "src/data/projectsData";

// Motion components
const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack); // Make sure VStack is imported from Chakra if used

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<string>(
    projectsData[0].id
  );
  const [openAccordionItem, setOpenAccordionItem] = useState<string[]>([
    projectsData[0].id,
  ]);

  // Theme colors
  const primaryColor = useColorModeValue("primary.solid", "primary.solid");
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textMuted = useColorModeValue("gray.600", "gray.400");

  // Responsive layout
  // const isMobile = useBreakpointValue({ base: true, lg: false });

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
              display="flex"
              flexDirection="column"
            >
              <ProjectDisplay
                selectedProjectData={selectedProjectData}
                projectImageVariants={projectImageVariants}
              />
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
              <ProjectAccordionList
                projects={projectsData}
                selectedProjectId={selectedProject}
                openAccordionItem={openAccordionItem}
                onAccordionChange={handleAccordionChange}
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ProjectsPage;