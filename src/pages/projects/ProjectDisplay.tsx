import React from "react";
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
  Badge,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { type ProjectData, techIcons } from "src/data/projectsData";
import { getStatusColors } from "@/utils/projectUtils";
import { useColorModeValue } from "@/components/ui/color-mode";

// Motion components
const MotionBox = motion.create(Box);
const MotionImage = motion.create(Image);

interface ProjectDisplayProps {
  selectedProjectData: ProjectData;
  projectImageVariants: any; // Type for framer-motion variants
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
  selectedProjectData,
  projectImageVariants,
}) => {
  const primaryColor = useColorModeValue("primary.solid", "primary.solid");
  const accentColor = useColorModeValue("accent.solid", "accent.solid");
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textMuted = useColorModeValue("gray.600", "gray.400");
  const colorMode = useColorModeValue('light', 'dark');

  return (
    <AnimatePresence mode="wait">
      <MotionBox
        key={selectedProjectData.id}
        variants={projectImageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        h="100%"
        position="relative"
        display="flex"
        flexDirection="column"
      >
        {/* Project Image */}
        <Box
          h={{ base: "300px", md: "400px", lg: "60%" }}
          overflow="hidden"
          position="relative"
          flexShrink={0}
        >
          <MotionImage
            src={selectedProjectData.image}
            alt={selectedProjectData.title}
            w="100%"
            h="100%"
            objectFit="cover"
            // fallbackSrc="https://via.placeholder.com/800x600/2A52BF/ffffff?text=Project+Image"
          />
          <Box
            position="absolute"
            top={4}
            right={4}
            display="flex"
            gap={2}
          >
            <Badge
              bg={getStatusColors(selectedProjectData.status, colorMode).bg}
              color={getStatusColors(selectedProjectData.status, colorMode).color}
              variant="solid"
              textTransform="capitalize"
              px={3}
              py={1}
              borderRadius="full"
              fontWeight="600"
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
          flex="1"
          justify="space-between"
          minH="0"
        >
          <VStack align="stretch" gap={3} flex="1">
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
                const IconComponent = techIcons[tech];
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

          {/* Action Buttons - Fixed container */}
          <Box pt={2} flexShrink={0}>
            <HStack gap={3} w="100%">
              <Link href={selectedProjectData.githubUrl}>
              <Button
                as={Link}
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                flex="1"
                borderColor={primaryColor}
                color={primaryColor}
                _hover={{
                  transform: "translateY(-2px)",
                  bg: primaryColor,
                  color: "white"
                }}
                transition="all 0.2s"
              >
                 <Icon as={FaGithub} ml={2} /> View Code
              </Button>
              </Link>
              {selectedProjectData.liveUrl && (
                <Link href={selectedProjectData.liveUrl}>
                <Button
                  as={Link}
                  rel="noopener noreferrer"
                  bg={accentColor}
                  color="white"
                  size="sm"
                  flex="1"
                  _hover={{
                    transform: "translateY(-2px)",
                    filter: "brightness(1.1)"
                  }}
                  transition="all 0.2s"
                >
                  <Icon as={FaExternalLinkAlt} />
                  Live Demo
                </Button>
                </Link>
              )}
            </HStack>
          </Box>
        </VStack>
      </MotionBox>
    </AnimatePresence>
  );
};

export default ProjectDisplay;