import "./form-input.styles"
import {FormInputLabel, GroupComponent, FormInputComponent} from "./form-input.styles";

const FormInput = ({label, ...otherProps}) => {
    return (
        <GroupComponent>
            <FormInputComponent {...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>)}
        </GroupComponent>
    )
}

export default FormInput