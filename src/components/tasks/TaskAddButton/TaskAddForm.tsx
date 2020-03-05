import React from 'react';
import {
  Typography,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  Button
} from '@material-ui/core';
import { Formik, FormikErrors } from 'formik';
import { makeStyles } from '@material-ui/styles';
import InputMask from 'react-input-mask';

const TaskAddForm = () => {
  const classes = useStyles();
  return (
    <>
      <Box mb={2.5}>
        <Typography variant="h6" component="h3">
          Add New Task
        </Typography>
      </Box>
      <Formik
        initialValues={
          {
            name: '',
            description: '',
            priority: '',
            timeToComplete: ''
          } as { [index: string]: string }
        }
        validate={values => {
          const errors: FormikErrors<any> = {};
          Object.keys(values).forEach((key: string) =>
            !values[key] ? (errors[key] = 'Required') : null
          );
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <TextField
                required
                label="Name"
                variant="filled"
                placeholder="Enter Name"
                autoFocus
                fullWidth
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
            </Box>

            <Box mb={3}>
              <TextField
                required
                label="Description"
                placeholder="Enter Description"
                multiline
                rows="4"
                variant="filled"
                fullWidth
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && touched.description && errors.description}
            </Box>

            <Box mb={3}>
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="filled-priority">Priority</InputLabel>
                <Select
                  required
                  native
                  value={values.priority}
                  onChange={handleChange}
                  inputProps={{
                    name: 'priority',
                    id: 'filled-priority'
                  }}
                  placeholder="Select Priority"
                >
                  <option value="" />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </Select>
              </FormControl>
              {errors.priority && touched.priority && errors.priority}
            </Box>

            <Box mb={3}>
              <InputMask
                mask="99:59:59"
                maskChar="_"
                formatChars={{
                  '5': '[0-5]',
                  '9': '[0-9]'
                }}
                value={values.timeToComplete}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {() => <TextField
                  required
                  type="text"
                  label="Time To Complete"
                  variant="filled"
                  placeholder="Enter Time To Complete"
                  fullWidth
                  name="timeToComplete"
                />}
              </InputMask>

              {errors.timeToComplete &&
                touched.timeToComplete &&
                errors.timeToComplete}
            </Box>

            <Box display="flex" flexDirection="row-reverse">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
                className={classes.addBtn}
              >
                Add Task
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

const useStyles = makeStyles({
  addBtn: {
    color: '#FFFFFF',
    border: '1px solid #0a588c',
    backgroundColor: '#0a588c',

    '&:hover': {
      backgroundColor: '#0a588c',
      borderColor: '#0a588c'
    },

    '&:active': {
      backgroundColor: '#0a588c',
      borderColor: '#0a588c'
    }
  }
});

interface Props {
  isOpen: boolean;
}

export default TaskAddForm;
