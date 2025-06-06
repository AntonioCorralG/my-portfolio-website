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
  SimpleGrid,
  Container,
  Badge,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useColorModeValue } from "@/components/ui/color-mode";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Motion components
const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);
const MotionVStack = motion.create(VStack);
const MotionHStack = motion.create(HStack);

const AboutMe = () => {
  const navigate = useNavigate();
  const primaryColor = useColorModeValue("primary.solid", "primary.solid");
  const accentColor = useColorModeValue("accent.solid", "accent.solid");
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textMuted = useColorModeValue("gray.600", "gray.400");

  const yourImageUrl = "public/my-headshot.png";

  const handleNavigateToProjects = () => {
    navigate("/projects");
  };

  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  const handleNavigateToSkills = () => {
    navigate("/skills");
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

  return (
    <Box>
      {/* Hero Section */}
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Container maxW="container.xl" py={{ base: 5, md: 10 }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 12, md: 16 }}
          >
            {/* Text Content */}
            <MotionVStack
              variants={itemVariants}
              align={{ base: "center", lg: "flex-start" }}
              gap={6}
              flex="1"
              maxW={{ base: "100%", lg: "600px" }}
            >
              <VStack align={{ base: "center", lg: "flex-start" }} gap={4}>
                <Badge
                  colorScheme="primary"
                  variant="subtle"
                  fontSize="sm"
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  Frontend Developer
                </Badge>
                <Heading
                  as="h1"
                  size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  color={primaryColor}
                  textAlign={{ base: "center", lg: "left" }}
                  fontWeight="800"
                  lineHeight="1.1"
                >
                  Hi, I'm{" "}
                  <Box as="span" color={accentColor}>
                    Gonzalo
                  </Box>
                </Heading>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={textMuted}
                  textAlign={{ base: "center", lg: "left" }}
                  lineHeight="1.6"
                  maxW="500px"
                >
                  A passionate Frontend Web Developer focused on building
                  engaging, accessible, and high-performance web experiences.
                </Text>
              </VStack>

              <HStack gap={4} pt={2}>
                <Button
                  onClick={handleNavigateToProjects}
                  colorScheme="primary"
                  size="lg"
                  _hover={{ transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  View My Projects
                </Button>
                <Button
                  onClick={handleNavigateToContact}
                  variant="outline"
                  size="lg"
                  _hover={{ transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  Get in Touch
                </Button>
              </HStack>
            </MotionVStack>

            {/* Image */}
            <MotionBox variants={itemVariants} position="relative">
              <Box
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "-20px",
                  left: "-20px",
                  right: "20px",
                  bottom: "20px",
                  bg:
                    "linear-gradient(135deg, " +
                    primaryColor +
                    ", " +
                    accentColor +
                    ")",
                  borderRadius: "2xl",
                  zIndex: -1,
                }}
              >
                <Image
                  src={yourImageUrl}
                  alt="Gonzalo Corral - Professional Headshot"
                  borderRadius="2xl"
                  boxSize={{ base: "280px", md: "320px", lg: "380px" }}
                  objectFit="cover"
                  boxShadow="2xl"
                  bg={cardBg}
                  p={2}
                />
                <IconButtonLink
                  href="https://www.linkedin.com/in/gonzalocorral/"
                  icon={FaLinkedin}
                  label="LinkedIn"
                  color="#0077B5"
                />
                <IconButtonLink
                  href="https://github.com/AntonioCorralG"
                  icon={FaGithub}
                  label="GitHub"
                  color="#333"
                />
                <IconButtonLink
                  href="mailto:youremail@example.com"
                  icon={FaEnvelope}
                  label="Email"
                  color={accentColor}
                />
              </Box>
            </MotionBox>
          </Flex>
        </Container>
      </MotionBox>

      {/* Journey Section */}
      <Box bg={sectionBg} py={{ base: 5, md: 15 }}>
        <Container maxW="container.xl">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <VStack gap={12} align="stretch">
              <MotionVStack variants={itemVariants} gap={4} textAlign="center">
                <Heading
                  as="h2"
                  size={{ base: "xl", md: "2xl" }}
                  color="fg.DEFAULT"
                  fontWeight="700"
                >
                  My Journey into Web Development
                </Heading>
                <Box w="60px" h="4px" bg={accentColor} borderRadius="full" />
              </MotionVStack>

              <VStack gap={8} align="stretch" maxW="800px" mx="auto">
                <MotionBox variants={itemVariants}>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="fg.DEFAULT"
                    lineHeight="1.7"
                  >
                    My path to web development is driven by a deep passion for
                    leveraging technology to solve real-world problems. While my
                    years as a Teach for America educator honed my
                    problem-solving and communication skills, they also ignited
                    a desire to find new avenues for positive change at scale.
                  </Text>
                </MotionBox>

                <MotionBox variants={itemVariants}>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="fg.DEFAULT"
                    lineHeight="1.7"
                  >
                    The transition into web development felt like a natural
                    progression, combining my love for education with the power
                    of technology.
                  </Text>
                </MotionBox>

                <MotionBox
                  variants={itemVariants}
                  bg={cardBg}
                  p={8}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={borderColor}
                  boxShadow="lg"
                  position="relative"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    w: "4px",
                    h: "100%",
                    bg: accentColor,
                    borderRadius: "full",
                  }}
                >
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="fg.DEFAULT"
                    lineHeight="1.7"
                  >
                    Now, as a web developer, I apply my expertise to craft
                    inclusive and user-centric digital experiences. My
                    dedication to web accessibility (WCAG) isn't just a
                    technical skill; it's a core value, stemming from my
                    commitment to ensuring technology empowers everyone.
                  </Text>
                </MotionBox>
              </VStack>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      {/* What I Do Section */}
      <Container maxW="container.xl" py={{ base: 16, md: 20 }}>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <VStack gap={12} align="stretch">
            <MotionVStack variants={itemVariants} gap={4} textAlign="center">
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl" }}
                color="fg.DEFAULT"
                fontWeight="700"
              >
                What I Do
              </Heading>
              <Box w="60px" h="4px" bg={primaryColor} borderRadius="full" />
            </MotionVStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              {[
                {
                  title: "Inclusive & Responsive UIs",
                  description:
                    "I specialize in crafting dynamic user interfaces that are not only responsive across all devices but also fundamentally accessible and inclusive.",
                  color: primaryColor,
                },
                {
                  title: "Web Accessibility & Quality",
                  description:
                    "My expertise is in meticulously building web applications that adhere to the highest accessibility standards (WCAG).",
                  color: accentColor,
                },
                {
                  title: "Modern Tech Stack",
                  description:
                    "Proficient in modern frontend technologies including React, TypeScript, Chakra UI, Vite, and more.",
                  color: "green.500",
                },
              ].map((item, index) => (
                <MotionBox
                  key={item.title}
                  variants={itemVariants}
                  bg={cardBg}
                  p={8}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={borderColor}
                  boxShadow="md"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "xl",
                  }}
                  cursor="pointer"
                >
                  <VStack
                    align="flex-start"
                    gap={4}
                    h="100%"
                    transition="all 0.3s ease"
                  >
                    <Box
                      w={12}
                      h={12}
                      bg={item.color}
                      borderRadius="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text color="white" fontWeight="bold" fontSize="xl">
                        {index + 1}
                      </Text>
                    </Box>
                    <Heading
                      as="h3"
                      size="md"
                      color="fg.DEFAULT"
                      fontWeight="600"
                    >
                      {item.title}
                    </Heading>
                    <Text color={textMuted} lineHeight="1.6" flex="1">
                      {item.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>

            <MotionFlex variants={itemVariants} justify="center" pt={4}>
              <Button
                onClick={handleNavigateToSkills}
                colorScheme="accent"
                size="lg"
                _hover={{ transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                See All My Skills
              </Button>
            </MotionFlex>
          </VStack>
        </MotionBox>
      </Container>

      {/* Connect Section */}
      <Box bg={sectionBg} py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <VStack gap={12}>
              <MotionVStack variants={itemVariants} gap={6} textAlign="center">
                <Heading
                  as="h2"
                  size={{ base: "xl", md: "2xl" }}
                  color="fg.DEFAULT"
                  fontWeight="700"
                >
                  Let's Connect!
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color={textMuted}
                  maxW="600px"
                  lineHeight="1.6"
                >
                  I'm always open to new opportunities, collaborations, or just
                  a friendly chat about web development. Feel free to reach out!
                </Text>
              </MotionVStack>

              <MotionHStack variants={itemVariants} gap={6} justify="center">
                <Button
                  // as={RouterLink}
                  onClick={handleNavigateToContact}
                  colorScheme="accent"
                  size="lg"
                  // rightIcon={<FaArrowRight />}
                  _hover={{ transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  Contact Me
                </Button>
              </MotionHStack>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

// Enhanced IconButtonLink component
interface IconButtonLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  color: string;
}

// to be used
const IconButtonLink: React.FC<IconButtonLinkProps> = ({
  href,
  icon,
  label,
  color,
}) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      bg={cardBg}
      p={2}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="md"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
        borderColor: color,
      }}
      transition="all 0.3s ease"
      cursor="pointer"
      aria-label={label}
      display="inline-block"
    >
      <Icon as={icon} boxSize={8} color={color} />
    </Link>
  );
};

export default AboutMe;
