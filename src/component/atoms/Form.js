import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Form as BsForm } from "react-bootstrap";

const Form = ({
                  children,
                  defaultValues,
                  onSubmit = null,
                  onError = null,
                  onWatch = null,
                  useFormRHF,
                  ...props
              }) => {

    let useFormMethods = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    if (useFormRHF) {
        useFormMethods = useFormRHF;
    }

    const {
        handleSubmit,
        watch,
        setValue
    } = useFormMethods;

    useEffect(() => {
        if (!defaultValues || Object.keys(defaultValues).length === 0) {
            return;
        }
        Object.keys(defaultValues).forEach((object) => {
            setValue(object, defaultValues[object]);
        });
    }, [defaultValues, setValue]);
    
    
    useEffect(() => {
        if (onWatch) {
            onWatch(watch);
        }
    }, [watch, onWatch]);

    return <FormProvider {...useFormMethods} >
        <BsForm className="mb-5" onSubmit={handleSubmit(onSubmit, onError)} {...props}>
            {children}
        </BsForm>
    </FormProvider>
}

export default Form;