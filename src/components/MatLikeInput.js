import {
    Box,
    FormControl,
    Input,
    InputGroup,
    FormLabel,
    FormErrorMessage,
  } from "@chakra-ui/react";
import { useState } from "react";
import classes from './MatLikeInput.css'

export const MatLikeInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, onChange, id, ...inputProps } = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };

    const MatLikeLabel = {
            p: "0 12px",
            bg: "#fff",
            color: "#999",
            pointerEvents: "none",
            pos: "absolute",
            w: "fit-content",
            h: "fit-content",
            zIndex:"5"
    }

    return (
      <Box p="5" bg="white">
        <Box pos="relative">
          <FormControl isRequired={ props.required === true ? true : false } md="45px">
          <FormLabel
            top="-12px"
            left={"6px"}
            sx={MatLikeLabel}
          >
            {label}
          </FormLabel>
            <InputGroup>
              <Input
                p="5"
                outline="none"
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                  inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
              />
            </InputGroup>
            {/*
              <FormErrorMessage>{errorMessage}</FormErrorMessage>
             */} 

          </FormControl>
        </Box>
      </Box>
    );
}
