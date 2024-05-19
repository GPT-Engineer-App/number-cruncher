import { useState } from "react";
import { Container, VStack, HStack, Button, Input, Text } from "@chakra-ui/react";
import { FaBackspace } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Input value={input} isReadOnly placeholder="0" size="lg" textAlign="right" />
        <HStack spacing={2}>
          <Button colorScheme="red" onClick={handleClear}>
            C
          </Button>
          <Button colorScheme="yellow" onClick={handleBackspace}>
            <FaBackspace />
          </Button>
          <Button onClick={() => handleButtonClick("/")}>/</Button>
          <Button onClick={() => handleButtonClick("*")}>*</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => handleButtonClick("7")}>7</Button>
          <Button onClick={() => handleButtonClick("8")}>8</Button>
          <Button onClick={() => handleButtonClick("9")}>9</Button>
          <Button onClick={() => handleButtonClick("-")}>-</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => handleButtonClick("4")}>4</Button>
          <Button onClick={() => handleButtonClick("5")}>5</Button>
          <Button onClick={() => handleButtonClick("6")}>6</Button>
          <Button onClick={() => handleButtonClick("+")}>+</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => handleButtonClick("1")}>1</Button>
          <Button onClick={() => handleButtonClick("2")}>2</Button>
          <Button onClick={() => handleButtonClick("3")}>3</Button>
          <Button colorScheme="green" onClick={handleCalculate}>
            =
          </Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => handleButtonClick("0")} w="100%">
            0
          </Button>
          <Button onClick={() => handleButtonClick(".")}>.</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
