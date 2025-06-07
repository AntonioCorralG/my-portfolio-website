import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { type ProjectData } from "src/data/projectsData";
import { useColorModeValue } from "@/components/ui/color-mode"; // To get current color mode

interface ProjectAccordionListProps {
  projects: ProjectData[];
  selectedProjectId: string;
  openAccordionItem: string[];
  onAccordionChange: (projectId: string) => void;
}

const ProjectAccordionList: React.FC<ProjectAccordionListProps> = ({
  projects,
  selectedProjectId,
  openAccordionItem,
  onAccordionChange,
}) => {
  const primaryColor = useColorModeValue("primary.solid", "primary.solid");
  const accentColor = useColorModeValue("accent.solid", "accent.solid");
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textMuted = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack align="stretch" h="100%">
      <Box p={6} borderBottom="1px solid" borderColor={borderColor}>
        <Heading
          as="h3"
          size="md"
          color="fg.DEFAULT"
          fontWeight="600"
        >
          All Projects ({projects.length})
        </Heading>
      </Box>

      <Box flex="1" overflow="auto">
        <AccordionRoot
          value={openAccordionItem}
          onValueChange={(details) => {
            const newValue = details.value[0];
            if (newValue) {
              onAccordionChange(newValue);
            }
          }}
          variant="plain"
        >
          {projects.map((project) => (
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
                  selectedProjectId === project.id
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
                          bg={accentColor}
                          color="white"
                          variant="solid"
                          size="sm"
                          px={2}
                          py={1}
                          borderRadius="md"
                        >
                          Featured
                        </Badge>
                      )}
                    </HStack>
                    <Text
                      fontSize="xs"
                      color={textMuted}
                      textAlign="left"
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
                        borderColor={primaryColor}
                        color={primaryColor}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        size="sm"
                        fontSize="xs"
                        borderColor={primaryColor}
                        color={primaryColor}
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
  );
};

export default ProjectAccordionList;