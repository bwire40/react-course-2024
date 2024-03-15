# React Full Course

## Simple count application explaining the use of States

- variable injection using curly braces

### state

- any change in state rerenders the webpage

### Question

 ***
    const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

- What do you think is the expected output for the above?

### solution

*** const addValue = () => {
  
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

- The Above count will increment by 5

-
