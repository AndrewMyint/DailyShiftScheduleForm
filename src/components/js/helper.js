import * as Yup from "yup";

const generateValitationShape = (nameList) => {
  return {
    techName: Yup.string("Choose a name").oneOf(nameList,'Invalid Name').required('Tech Name is required'),
    expireDate: Yup.string("Choose an expire date").required('Expiration Date is required'),
    description: Yup.string("Fill the description").required('Description is required')
  };
};

export default generateValitationShape;
