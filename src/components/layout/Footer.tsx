import { Box, Button, Flex, Text } from '@chakra-ui/react'; // Removed useColorModeValue here
import { Link as RouterLink } from 'react-router-dom';
import { useColorModeValue } from '@/components/ui/color-mode'; // <-- IMPORT useColorModeValue from YOUR file

const Footer = () => {
  const textColor = useColorModeValue('fg.muted', 'fg.muted');

  return (
    <Box as="footer" width="100%" px={{ base: 4, md: 8 }} py="6">
      {/* <Divider orientation="horizontal" borderColor="border.DEFAULT" mb="6" /> Simple horizontal line */}
      <Flex justify="center" align="center" direction={{ base: 'column', md: 'row' }} gap="4">
        <Button
          as="a"
          href="/resume.pdf"
          download="YourName_Resume.pdf"
          colorScheme="primary"
          size="md"
          variant="outline"
          aria-label="Download Resume"
        >
          Download Resume
        </Button>
        <Text fontSize="sm" color={textColor}>
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;