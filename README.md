# Simple React Porfolio with Chakra UI

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot
<img width="674" alt="image3" src="https://user-images.githubusercontent.com/108392678/207284241-bf1f23e8-db5d-4f7f-9779-cc9a012df8b8.png">
<img width="674" alt="image6" src="https://user-images.githubusercontent.com/108392678/207284120-a6c2386c-4053-4dc0-9558-802659e05dcf.png">
<img width="674" alt="image5" src="https://user-images.githubusercontent.com/108392678/207284152-65736e83-1a5d-40f1-8cb8-0e7c59fb1f7a.png">
<img width="674" alt="image7" src="https://user-images.githubusercontent.com/108392678/207284102-dee97995-5b11-43c4-a34a-cea55c1a2669.png">

### Links

- GitHub URL: [Code](https://github.com/marvedventures/react-porfolio)
- Live : [Demo](react-porfolio-nhwwpppvq-marvedcodes.vercel.app)

## My process

### Built with
- [React](https://beta.reactjs.org/) - React 
- [Formik and Yup](https://reactnative.dev/docs/sectionlist) - For form validation
- [Chakra UI](https://chakra-ui.com/) - For styles and UI components

### What I learned

- Creating a React app
- Rendering a list with map function
- Using HStack, VStack, Image, Heading, Text component from Chakra
- Form validation and error handling with Formik and Yup


Here is a code snippet: 


```jsx
const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    onSubmit: values => {
      submit('https://test.com', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string()
        .email('Please enter a valid email.')
        .required('Required'),
      type: Yup.string(),
      comment: Yup.string()
        .required('Required')
        .min(25, 'Must be at least 25 characters'),
    }),
  });
```


```jsx
  <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.errors.firstName && formik.touched.firstName}
              >
                <FormLabel htmlFor='firstName'>Name</FormLabel>
                <Input
                  id='firstName'
                  name='firstName'
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
 ```

### Useful resources

- [React Docs (Rendering Lists) ](https://reactnative.dev/docs/stylesheet) - This helped me for rendering lists in the navbar. I really liked their documentation and will use it going forward.  
- [Formik & Yup (SectionList) ](https://formik.org/docs/tutorial#schema-validation-with-yup) - This helped me for formik schema validation with yup. 
- [Chakra UI (FormControl)] (https://chakra-ui.com/docs/components/form-control/usage) - This helped me for handling form errors.
## Author

- Website - [Marvin Morales Pacis](https://marvin-morales-pacis.vercel.app/)
- LinkedIn - [@marvedventures](https://www.linkedin.com/in/marvedventures/)
- Twitter - [@marvedventures](https://www.twitter.com/marvedventures)
