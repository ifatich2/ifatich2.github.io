import classNames from 'classnames';
import { forwardRef, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import FormItemContainer from "./FormItemContainer";
import FormText from "./FormText";
import FormInput from "../atoms/FormInput";


const FormItem = forwardRef(({
    type = "text", /* All type of <input> plus <textarea> */
    name,
    title,
    placeholder,
    leftIcon,
    leftIconOnClick,
    rightIcon,
    rightIconOnClick,
    rightAction,
    helperText,
    errorText,
    validText,
    isValid,
    isInvalid,
    isLoading,

    style,
    className,

    registerProps,
    required,
    maxLength,
    minLength,
    max,
    min,
    pattern,
    disabled,
    onChange,
    onBlur,
    value,
    ...props
}, ref) => {

    const { register = () => { },  formState = {}  } = useFormContext() || {};
    const {errors} = formState;
    const inputErrors = errors?.[name];

    const rightActionRef = useRef(null);

    const [rightActionPadding, setRightActionPadding] = useState({});
    const [validationBackgroundPosition, setValidationBackgroundPosition] = useState({});
    const [helperTextState, setHelperTextState] = useState([]);
    const [errorTextState, setErrorTextState] = useState([]);
    const [validTextState, setValidTextState] = useState([]);
    const [isValidState, setIsValidState] = useState(false);
    const [isInvalidState, setIsInvalidState] = useState(false);
    const [inputErrorsState, setInputErrorsState] = useState({});
    const [registerPropsState, setRegisterPropsState] = useState();
    const [assignRegisterProps] = useState();


    useEffect(() => {
        let validationIconOffsetWidth = 0;
        if (isValidState || setIsValidState) {
            validationIconOffsetWidth = 34;
        }
        if (rightAction && rightActionRef.current.offsetWidth > 0) {
            setRightActionPadding({paddingRight: rightActionRef.current.offsetWidth + validationIconOffsetWidth - 12});
            setValidationBackgroundPosition({backgroundPosition: `right ${46 - 10 + validationIconOffsetWidth}px center`});
        }
    }, [rightAction, isValidState, setIsValidState, inputErrors]);

    useEffect(() => {
        setHelperTextState([]);
        if (helperText && Array.isArray(helperText)) {
            setHelperTextState(helperText);
        }
        if (helperText && typeof helperText === "string") {
            setHelperTextState([helperText]);
        }
    }, [helperText]);

    useEffect(() => {
        setErrorTextState([]);
        if (errorText && Array.isArray(errorText)) {
            setErrorTextState(errorText);
        }
        if (errorText && typeof errorText === "string") {
            setErrorTextState([errorText]);
        }
    }, [errorText]);

    useEffect(() => {
        setValidTextState([]);
        if (validText && Array.isArray(validText)) {
            setValidTextState(validText);
        }
        if (validText && typeof validText === "string") {
            setValidTextState([validText]);
        }
    }, [validText]);

    useEffect(() => {
        setIsValidState(isValid);
    }, [isValid]);

    useEffect(() => {
        setIsInvalidState(isInvalid);
    }, [isInvalid]);

    useEffect(() => {
        if (registerProps === undefined) {
            return;
        }
        setRegisterPropsState(registerProps);
    }, [registerProps]);

    useEffect(() => {
        setInputErrorsState(inputErrors);
    }, [inputErrors]);

    useEffect(() => {
        setIsInvalidState(isInvalid);
        if (inputErrors) {
            setIsInvalidState(true);
        }
    }, [inputErrors, isInvalid]);

    useEffect(() => {
        if (registerPropsState === undefined) {
            return;
        }
        if (required !== undefined) {
            assignRegisterProps("required", required);
        }
        if (maxLength !== undefined) {
            assignRegisterProps("maxLength", maxLength);
        }
        if (minLength !== undefined) {
            assignRegisterProps("minLength", minLength);
        }
        if (max !== undefined) {
            assignRegisterProps("max", max);
        }
        if (min !== undefined) {
            assignRegisterProps("min", min);
        }
        if (pattern !== undefined) {
            assignRegisterProps("pattern", pattern);
        }
        if (disabled !== undefined) {
            assignRegisterProps("disabled", disabled);
        }
        if (onChange !== undefined) {
            assignRegisterProps("onChange", onChange);
        }
        if (onBlur !== undefined) {
            assignRegisterProps("onBlur", onBlur);
        }
        if (value !== undefined) {
            assignRegisterProps("value", value);
        }
        if (isLoading !== undefined) {
            assignRegisterProps("disabled", isLoading);
            assignRegisterProps("isLoading", isLoading);
        }
    },[ registerProps, required, maxLength, minLength, max,  min, pattern, disabled, onChange,  onBlur, value, isLoading, assignRegisterProps, registerPropsState ]);

    return <FormItemContainer name={name}
                              title={title}
                              isRequired={registerPropsState?.required}
                              isLoading={registerPropsState?.isLoading}>

        <FormInput
            ref={ref}
            type={type}
            placeholder={placeholder}
            style={{...rightActionPadding, ...validationBackgroundPosition, ...style}}
            className={classNames(className, isValidState && "is-valid", isInvalidState && "is-invalid")}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            leftIconOnClick={leftIconOnClick}
            rightAction={rightAction}
            rightIconOnClick={rightIconOnClick}
            rightActionRef={rightActionRef}
            register={register}
            name={name}
            registerPropsState={registerPropsState}
            {...props} />

        <FormText type="invalid"
                  content={errorTextState}
                  show={errorTextState.length > 0}
                  triggerChange={errorTextState} />
        <FormText type="invalid"
                  content={inputErrorsState?.message}
                  show={inputErrorsState?.message !== undefined}
                  triggerChange={inputErrorsState?.message} />
        <FormText type="valid"
                  content={validTextState}
                  show={validTextState.length > 0}
                  triggerChange={validTextState} />
        <FormText content={helperTextState}
                  show={helperTextState.length > 0}
                  triggerChange={helperTextState} />

    </FormItemContainer>;
});

export default FormItem;