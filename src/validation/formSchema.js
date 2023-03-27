import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required("Must include a name.")
        .min(2, "name must be at least 2 characters"),
    address: Yup   
        .string()
        .required("We need your delivery address to get you your pizza!")
        .min(10, "Delivery address must include at least 10 characters. Be sure to include your street number, street name, apartment or suite number (if applicable), city, state and zip Code."),
    size: Yup   
        .string()
        .oneOf(["small", "medium", "large"], "You must select a size."),
    jalapeños: Yup
        .boolean(),
    blackOlives: Yup
        .boolean(),
    pineapples: Yup
        .boolean(),
    mushrooms: Yup
        .boolean(),
    special: Yup
        .string()
});

export default formSchema;