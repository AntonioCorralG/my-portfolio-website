import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  HStack,
  Icon,
  Container,
  Link,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Motion components
const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

const Footer = () => {
  const accentColor = useColorModeValue("accent.solid", "accent.solid");
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textMuted = useColorModeValue("gray.600", "gray.400");

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
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <MotionBox
      as="footer"
      bg={sectionBg}
      borderTop="1px solid"
      borderColor={borderColor}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <Container maxW="container.xl" py={{ base: 6, md: 8 }}>
        <MotionFlex
          variants={itemVariants}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={6}
        >
          {/* Social Links */}
          <HStack gap={1}>
        
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
              color={useColorModeValue("#333", "#fff")}
            />
                     <IconButtonLink
              href="mailto:youremail@example.com"
              icon={FaEnvelope}
              label="Email"
              color={accentColor}
            />
          </HStack>
             <Link href="/resume.pdf" download="Gonzalo_Corral_Resume.pdf">
              <Button
                as="a"
                colorScheme="primary"
                size="md"
                _hover={{ transform: "translateY(-2px)" }}
                transition="all 0.2s"
                aria-label="Download Resume"
              >
                Download Resume <Icon as={FaDownload} ml={2} colorPalette={accentColor} />
              </Button>
            </Link>



          {/* Copyright */}
          <HStack gap={2} align="center">
            <Text fontSize="sm" color={textMuted}>
              &copy; {new Date().getFullYear()} Gonzalo Corral. Made with
            </Text>
            <Icon as={FaHeart} color={accentColor} boxSize={3} />
            <Text fontSize="sm" color={textMuted}>
              using React & Chakra UI
            </Text>
          </HStack>
        </MotionFlex>
      </Container>
    </MotionBox>
  );
};

// Enhanced IconButtonLink component (reused from AboutMe)
interface IconButtonLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  color: string;
}

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
      p={3}
      borderRadius="lg"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "md",
        borderColor: color,
      }}
      transition="all 0.3s ease"
      cursor="pointer"
      aria-label={label}
      display="inline-block"
    >
      <Icon as={icon} boxSize={5} color={color} />
    </Link>
  );
};

export default Footer;
