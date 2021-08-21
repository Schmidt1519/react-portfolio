import { VStack, Flex, Heading, IconButton, Spacer, Link } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useColorMode } from '@chakra-ui/color-mode';
import Projects from './components/projects';
import Header from './components/header';
import Social from './components/social';


function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  
  return (
    <VStack p={5}>
      <Flex w="100%">
        {/* create logo here, center align vertical & horizontally */}
        <Heading ml="8" size="md" fontWeight="semibold" color="blue.300">LS</Heading>
        <Spacer></Spacer>
        <Link href="https://www.linkedin.com/in/leighton-schmidt86/" isExternal><IconButton icon={<FaLinkedin />} isRound="true" mr="1"></IconButton></Link>
        <Link href="https://github.com/Schmidt1519/" isExternal><IconButton icon={<FaGithub />} isRound="true" mr="1"></IconButton></Link>
        <Link href="mailto:schmidt1519@gmail.com" isExternal> <IconButton icon={<FiMail />} isRound="true" type="button"></IconButton></Link>
        <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
        <Header></Header>
        <Projects></Projects>
        <Social></Social>

    </VStack>
  );
}

export default App;
